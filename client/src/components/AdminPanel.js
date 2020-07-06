import React from 'react';
import Header from '../subcomponents/Header.js'
import Users from '../subcomponents/Users.js'

const AdminPanel = () => {

  return (
  
    <div>
      <Header panel="admin" />
      <div className="flex_container_space_between subheader">
        <div>
          <button className="button">Registrar empresa +</button>
        </div>
        <div>Barra de búsqueda</div>
      </div>
      <Users panel="admin"/>
    </div>

  );
}
  
export default AdminPanel;