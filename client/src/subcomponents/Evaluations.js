import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Table from "react-bootstrap/Table";
import Evaluation from "./Evaluation.js";
import MainContext from "../context/MainContext";

const Evaluations = (props) => {

  const {
    get_all_company_evaluations, 
    evaluations, 
    login_res
  } = useContext(MainContext);

  useEffect(() => {
    if (props.panel === "company") {
      get_all_company_evaluations(login_res.id_company);
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
              <b>Cargo</b>
            </th>
            <th>
              <b>Estado</b>
            </th>
            <th>
              <b>Fecha de solicitud</b>
            </th>
            <th>Hora de solicitud</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {console.log(evaluations)}
          {evaluations.map((evaluation, index) => (
            <Evaluation
              panel={props.panel}
              id_evaluation={evaluation.id_evaluation}
              name={evaluation.name}
              lastname={evaluation.lastname}
              document_type={evaluation.document_type}
              document={evaluation.document}
              position={evaluation.position}
              time={evaluation.time}
              date={evaluation.date}
              status={evaluation.status}
              key={index}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Evaluations;