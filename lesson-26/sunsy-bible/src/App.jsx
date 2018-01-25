import React, { Component } from 'react';
import BiblePanel from './Bible/BiblePanel';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      contentLocation: {
        selectedBookId: "0",
        selectedChapter: 0,
        selectedVerse: 0
      }
    }
  }

  handleChange = (contentLocation) => {
    this.setState({
      contentLocation: contentLocation
    })
  }

  render() {
    return (
      <div>
        <BiblePanel 
          value={this.state.contentLocation} 
          onChange={this.handleChange} 
        />
      </div>
    );
  }
}

export default App;