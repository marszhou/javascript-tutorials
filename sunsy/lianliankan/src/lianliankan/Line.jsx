import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Line extends Component {
  static propTypes = {
    points: PropTypes.string
  }

  render() {
    const { points } = this.props;
    return (
      <div>
        <svg className="lines">
          <polyline 
            points={points}
            style={{fill:'transparent', stroke:'red', strokeWidth:'5px',  strokeLinejoin: 'round'}}
          />
        </svg>
      </div>
    );
  }
}

export default Line;