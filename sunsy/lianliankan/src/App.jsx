import React, { Component } from 'react';
import GameBoard from './lianliankan/GameBoard'

class App extends Component {
  render() {
    return (
      <div>
        <GameBoard timeSet={60}/>
      </div>
    );
  }
}

export default App;