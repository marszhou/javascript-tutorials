import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PictureSelector extends Component {
  static propTypes = {
    matrix: PropTypes.array,
    pictureleSelect: PropTypes.func
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
    pictureleSelect: () => {}
  }

  render() {
    const { matrix, pictureleSelect } = this.props;
    
    return (
      <div className="board">
        {matrix.map((row, y) => 
          row.map((item, x) => 
            <div 
              key={x}
              className={'cell item-' + item}
              style={{left: x * 56 + 'px', top: y * 56 + 'px'}}
              onClick={() => pictureleSelect([x, y], item)}
            >
            </div>
          )
        )}
      </div>
    );
  }
}

export default PictureSelector;