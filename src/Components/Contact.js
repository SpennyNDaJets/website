import React, { Component } from 'react';

import EmailLogo from '../Assets/Images/emailLogo.png';
import FacebookLogo from '../Assets/Images/facebookLogo.png';
import GithubLogo from '../Assets/Images/githubLogo.png';
import LinkedInLogo from '../Assets/Images/linkedinLogo.png';

import '../Assets/css/Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contactContainer" id="contact">
        <div className="contactMeLabel">
          Contact Me!
        </div>
        <ul className="contactIcons">
          <li className="iconElement">
            <a href="https://www.linkedin.com/in/spencer-amarantides-58514b115/">
              <img className="icon" alt="LinkedIn" src={LinkedInLogo} draggable="false"/>
            </a>
          </li>
          <li className="iconElement">
            <a href="https://github.com/SpennyNDaJets">
              <img className="icon" alt="GitHub" src={GithubLogo} draggable="false"/>
            </a>
          </li>
          <li className="iconElement">
            <a href="https://www.facebook.com/spencer.amarantides">
              <img className="icon" alt="Facebook" src={FacebookLogo} draggable="false"/>
            </a>
          </li>
          <li className="iconElement">
            <a href="mailto:sta7ey@virginia.edu">
              <img className="icon" alt="Email" src={EmailLogo} draggable="false"/>
            </a>
          </li>
        </ul>
        <div className="copyright">
          Created by Spencer Amarantides
        </div>
      </div>
    );
  }
}

export default Contact;