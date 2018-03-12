import React, { Component } from 'react';
import ControlPanel from './ControlPanel';
import PictureSelector from './PictureSelector';
import Line from './Line';
import './style.css';
import PropTypes from 'prop-types';
import { genMatrix, isLinkable, setMatrixValue, isGameFinished } from './utils';

class GameBoard extends Component {
  static propTypes = {
    timeSet: PropTypes.number
  }
  
  static defaultProps = {
    timeSet: 60
  }

  constructor (props) {
    super(props);
    this.state = {
      selectedPoint: [],
      matrix: genMatrix(),
      time: 60,
      score: 0
    }
  }

  pictureSelect = (point) => {
    const { selectedPoint, matrix } = this.state;
    if(isLinkable(selectedPoint, point, matrix)) {
      this.renderMatrix(0,selectedPoint, point, matrix);
    }
    else{
      this.setState({
        selectedPoint: point,
      })
    }
  }

  renderMatrix = (value=0, p1, p2, matrix) => {
    const x1 = p1[0], y1 = p1[1], x2 = p2[0], y2 = p2[1];
    setMatrixValue(value, x1, y1, matrix);
    setMatrixValue(value, x2, y2, matrix);
    this.setState({
      selectedPoint: [],
      matrix: matrix,
      score: this.state.score + 1
    })
  }

  handleStart = () => {

  }

  render() {
    return (
      <div>
        <PictureSelector 
          matrix={this.state.matrix} 
          pictureSelect={this.pictureSelect} 
          selectedPoint={this.state.selectedPoint}
        />
        <ControlPanel score={this.state.score}/>
      </div>
    );
  }
}

export default GameBoard;