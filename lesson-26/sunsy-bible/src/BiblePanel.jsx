import React, { Component } from 'react';
import BibleCatalogue from './BibleCatalogue';

import './style.css';

class BiblePanel extends Component {
  render() {
    return (
      <div>
        <BibleCatalogue />
        BibleCatalogue
      </div>
    );
  }
}

export default BiblePanel;