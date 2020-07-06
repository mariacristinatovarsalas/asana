import React from "react";
import EvaluationDetail from "./EvaluationDetail"
import MyModal from './MyModal'

const Evaluation = (props) => {

  return(
    <tr>
      <td>{props.name}</td>
      <td>{props.lastname}</td>
      <td>{props.document_type} {props.document}</td>
      <td>{props.position}</td>
      <td>{props.status}</td>
      <td>{props.date}</td>
      <td>{props.time}</td>
      <td>
        <MyModal modal_btn="Ver detalle">
                <EvaluationDetail id_evaluation={props.id_evaluation} />
        </MyModal>
      </td>
   
    </tr>
  )
}

export default Evaluation