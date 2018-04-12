import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SomeComp from './SomeComp';
import SomePage from './SomePage';

class Simple extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route path='/page/:page' component={SomePage}/>
      </div>
      </Router>
    );
  }
}

export default Simple;