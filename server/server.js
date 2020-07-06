// TO CREATE SERVER

// Imports 'express' module
const express = require("express");
// Handles CORS
const cors = require("cors");
// Imports JWT module
const jwt = require("jsonwebtoken");
// Imports body-parser
const body_parser = require("body-parser");

const {
  create_credential,
  create_user,
  search_document_existence,
  search_email_existence,
  search_email_match,
  get_all_company_evaluations,
  request_evaluation,
  get_all_company_users,
  get_evaluation_detail,
  get_all_users
} = require("./model");

// 'express' module function that creates and 'express' server
const app = express();
// Handles CORS
app.use(cors());
//  Sends body requests from view to controller
app.use(body_parser.json());
// Makes the server 'listen' ('express' method) to the port 3000
app.listen(3003, () => {
  console.log("Initiated server!");
});

app.use(express.static(__dirname + '/build')) // relative path of client-side code
app.get('/', function(req, res) {
  res.sendFile('index.html', { root: __dirname })
})


// ENDPOINTS

// 1) LOGIN (user/company/admin)

app.post("/login", async (req, res) => {
  console.log(req.body);

  try {
    const { email, password } = req.body;
    let db_query = await search_email_match(email, "credentials");
    console.log(db_query);
    let db_result = db_query[0];
    console.log(db_result);
    if (db_result) {
      if (db_result.password == password) {
        let persona_data;
        switch (db_result.id_role) {
          case 1:
            persona_data = await search_email_match(email, "users");
            break;
          case 2:
            persona_data = await search_email_match(email, "companies");
            break;
          case 3:
            persona_data = await search_email_match(email, "admins");
            break;
          default:
            persona_data = "";
        }
        const credential_all = {
          credential: db_result.id_credential,
          email: db_result.email,
          role: db_result.id_role,
        };
console.log(persona_data)
        const token = jwt.sign(credential_all, "secretpassword");
        res.status(200).send(
          JSON.stringify({
            token: token,
            credential: credential_all,
            persona_data: persona_data[0],
          })
        );
      } else {
        res.status(403).send({ msg: "Wrong password" });
      }
    } else {
      res.status(403).send({ msg: "Wrong email" });
    }
  } catch (err) {
    res.status(500).json({ error: "Error" });
  }
});





// 2) CREATE USER (company)

app.post("/users/create", async (req, res) => {
  try {
    
    const { name, id_document_type, id_company, position, phone_number, email, address } = req.body;

    const lastname = req.body.lastname;
    const document = req.body.document;
    const password = lastname + document;
    console.log(password);

    var document_existence = await search_document_existence(document);

    if (document_existence.length == 0) {
      var email_existence = await search_email_existence(email);
      if (email_existence.length == 0) {
        var id_user = await create_user(name, lastname, id_document_type, document, id_company, position, phone_number,
                                        email, address, password);

        await create_credential(email, password, 1);

        res.status(200).json({ msg: "User created successfully", id: id_user });
      } else {
        res.status(403).json({ msg: "Email already exists" });
      }
    } else {
      res.status(403).json({ msg: "Document already exists" });
    }
  } catch (err) {
    res.status(500).json({ error: "Error" });
  }
});





// 3) GET ALL COMPANY USERS

app.post(
  "/company/users/get_all",
  /*user_authentication,*/ (req, res) => {

    console.log("el id_company llego hassta el server y es " + req.body.id_company)

    try {
      get_all_company_users(req.body.id_company).then((company_users) =>
        res.status(200).json({ company_users: company_users })
      );
    } catch {
      res.status(500).json({ error: "Error" });
    }
  }
);





// 4) REQUEST EVALUATION (company)

app.post(
  "/evaluations/request",
  /*user_authentication,*/ async (req, res) => {
    try {
      let { id_user, id_company, tests, time, date } = req.body;

      var id_evaluation = await request_evaluation(id_user, id_company, tests, time, date);

      res
        .status(201)
        .json({ msg: "Evaluation requested successfully", id: id_evaluation });
    } catch {
      res.status(500).json({ error: "Error" });
    }
  }
);





// 5) GET ALL EVALUATIONS FOR COMPANY

app.post(
  "/company/evaluations/get_all",
  /*user_authentication,*/ (req, res) => {

    try {
      get_all_company_evaluations(req.body.id_company).then((evaluations) =>
        res.status(200).json({ evaluations: evaluations })
      );
    } catch {
      res.status(500).json({ error: "Error" });
    }
  }
);




// 6) GET EVALUATION DETAIL

app.post(
  "/company/evaluations/detail",
  /*user_authentication,*/ (req, res) => {

    try {
      get_evaluation_detail(req.body.idEvaluation).then((evaluation_detail) =>
        res.status(200).json({ evaluation_detail: evaluation_detail })
      );
    } catch {
      res.status(500).json({ error: "Error" });
    }
  }
);







// 7) GET ALL USERS (company/admin)

app.get(
  "/admin/users/get_all",
  /*user_authentication,*/ (req, res) => {
    try {
      get_all_users().then((users_array) =>
        res.status(200).json({ users_array: users_array })
      );
    } catch {
      res.status(500).json({ error: "Error" });
    }
  }
);