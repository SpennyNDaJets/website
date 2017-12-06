import React, { Component } from 'react';
import '../Assets/css/Button.css';

class Button extends Component {
  render() {
    const { styleName, reference, text } = this.props;
    return (
          <a href={reference} className={styleName}>
            {text}
          </a>
    );
  }
}

export default Button;