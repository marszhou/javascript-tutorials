import React, { Component } from 'react';

class SomeComp extends Component {
  render() {
    return (
      <div>
        this page:{this.props.match && this.props.match.params.page}
      </div>
    );
  }
}

export default SomeComp;