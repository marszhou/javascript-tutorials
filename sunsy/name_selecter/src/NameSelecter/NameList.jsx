import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameList extends Component {
  static propTypes = {
    names: PropTypes.any
  }
  render() {
    const { names } = this.props;
    
    return (
      <div role="list" className="ui list">
        {names.map((name, index) => (
          <div key={index} role="listitem" className="item">
            {name}
          </div>
        ))}
      </div>
    );
  }
}

export default NameList;