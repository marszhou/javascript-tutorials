import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NameList extends Component {
  static propTypes = {
    nameList: PropTypes.array
  }
  render() {
    const { nameList } = this.props;
    return (
      <div role="list" className="ui list">
        {nameList.map((name, index) => (
          <div key={index} role="listitem" className="item" style={name["selected"] ? {color: "red"} : {color: ""}}>
            {name["name"]}
          </div>
        ))}
      </div>
    );
  }
}

export default NameList;