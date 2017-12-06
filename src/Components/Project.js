import React, { Component } from 'react';

import '../Assets/css/Project.css';

class Project extends Component {

  render() {
    console.log(this.props);
    const { description, image, styleName, title } = this.props;
    const titleStyle = styleName + "ProjectTitle";

    return (
      <div className="projectContainer">
        <div className={titleStyle}>
          {title}
        </div>
        <img className="projectImage" src={image} alt={title} draggable="false"/>
        <p className="projectDescription">
          {description}
        </p>
      </div>
    );
  }
}

export default Project;