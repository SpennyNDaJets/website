import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

// pages
import Routes from '../routes.js';

// CSS
import '../Assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
