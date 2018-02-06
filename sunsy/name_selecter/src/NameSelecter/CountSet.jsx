import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CountSet extends Component {
  static propTypes = {
    handleChange: PropTypes.func,
    peopleAmount: PropTypes.number,
    peopleTeams: PropTypes.number
  }
  render() {
    const { handleChange, peopleAmount, peopleTeams } = this.props;
    return (
      <div>
        <div className="ui input">
          <span>抽取人数</span>
          <input 
            type="text" 
            placeholder="0" 
            name="peopleAmount" 
            value={peopleAmount}
            onChange={handleChange}
          />
        </div>
        <div className="ui input">
          <span>组数</span>
          <input 
            type="text" 
            placeholder="0" 
            name="peopleTeams" 
            value={peopleTeams}
            onChange={handleChange}
          />
        </div>
        <button className="ui button" role="button" onClick={() => {}}>确定</button>
      </div>
    );
  }
}

export default CountSet;