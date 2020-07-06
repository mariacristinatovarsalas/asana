import React from "react";
import MyModal from './MyModal.js'
import NewEvaluation from './NewEvaluation.js'


const User = (props) => {

  return(
    <tr>
      <td>{props.name}</td>
      <td>{props.lastname}</td>
      <td>{props.document_type} {props.document}</td>
      <td>{props.email}</td>
      <td>{props.phone_number}</td>
      <td>{props.status}</td>
      <td>
        <MyModal modal_btn="Solicitar tratamiento +">
                <NewEvaluation id_user={props.id_user} company={props.company}/>
        </MyModal>
      </td>
    </tr>
  )
}

export default User