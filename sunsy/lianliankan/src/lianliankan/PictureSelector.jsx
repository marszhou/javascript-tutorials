import React, { Component } from 'react';

class PictureSelector extends Component {

  render() {
    const matrix = [
      [1, 0, 3, 2, 0, 3],
      [2, 0, 2, 4, 2, 2],
      [2, 2, 4, 3, 0, 3],
      [0, 0, 0, 0, 0, 1],
      [0, 1, 2, 1, 1, 0],
      [0, 0, 2, 0, 2, 1]
    ];
    return (
      <div className="board">
        {matrix.map((row, y) => 
          row.map((item, x) => 
            <div 
              key={x}
              className={'cell item-' + item}
              style={{left: x * 56 + 'px', top: y * 56 + 'px'}}
            >
            </div>
          )
        )}
      </div>
    );
  }
}

export default PictureSelector;