import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-dom';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

import "./styles/reset.css";

class App extends Component {
    render() {
      return (
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Login} />
            <Route path="/Cadastro" component={Cadastro} />
            <Route path="*" component={Login} />
          </Switch>
        </BrowserRouter>
      );
    }
}

export default App;
