import React, { Component } from 'react';

class CountSet extends Component {
  render() {
    return (
      <div>
        <div className="ui input">
          <span>抽取</span>
          <input type="text" placeholder="Search..." />
          <span>个</span>
          <span>组数</span>
          <input type="text" placeholder="Search..." />
          <button className="ui button" role="button">开始</button>
        </div>
      </div>
    );
  }
}

export default CountSet;