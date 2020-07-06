import React, { useContext, useState } from "react";
import MainContext from "../context/MainContext";
import logo1 from "../images/logo1.png";


const Login = () => {

  const { login } = useContext(MainContext);
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault()
      login(email, password)
  }
  
  return (

    <div className="login_body flex_container_center">
      <div>
        <div className="logo_container flex_container_center">
          <img src={logo1} className="logo_login" alt="Logo Asana"></img>
        </div>
        <div className="flex_container_center form_container">
          <form className="flex">
            <label className="label">Correo electrónico</label>
            <input type="text" className="input_login" onChange={(event) => set_email(event.target.value)} />
            <label className="label">Contraseña</label>
            <input type="password" className="input_login" onChange={(event) => set_password(event.target.value)} />
            <div className="btns_container_login flex_container_center">
              <button onClick={(e) => handleSubmit(e)} className="button btn_login">
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;