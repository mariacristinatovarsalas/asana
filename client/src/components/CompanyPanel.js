import React from "react";
import Header from '../subcomponents/Header.js'
import MyModal from '../subcomponents/MyModal.js'
import NewUserRegister from '../subcomponents/NewUserRegister.js'
import Users from '../subcomponents/Users.js'

const CompanyPanel = () => {
 
  return (
    <div>
      <Header panel="company" />
      <div className="flex_container_space_between subheader">
        <MyModal modal_btn="Registrar usuario + ">
          <NewUserRegister />
        </MyModal>
        <h1 className="table_title">USUARIOS</h1>
      </div>
      <Users panel="company" />
    </div>
  );
}

export default CompanyPanel;