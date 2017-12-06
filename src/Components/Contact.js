import React, { Component } from 'react';
//images
import emailLogo from '../Assets/Images/emailLogo.png';
import linkedinLogo from '../Assets/Images/linkedinLogo.png';
import facebookLogo from '../Assets/Images/facebookLogo.png';
import githubLogo from '../Assets/Images/githubLogo.png';
// CSS
import '../Assets/css/Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contactContainer">
        <div className="contactMeLabel">
          Contact Me!
        </div>
        <ul className="contactIcons">
          <li className="iconElement">
            <a href="https://www.linkedin.com/in/spencer-amarantides-58514b115/">
              <img className="icon" src={linkedinLogo}/>
            </a>
          </li>
          <li className="iconElement">
            <a href="https://github.com/SpennyNDaJets">
              <img className="icon" src={githubLogo} />
            </a>
          </li>
          <li className="iconElement">
            <a href="https://www.facebook.com/spencer.amarantides">
              <img className="icon" src={facebookLogo} />
            </a>
          </li>
          <li className="iconElement">
            <a href="mailto:sta7ey@virginia.edu">
              <img className="icon" src={emailLogo} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Contact;