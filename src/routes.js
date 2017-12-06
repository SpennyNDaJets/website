import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import {
  Bio,
  Contact,
  FrontPage,
  ProjectPage
} from './Components';

class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={FrontPage} />
        <Route exact path="/" component={Bio} />
        <Route exact path="/projects" component={ProjectPage} />
        <Route path="/" component={Contact} />
      </div>
    );
  }
}

export default Routes;