import React, { useState, useContext } from 'react';
import NewEvaluation from './NewEvaluation';
import { MainContext } from '../context/MainContext'

const NewUserRegister = () => {

  const { register_user, register_user_res, login_res } = useContext(MainContext);

  const [name, set_name] = useState("")
  const [lastname, set_lastname] = useState("")
  const [id_document_type, set_id_document_type] = useState("1")
  const [document, set_document] = useState("")
  const [position, set_position] = useState("")
  const [phone_number, set_phone_number] = useState("")
  const [email, set_email] = useState("")
  const [address, set_address] = useState("")
  const [evaluation,setEvaluation] = useState(false)
  const [success, set_success] = useState(false)

  
  const handleSubmit=(e)=>{
    e.preventDefault()
    register_user(name, lastname, id_document_type, document,
      login_res.id_company, position, phone_number, email, address)
      .then((res) => {
        if(res) {
          set_success(true)
        }
      })
  }

  const handleEvaluation=()=>{
   setEvaluation(!evaluation)
  }


  const handleChange = (event) => {
    event.preventDefault()
    set_id_document_type(event.target.value)
  }

  return (
    <div>
    {success !== true ?
      <div>
        <div className="flex_container_center container_form">
        <h1 className="h1_new">REGISTRAR USUARIO</h1>
          <form className="flex user_register_form">
            <label className="label user_register_label">Nombre</label>
            <input type="text" onChange={(event) => set_name(event.target.value)} className="input user_register_input"/>
            <label className="label user_register_label">Apellido</label>
            <input type="text" onChange={(event) => set_lastname(event.target.value)} className="input user_register_input" />

            <label className="label user_register_label" htmlFor="select_doc">Documento</label>
            <div className="flex_container_space_between">
              <select id="select_doc" name="select_doc" value={id_document_type} onChange={(event) => handleChange(event)}>
                <option value="1">DNI</option>
                <option value="2">PAS</option>
              </select>
              <input type="number" id="input_doc" onChange={(event) => set_document(event.target.value)} className="input user_register_input"/>
            </div>
                      
            <label className="label user_register_label">Cargo</label>
            <input type="text" onChange={(event) => set_position(event.target.value)} className="input user_register_input"/>
            <label className="label user_register_label">Número de teléfono</label>
            <input type="number" onChange={(event) => set_phone_number(event.target.value)} className="input user_register_input"/>
            <label className="label user_register_label">Correo electrónico</label>
            <input type="email" onChange={(event) => set_email(event.target.value)} className="input user_register_input"/>
            <label className="label user_register_label">Dirección</label>
            <input type="text" onChange={(event) => set_address(event.target.value)} className="input user_register_input"/>
                      
            <div className="btns_container_login btns_container">
              <button onClick={handleSubmit} className="button">Enviar</button>
            </div>
          </form>
        </div>
      </div> : ""}

      {success && evaluation !== true && 
        <div className="created_user_notification container_form">
            <h2 className="h2_success">¡USUARIO CREADO CON ÉXITO!</h2>
            <button onClick={handleEvaluation} className="button">
            Solicitar tratamiento +
            </button>
        </div>}
        {evaluation && <NewEvaluation id_user={register_user_res.id}/>}
    </div>
  );
}
  
export default NewUserRegister