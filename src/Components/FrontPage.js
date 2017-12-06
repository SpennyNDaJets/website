import React, { Component } from 'react';
import { Button } from './';
import '../Assets/css/FrontPage.css';

class FrontPage extends Component {

  render() {
    return (
      <div className="landingContainer">
        <div className="nameContainer">
          <h1 className="nameTitle">Spencer Amarantides</h1>
        </div>
        <div className="profesionContainer">
          <h2 className="professionTitle">Software Engineer</h2>
          <h2 className="schoolTitle">University of Virginia '19</h2>
        </div>
        <div className="learnMoreButton">
          <Button
            styleName="whiteButton" 
            text="Learn More"
            reference="#bio"
          />
        </div>
      </div>
    );
  }
}

export default FrontPage;