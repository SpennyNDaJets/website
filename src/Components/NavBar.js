import React, { Component } from 'react';

import '../Assets/css/NavBar.css';

class NavBar extends Component {
  render() {
    const { tabs } = this.props;
    return (
      <div className="navBar">
        <ul className="nav">
          {tabs.map( tab => {
            return (
              <li className="navLink">
                <a className="navText" href={tab.link}>{tab.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    )
  }
}

export default NavBar;