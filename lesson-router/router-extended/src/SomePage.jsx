import React, { Component } from 'react';
import SomeComp from './SomeComp';
import {withRouter} from 'react-router'

const NewComp = withRouter(SomeComp)

class SomePage extends Component {
  render() {

    return (
      <div>
        page: {this.props.match.params.page}
        <SomeComp/>
        <NewComp/>
      </div>
    );
  }
}

export default SomePage;