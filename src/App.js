import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import './components/style.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
