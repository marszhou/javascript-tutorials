import React, { Component } from 'react';
import ControlPanel from './ControlPanel';
import PictureSelector from './PictureSelector';
import Line from './Line';
import './style.css';
import PropTypes from 'prop-types';
import { genMatrix } from './utils';

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
      points: [],
      matrix: [],
      time: 60,
      score: 0
    }
  }

  pictureSelect = (point, item) => {
    
  }

  handleStart = () => {

  }

  render() {
    return (
      <div>
        <PictureSelector matrix={genMatrix()} pictureSelect={() => {}}/>
        <ControlPanel />
      </div>
    );
  }
}

export default GameBoard;