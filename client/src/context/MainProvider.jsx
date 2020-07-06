import React, { useState } from "react";
import MainContext from "./MainContext"
import { useHistory } from "react-router-dom";

const MainProvider = (props) => {

  const history = useHistory()

  const [register_user_res, set_register_user_res] = useState("")
  const [request_evaluation_res, set_request_evaluation_res] = useState("")
  const [login_res, set_login_res] = useState({})
  const [get_all_company_users_data, set_get_all_company_users_data] = useState([])
  const [evaluations, set_evaluations] = useState([])
  const [evaluation_detail, set_evaluation_detail] = useState([])
  const [users, set_users] = useState([])






  // LOGIN <-------------------------------------------------------------------------------------

  const login = async (email, password) => {

    const login_url = "http://192.168.0.174:3003/login";

    const login_data = {
      email: email,
      password: password,
    };

    const res = await fetch(login_url, {
      method: "POST",
      body: JSON.stringify(login_data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const login_res = await res.json();
    console.log(login_res)
    set_login_res(login_res.persona_data);

    switch (login_res.persona_data.id_role) {
      case 1:
        console.log("Where link to users must be");
        break;
      case 2:
        history.push("/companypanel");
        break;
      case 3:
        history.push("/adminpanel");
        break;
      default:
        console.log("Default");
    }
  };









  // REGISTER USER <---------------------------------------------------------------------------------------------------

  const register_user = async (name, lastname, id_document_type, document, id_company, 
                              position, phone_number, email, address) => {

      const register_user_url = 'http://192.168.0.174:3003/users/create';
  
      var register_user_data = {
    
        name: name,
        lastname: lastname,
        id_document_type: id_document_type,
        document: document,
        id_company: id_company,
        position: position,
        phone_number: phone_number,
        email: email,
        address: address,
        
      }

        console.log(register_user_data)
    
        var res = await fetch(register_user_url, {
    
          method: 'POST',
          body: JSON.stringify(register_user_data),
          headers: {
              'Content-Type': 'application/json'
          }
      })

        var register_user_res = await res.json();
        console.log(register_user_res)
        
        if(register_user_res.msg === "User created successfully") {
          set_register_user_res(register_user_res)
          return true
        }
      }








// REQUEST EVALUATION <-------------------------------------------------------------------------------------------

  const request_evaluation = async (id_user, id_company, tests) => {
      
    const request_evaluation_url = 'http://192.168.0.174:3003/evaluations/request';

    // Date and time
    var today = new Date();
    let date =(today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate())
    let time=(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds())

    // Data to send
    var request_evaluation_data = {

      id_user: id_user,
      id_company: id_company,
      tests: tests,
      time: time,
      date: date,
  
    }

    console.log(request_evaluation_data)

    var res = await fetch(request_evaluation_url, {
      method: 'POST',
      body: JSON.stringify(request_evaluation_data),
      headers: {
          'Content-Type': 'application/json'
      }
    })

    var request_evaluation_res = await res.json();
    console.log(register_user_res)

    if(request_evaluation_res.msg === "Evaluation requested successfully") {
      set_request_evaluation_res(request_evaluation_res)
      return true
    }

  }







  // GET ALL COMPANY EVALUATIONS <----------------------------------------------------------------------------------------

  const get_all_company_evaluations = (id_company) => {

    const get_all_company_evaluations_url = 'http://192.168.0.174:3003/company/evaluations/get_all';
    // var token = sessionStorage.getItem('Token')

    var evaluations_get_all = {
        method: 'POST',
        // headers: {
        //     Authorization: "Bearer " + token
        // },
        headers: {
          "Content-Type": "application/json",
        },     
           body: JSON.stringify({id_company:id_company})
    };

    fetch(get_all_company_evaluations_url,
        evaluations_get_all)
        .then(function (response) {
            return response.json();
        })
        .then(function (evaluations) {
            console.log(evaluations)
            set_evaluations(evaluations.evaluations)
            return evaluations
        })
        .catch(function (error) {
            console.log('Error al ejecutar Fetch ' + error);
            return error
        })
  }







  // GET ALL COMPANY USERS <--------------------------------------------------------------------------------------------
  
  const get_all_company_users = (id_company) => {

    const get_all_company_users_url = 'http://192.168.0.174:3003/company/users/get_all';
    // var token = sessionStorage.getItem('Token')

    var budi = {
        method: 'POST',
        // headers: {
        //     Authorization: "Bearer " + token
        // },
        headers: {
          "Content-Type": "application/json",
        },     
           body: JSON.stringify({id_company:id_company})
    };

    fetch(get_all_company_users_url,
        budi)
        .then(function (response) {
            return response.json();
        })
        .then(function (get_all_company_users_data) {
            console.log(get_all_company_users_data)
            set_get_all_company_users_data(get_all_company_users_data.company_users)
            return get_all_company_users_data
        })
        .catch(function (error) {
            console.log('Error al ejecutar Fetch ' + error);
            return error
        })
  }
  







  // GET COMPANY EVALUATION DETAIL

  const get_evaluation_detail = (id_evaluation) => {

    const get_evaluation_detail_url = 'http://192.168.0.174:3003/company/evaluations/detail';
    // var token = sessionStorage.getItem('Token')

    var evaluation_detail_headers = {
        method: 'POST',
        // headers: {
        //     Authorization: "Bearer " + token
        // },
        headers: {
          "Content-Type": "application/json",
        },     
           body: JSON.stringify({idEvaluation:id_evaluation})
    };

    fetch(get_evaluation_detail_url,
        evaluation_detail_headers)
        .then(function (response) {
            return response.json();
        })
        .then(function (evaluation_detail) {
            console.log(evaluation_detail)
            set_evaluation_detail(evaluation_detail.evaluation_detail)
            return evaluation_detail
        })
        .catch(function (error) {
            console.log('Error al ejecutar Fetch ' + error);
            return error
        })
  }
  







  // GET ALL USERS

  const get_all_users = () => {

    const get_all_users_url = 'http://192.168.0.174:3003/admin/users/get_all';
    // var token = sessionStorage.getItem('Token')

    var users_get_all = {
        method: 'GET',
        // headers: {
        //     Authorization: "Bearer " + token
        // },
        headers: {
          "Content-Type": "application/json",
        },     
          //  body: JSON.stringify({id_company:id_company})
    };

    fetch(get_all_users_url,
        users_get_all)
        .then(function (response) {
            return response.json();
        })
        .then(function (users) {
            console.log(users)
            set_users(users.users_array)
            return users
        })
        .catch(function (error) {
            console.log('Error al ejecutar Fetch ' + error);
            return error
        })
  }

  return (
    <MainContext.Provider value={{ 
      // Authorization (general)
      // user, 
      // set_user
      // Register user (company)
      register_user, 
      register_user_res,
      // Request evaluation (company)
      request_evaluation,
      request_evaluation_res, 
      // Login (general)
      login, 
      login_res, 
      // Get all users (company)
      get_all_company_users, 
      get_all_company_users_data,
      // Get all evaluations (company)
      evaluations, 
      get_all_company_evaluations, 
      evaluation_detail, 
      get_evaluation_detail,
      // Users admin
      users, 
      get_all_users }}>

      {props.children}
    </MainContext.Provider>
  );

};

MainProvider.displayName = "MainProvider";

export default MainProvider;