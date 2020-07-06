import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import MainProvider from './context/MainProvider'
import Login from './components/Login'
import CompanyPanel from './components/CompanyPanel'
import AdminPanel from './components/AdminPanel.js'
import CompanyEvaluations from './components/CompanyEvaluations';

function App() {
  return (
    <div className="company_panel_body">
      <BrowserRouter>
      <MainProvider>
          <Route exact path='/' component={Login} />
          <Route exact path='/companypanel' component={CompanyPanel} />
          <Route exact path='/companypanel/evaluations' component={CompanyEvaluations} />
          <Route exact path='/adminpanel' component={AdminPanel} />
          </MainProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;