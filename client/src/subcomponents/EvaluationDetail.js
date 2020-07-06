import React, { useContext, useEffect } from "react";
import MainContext from '../context/MainContext'

const EvaluationDetail = (props) => {

  const {
    get_evaluation_detail,
    evaluation_detail
  } = useContext(MainContext);

  useEffect(() => {
    get_evaluation_detail(props.id_evaluation);
  }, []);


   return(

    <div className="container_form">
      <h2 className="table_title">ACTIVIDADES SOLICITADAS</h2>
      
      {evaluation_detail.map((detail, index) => (
          <div key={index} className="request_div">
            <b><h3>{detail.name}</h3></b>
          </div>
      ))}

    </div>
   )
}

export default EvaluationDetail