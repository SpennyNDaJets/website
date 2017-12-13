import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { NavBar } from './';
import Routes from '../routes.js';

import '../Assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="fullNavBar">
          <NavBar
            tabs={[{title:"Spencer Amarantides", link:"/"}, {title:"Bio", link:"/#bio"},
              {title:"Projects", link:"/projects"}, {title:"Contact Me", link:"/#contact"}
            ]}
          />
        </div>
        <div className="mobileNavBar">
          <NavBar
            tabs={[{title:"Spencer Amarantides", link:"/"}, {title:"Projects", link:"/projects"}
            ]}
          />
        </div>
        <Router>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
