import React, { Component } from 'react';
import BibleSelector from './BibleSelector/BibleSelector';

class App extends Component {
  render() {
    return (
      <div>
        <BibleSelector onChange={ret => console.log("select", ret)}/>
      </div>
    );
  }
}

export default App;