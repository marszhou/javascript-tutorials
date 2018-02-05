import React, { Component } from 'react';

class NameList extends Component {
  render() {
    
    return (
      <div className="ui container">
        <div role="list" className="ui list">
          <div role="listitem" className="item">Apples</div>
          <div role="listitem" className="item">Pears</div>
          <div role="listitem" className="item">Oranges</div>
        </div>
      </div>
    );
  }
}

export default NameList;