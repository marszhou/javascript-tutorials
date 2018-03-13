import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isPointsEqual } from './utils';

class PictureSelector extends Component {
  static propTypes = {
    matrix: PropTypes.array,
    pictureSelect: PropTypes.func,
    selectedPoint: PropTypes.array
  }

  static defaultProps = {
    matrix:[
      [1, 0, 3, 2, 0, 3],
      [2, 0, 2, 4, 2, 2],
      [2, 2, 4, 3, 0, 3],
      [0, 0, 0, 0, 0, 1],
      [0, 1, 2, 1, 1, 0],
      [0, 0, 2, 0, 2, 1]
    ],
    pictureSelect: () => {},
    selectedPoint: []
  }

  render() {
    const { matrix, pictureSelect, selectedPoint } = this.props;
    
    return (
      <div className="board">
        {matrix.map((row, y) => 
          row.map((item, x) => 
            <div 
              key={x}
              className={'cell item-' + item + (isPointsEqual([x, y], selectedPoint) ? ' selected' : '')}
              style={{left: x * 56 + 'px', top: y * 56 + 'px'}}
              onClick={() => pictureSelect([x, y])}
            >
            </div>
          )
        )}
      </div>
    );
  }
}

export default PictureSelector;