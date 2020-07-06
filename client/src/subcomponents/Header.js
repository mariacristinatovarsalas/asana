import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../images/logo.png";
import MainContext from "../context/MainContext"

const Header = (props) => {

  const { login_res } = useContext(MainContext);

  return (

    <header className="header flex_container_space_between">

        <div>
          <img src={logo} alt="Asana Logo" className="logo"></img>
        </div>
    
        {props.panel === "admin" ? 

        <div>
          <Link><button className="button">Tratamientos</button></Link>
          <Link to="/adminpanel"><button className="button">Usuarios</button></Link>
          <div id="company_name_div">{login_res.name}</div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="drop_btn_company"></Dropdown.Toggle>
            <Dropdown.Menu id="dropdown_menu_company">
              <Dropdown.Item id="dropdown_item_company" href="/">Cerrar sesión</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
          :
        <div>
          <Link to="/companypanel/evaluations"><button className="button">Tratamientos</button></Link>
          <Link to="/companypanel"><button className="button">Usuarios</button></Link>
          <div id="company_name_div">{login_res.name}</div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="drop_btn_company"></Dropdown.Toggle>
            <Dropdown.Menu id="dropdown_menu_company">
              <Dropdown.Item id="dropdown_item_company" href="/">Cerrar sesión</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>}

    </header>
  ); 
};

export default Header;