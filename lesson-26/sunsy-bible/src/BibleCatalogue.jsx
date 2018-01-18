import React, { Component } from 'react';
import BibleCatalogueHeader from './BibleCatalogueHeader';
import BibleCatalogueBody from './BibleCatalogueBody';

class BibleCatalogue extends Component {
  render() {
    return (
      <div>
        <BibleCatalogueHeader />
        <BibleCatalogueBody />
      </div>
    );
  }
}

export default BibleCatalogue;