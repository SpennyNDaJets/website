import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import {
  Bio,
  Contact,
  FrontPage
} from './Components';

class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={FrontPage} />
        <Route exact path="/" component={Bio} />
        <Route path="/" component={Contact} />
      </div>
    );
  }
}

export default Routes;