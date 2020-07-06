import React, { useContext, useState, useEffect } from "react";
import MainContext from "../context/MainContext"


const NewEvaluation = (props) => {

  const { request_evaluation, login_res } = useContext(MainContext);

  const [tests, set_tests] = useState([]);
  const [description, set_description] = useState([]);
  const [id_user, set_id_user] = useState("")
  const [success, set_success] = useState(false)

  useEffect(() => {
    set_id_user(props.id_user)
  }, [])
  
  const handleSubmit = () => {
    request_evaluation(id_user, login_res.id_company, tests)
    .then((res) => {
      if(res) {
        set_success(true)
      }
    })
  }


  const add_activity = (event) => {

    var id = event.target.id
    var nombre = event.target.name

    if(event.target.checked) {
      
      let new_tests = [...tests, {id}];
      let new_description = [...description, {nombre}]
      set_tests(new_tests)
      set_description(new_description)
      
    } else {
      
      let new_tests = tests.filter(test =>  test.id !== id )
      let new_description = description.filter(descri => descri.nombre !== nombre)
      set_description(new_description)
      set_tests(new_tests)
    }
}

  return (
  <div>
    {success !== true ?
    <div>
      <div className="flex_container_center container_form">
      <h1 className="h1_new">SOLICITAR TRATAMIENTO</h1>
          <form className="user_register_form">
              <label className="label evaluation_type_label user_register_label"><b>Tipo de actividad</b></label>
              <div className="flex">
                <input type="checkbox" id="1" onChange={(event) => add_activity(event)} />
                <label className="modal_label user_register_label">Curso Intensivo de Yoga</label><br />
              </div>
              <div className="flex">
                <input type="checkbox" id="2" onChange={(event) => add_activity(event)} />
                <label className="modal_label user_register_label">Baño con leche de almendras</label><br />
              </div>
              <div className="flex">
                <input type="checkbox" id="3" onChange={(event) => add_activity(event)}></input>
                <label className="modal_label user_register_label">Masaje japonés</label>
              </div>
              <div className="flex">
                <input type="checkbox" id="4" onChange={(event) => add_activity(event)} />
                <label className="modal_label user_register_label">Técnicas de meditación</label>
              </div>
              <div className="flex">
                <input type="checkbox" id="5" onChange={(event) => add_activity(event)} />
                <label className="modal_label user_register_label">Degustación vegana</label>
              </div>
              <div className="flex">
                <input type="checkbox" id="6" onChange={(event) => add_activity(event)} />
                <label className="modal_label user_register_label">Curso básico de relajación</label>
              </div>
        </form>
        <div className="btns_container_login btns_container">
            <button onClick={() => handleSubmit() } className="button">Enviar</button>
        </div>   
      </div>
      
    </div> : <div className="container_form">
              <h2 className="h2_success">¡TRATAMIENTO SOLICITADO CON ÉXITO!</h2>
             </div>}
  </div>
  ); 
}

export default NewEvaluation;