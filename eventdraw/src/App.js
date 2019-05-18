import React from 'react';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

import "./styles/reset.css";

const App = () => (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Cadastro" exact component={Cadastro} />
            <Redirect path="*" to='/' />
          </Switch>
        </BrowserRouter>
);
export default App;
