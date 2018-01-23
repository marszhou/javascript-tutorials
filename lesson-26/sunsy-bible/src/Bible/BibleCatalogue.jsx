import React, { Component } from 'react';
import BibleCatalogueHeader from './BibleCatalogueHeader';
import BibleCatalogueBody from './BibleCatalogueBody';
import PropTypes from 'prop-types';

class BibleCatalogue extends Component {
  static propTypes = {
    oldBooks: PropTypes.array,
    newBooks: PropTypes.array,
    onSelect: PropTypes.func,
    selectedBookId: PropTypes.string
  }

  constructor(props){
    super(props)
  }

  render() {
    const { onSelect, selectedBookId } = this.props;
    return (
      <div className="column bookSelector client-height">
        <BibleCatalogueHeader />
        <BibleCatalogueBody
          onSelect={onSelect}
          selectedBookId={selectedBookId}
        />
      </div>
    );
  }
}

export default BibleCatalogue;