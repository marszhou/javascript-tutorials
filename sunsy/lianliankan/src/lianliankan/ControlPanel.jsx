import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ControlPanel extends Component {
  static propTypes = {
    handleStart: PropTypes.func,
    time: PropTypes.number,
    score: PropTypes.number,
    round: PropTypes.number
  }

  static defaultProps = {
    handleStart: () => {},
    time: 60,
    score: 0,
    round: 1
  }

  render() {
    const { handleStart, time, score, round } = this.props;
    return (
      <div className="panel">
        <div className="button">
          <button onClick={handleStart}>开始</button>
        </div>
        <div className="content">
          <p>时间：{time} 秒</p>
        </div>
        <div className="content">
          <p>得分：{score} 分</p>
        </div>
        <div className="content">
          <p>第 {round} 关</p>
        </div>
      </div>
    );
  }
}

export default ControlPanel;