import React, { Component } from 'react';
import BibleCatalogue from './BibleCatalogue';
import BibleChapter from './BibleChapter';
import BibleSentence from './BibleSentence';

import './style.css';

class BiblePanel extends Component {
  render() {
    return (
      <div style={{display: 'flex'}}>
        <BibleCatalogue />
        <BibleChapter />
        <BibleSentence />
      </div>
    );
  }
}

export default BiblePanel;