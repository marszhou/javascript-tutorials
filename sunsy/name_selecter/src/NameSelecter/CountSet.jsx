import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CountSet extends Component {
  static propTypes = {
    handleChange: PropTypes.func,
    targetPeopleAmount: PropTypes.number,
    targetGroups: PropTypes.number,
    handleStart: PropTypes.func
  }
  render() {
    const { handleChange, targetPeopleAmount, targetGroups, handleStart } = this.props;
    return (
      <div>
        <span>抽取人数</span>
        <div className="ui input">
          <input 
            type="text" 
            placeholder="0" 
            name="targetPeopleAmount" 
            value={targetPeopleAmount ? targetPeopleAmount : ""}
            onChange={handleChange}
          />
        </div>
        <span>组数</span>
        <div className="ui input">
          <input 
            type="text" 
            placeholder="0" 
            name="targetGroups" 
            value={targetGroups ? targetGroups : ""}
            onChange={handleChange}
          />
        </div>
        <button className="ui button" role="button" onClick={handleStart}>开始</button>
      </div>
    );
  }
}

export default CountSet;