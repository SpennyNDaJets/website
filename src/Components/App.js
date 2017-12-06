import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { NavBar } from './';
import Routes from '../routes.js';

import '../Assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar
          tabs={[{title:"Spencer Amarantides", link:"/"}, {title:"Bio", link:"/#bio"},
            {title:"Projects", link:"/projects"}, {title:"Contact Me", link:"/#contact"}
          ]}
        />
        <Router>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
