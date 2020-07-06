import React from "react";
import Header from '../subcomponents/Header.js'
import Evaluations from '../subcomponents/Evaluations.js'

const CompanyEvaluations = () => {
 
  return (
    <div>
      <Header panel="company" />
      <div className="flex_container_space_between subheader">
        <h1 className="table_title">TRATAMIENTOS</h1>
        <div>Barra de búsqueda</div>
      </div>
      <Evaluations panel="company" />
    </div>
  );
}

export default CompanyEvaluations;