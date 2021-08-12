import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PayrollHome from './components/payroll-form/payroll-form';
import HomePage from './components/home-page/home-page';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
      <Route exact path = "/home-page">
        <HomePage />
      </Route>
        <Route exact path ="/payroll-form">
          <PayrollHome/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
