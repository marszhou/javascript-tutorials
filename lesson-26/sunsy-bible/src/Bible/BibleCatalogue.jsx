import React, { Component } from 'react';
import BibleCatalogueHeader from './BibleCatalogueHeader';
import BibleCatalogueBody from './BibleCatalogueBody';

class BibleCatalogue extends Component {
  render() {
    return (
      <div className="column bookSelector client-height">
        <BibleCatalogueHeader />
        <BibleCatalogueBody />
      </div>
    );
  }
}

export default BibleCatalogue;