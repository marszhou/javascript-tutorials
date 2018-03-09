import React, { Component } from 'react';
import ControlPanel from './ControlPanel';
import PictureSelector from './PictureSelector';
import Line from './Line';
import './style.css';
import PropTypes from 'prop-types';

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

  pictureSelect = () => {

  }

  handleStart = () => {

  }

  render() {
    return (
      <div>
        <ControlPanel />
        <PictureSelector />
      </div>
    );
  }
}

export default GameBoard;