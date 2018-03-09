import React, { Component } from 'react';

class Line extends Component {

  render() {
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