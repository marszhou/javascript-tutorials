import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Line extends Component {
  static propTypes = {
    points: PropTypes.array
  }

  render() {
    const { points } = this.props;
    return (
      <div>
        <svg class="lines">
          <polyline 
            style="fill: transparent;stroke:red;stroke-width:5px; stroke-linejoin: round"
          />
        </svg>
      </div>
    );
  }
}

export default Line;