import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Table from "react-bootstrap/Table";
import User from "./User.js";
import MainContext from "../context/MainContext";

const Users = (props) => {
  const {
    login_res,
    get_all_company_users,
    get_all_company_users_data,
    get_all_users,
    users
  } = useContext(MainContext);

  useEffect(() => {
    if (props.panel === "company") {
      get_all_company_users(login_res.id_company);
    } else {
      get_all_users();
    }
  }, []);

  return (
    <div className="table_container">
      <Table striped hover responsive>
        <thead>
          <tr>
            <th>
              <b>Nombre</b>
            </th>
            <th>
              <b>Apellido</b>
            </th>
            <th>
              <b>Documento</b>
            </th>
            <th>
              <b>Correo electrónico</b>
            </th>
            <th>
              <b>Teléfono</b>
            </th>
            <th></th>
            <th></th>
            {/* <th></th> */}
          </tr>
        </thead>

        <tbody>

          {props.panel === "admin" ?
          users.map((user, index) => (
            <User
              panel={props.panel}
              id_user={user.id_user}
              name={user.name}
              lastname={user.lastname}
              document_type={user.document_type}
              document={user.document}
              position={user.position}
              company={user.company}
              time={user.time}
              date={user.date}
              status={user.status}
              email={user.email}
              phone_number={user.phone_number}
              key={index}
            />
          )) : 
          get_all_company_users_data.map((user, index) => (
            <User
              panel={props.panel}
              id_user={user.id_user}
              name={user.name}
              lastname={user.lastname}
              document_type={user.document_type}
              document={user.document}
              position={user.position}
              company={user.company}
              time={user.time}
              date={user.date}
              status={user.status}
              email={user.email}
              phone_number={user.phone_number}
              key={index}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;