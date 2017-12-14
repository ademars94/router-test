import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import RouteyBoi from './RouteyBoi'
import './App.css';

class App extends Component {
  render() {
    console.log("App#render")

    return (
      <Router>
        <RouteyBoi/>
      </Router>
    );
  }
}

export default App;
