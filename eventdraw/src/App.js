import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-dom';

import Login from './pages/Login';

import "./styles/reset.css";

class App extends Component {
    render() {
      return (
        <>
            <Login />
        </>
      );
    }
}

export default App;
