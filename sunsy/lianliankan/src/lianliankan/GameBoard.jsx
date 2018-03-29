import React, { Component } from 'react';
import ControlPanel from './ControlPanel';
import PictureSelector from './PictureSelector';
import Line from './Line';
import './style.css';
import PropTypes from 'prop-types';
import { genMatrix, isLinkable, setMatrixValue, 
  isGameFinished, getAllLink, getMatrixDimension
} from './utils';

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
      score: 0,
      time: this.props.timeSet,
      gameOngoing: false,
      round: 1,
      points: ""
    }
  }

  pictureSelect = (point) => {
    if(!this.state.gameOngoing) return;
    const { selectedPoint, matrix } = this.state;
    const linkPoints = isLinkable(selectedPoint, point, matrix);
    if(linkPoints) {
      this.renderMatrix(0,selectedPoint, point, matrix, linkPoints);
    }
    else{
      this.setState({
        selectedPoint: point,
      })
    }
  }

  pointsToString = (linkPoints) => {
    return linkPoints.map((points) => points.join(',')).join(' ')
  }

  renderMatrix = (value=0, p1, p2, matrix, linkPoints) => {
    const x1 = p1[0], y1 = p1[1], x2 = p2[0], y2 = p2[1];
    setMatrixValue(value, x1, y1, matrix);
    setMatrixValue(value, x2, y2, matrix);
    const points = this.pointsToString(linkPoints);
    this.setState({
      selectedPoint: [],
      matrix: matrix,
      score: this.state.score + 1,
      time: this.state.time + 1,
      points: points
    })
    if(this.finishLink(matrix)) {
      this.setState({
        selectedPoint: [],
        matrix: genMatrix(8, 8, 19),
        score: this.state.score,
        time: this.props.timeSet,
        round: this.state.round + 1
      })
    }
    if(this.getStuck(matrix)) {
      do{
        this.randomSortMatrix(matrix);
      }while(this.getStuck(matrix))
    }
  }

  randomSortMatrix = (matrix) => {
    const newArray = matrix.reduce((arrSum, arr) => {
      return [...arrSum, ...arr];
    }, []).sort(() => Math.random() - 0.5);
    const cols = matrix[0].length;
    matrix = matrix.map((array, y) => newArray.slice(y*cols, (y+1)*cols))
    this.setState({
      matrix: matrix
    })
  }

  handleStart = (e) => {
    e.preventDefault();
    if(this.state.gameOngoing) return;
    this.setState({
      gameOngoing: true
    })
    this.countDownTime();
  }

  countDownTime = () => {
    const countDown = () => {
      if(this.state.time > 0) {
        this.setState({
          time: this.state.time - 1
        })
      }
      else{
        clearInterval(timer);
        this.gameOver();
      }
    }
    const timer = setInterval(countDown, 1000);
  }

  finishLink = (matrix) => {
    const { rows, cols } = getMatrixDimension(matrix);
    for(let x=0; x<cols; x++) {
      for(let y=0; y<rows; y++) {
        if(matrix[y][x] !== 0) return false;
      }
    }
    return true;
  }

  getStuck = (matrix) => {
    if(this.finishLink(matrix)) {
      return false;
    }
    else{
      const allLink = getAllLink(matrix);
      if(allLink.length === 0) return true;
      return false;
    }
  }

  gameOver = () => {
    const score = this.state.score;
    alert(" GAME OVER \n YOUR SCORE IS " + score)
    this.setState({
      selectedPoint: [],
      matrix: genMatrix(),
      score: 0,
      time: this.props.timeSet,
      gameOngoing: false,
      round: 1
    })
  }

  render() {
    return (
      <div>
        <PictureSelector 
          matrix={this.state.matrix} 
          pictureSelect={this.pictureSelect} 
          selectedPoint={this.state.selectedPoint}
        />
        <ControlPanel 
          score={this.state.score} 
          time={this.state.time} 
          handleStart={this.handleStart}
          round={this.state.round}
        />
        <Line points={this.state.points}/>
      </div>
    );
  }
}

export default GameBoard;