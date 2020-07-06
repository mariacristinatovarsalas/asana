const { conf_db_host, conf_db_name, conf_user, conf_password, conf_port } = require("./variables");

// Imports sequelize package
const Sequelize = require("sequelize");
// Creates database route
//const sequelize = new Sequelize('mysql://root@127.0.0.1:3306/delilah_resto');
const sequelize = new Sequelize("mysql://" + conf_user + ":" + conf_password + "@" + conf_db_host + ":" + conf_port + "/" + conf_db_name);





// 1) LOGIN (user/company/admin)

const search_email_match = async (email, table) => {
  console.log(table);
  return await sequelize.query(
    `SELECT * FROM ${table} WHERE email = '${email}'`,
    { type: sequelize.QueryTypes.SELECT }
  );
};




// 2) CREATE USER (company)

const search_document_existence = async (document) => {
  var existence_document;
  await sequelize
    .query('SELECT * FROM users WHERE document = "' + document + '"', {
      type: sequelize.QueryTypes.SELECT,
    })
    .then(function (results) {
      existence_document = results;
    });
  return existence_document;
};

const search_email_existence = async (email) => {
  var existence_email;
  await sequelize
    .query('SELECT * FROM users WHERE email = "' + email + '"', {
      type: sequelize.QueryTypes.SELECT,
    })
    .then(function (results) {
      existence_email = results;
    });
  return existence_email;
};

const create_user = async (name, lastname, id_document_type, document, id_company, position, phone_number, email, address, password) => {
  var user;
  await sequelize
    .query(
      "INSERT INTO users (name, lastname, id_document_type, document, id_company, position, phone_number, email, address, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      {
        replacements: [ name, lastname, id_document_type, document, id_company, position, phone_number, email, address, password ],
      }
    )
    .then(function (results) {
      user = results[0];
      console.log(user);
    });
  return user;
};

const create_credential = async (email, password, id_role) => {
  var credential_id;
  await sequelize
    .query(
      "INSERT INTO credentials ( email,  password, id_role) VALUES (?, ?, ?)",
      { replacements: [email, password, id_role] }
    )
    .then(function (results) {
      credential_id = results[0];
      console.log(credential_id);
    });
  return credential_id;
};







// 3) GET ALL COMPANY USERS 

const get_all_company_users = async (id_company) => {
  var company_users = await sequelize.query(
  `SELECT users.*, document_types.document_type FROM users JOIN document_types ON document_types.id_document_type = users.id_document_type WHERE users.id_company = ${id_company}`
  );

  return company_users[0]
};





// 4) GET ALL COMPANY EVALUATIONS

const get_all_company_evaluations = async (id_company) => {
  console.log("el id_company llego hassta el modelo y es " + id_company)
  var all_evaluations = await sequelize.query(
  `SELECT users.*, evaluations.*, status.status, document_types.document_type 
  FROM users JOIN evaluations ON users.id_user = evaluations.id_user JOIN status ON status.id_status = evaluations.id_status JOIN document_types ON document_types.id_document_type = users.id_document_type WHERE users.id_company = ${id_company}`
  );

  return all_evaluations[0]
};







// 5) GET EVALUATION DETAIL

const get_evaluation_detail = async (id_evaluation) => {
  var evaluation_detail = await sequelize.query(
  `SELECT tests_evaluations.id_test, tests.name FROM tests_evaluations JOIN tests ON tests.id_test = tests_evaluations.id_test WHERE tests_evaluations.id_evaluation = ${id_evaluation}`);
  return evaluation_detail[0]
};






// 6) REQUEST EVALUATION (company/admin)

const request_evaluation = async (id_user, id_company, tests, time, date) => {
  var evaluation;
  await sequelize
    .query(
      "INSERT INTO evaluations (id_user, id_company, id_status, date, time) VALUES  (?, ?, ?, ?, ?)",
      { replacements: [id_user, id_company, 1, date, time], }
    )
    .then(function (results) {
      evaluation = results[0];
    });
  await tests.forEach(async (test) => {
    await sequelize.query(
      "INSERT INTO tests_evaluations (id_test, id_evaluation) VALUES (?, ?)",
      { replacements: [test.id, evaluation] }
    );
  });
  return evaluation;
};








// 7) GET ALL USERS (admin)

const get_all_users = async () => {
  var users = await sequelize.query(
  `SELECT users.*, document_types.document_type FROM users JOIN document_types ON document_types.id_document_type = users.id_document_type`
  // `SELECT users.*, document_types.document_type, companies.name FROM users JOIN document_types ON document_types.id_document_type = users.id_document_type JOIN companies ON companies.id_company = users.id_company`
  );

  return users[0]
};







// EXPORT FUNCTIONS

module.exports = {
  search_document_existence: (document) => search_document_existence(document),
  search_email_existence: (email) => search_email_existence(email),
  create_credential: (email, password, role) => create_credential(email, password, role),
  create_user: (name, lastname, id_document_type, document, id_company, position, phone_number, email, address, password) =>
    create_user(name, lastname, id_document_type, document, id_company, position, phone_number, email, address, password),
  search_email_match: (email, table) => search_email_match(email, table),
  get_all_users: () => get_all_users(),
  get_all_users_with_evaluations: () => get_all_users_with_evaluations(),
  get_all_company_evaluations: (id_company) =>
    get_all_company_evaluations(id_company),
  request_evaluation: (id_user, company, tests, description, time, date) =>
    request_evaluation(id_user, company, tests, description, time, date),
    get_all_company_users: (id_company) => get_all_company_users(id_company),
    get_evaluation_detail: (id_evaluation) => get_evaluation_detail(id_evaluation)
};
