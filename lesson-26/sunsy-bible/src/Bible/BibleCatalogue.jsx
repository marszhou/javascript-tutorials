import React, { Component } from 'react';
import BibleCatalogueHeader from './BibleCatalogueHeader';
import BibleCatalogueBody from './BibleCatalogueBody';
import PropTypes from 'prop-types';
import SearchedBooks from './SearchedBooks';

class BibleCatalogue extends Component {
  static propTypes = {
    getInputContent: PropTypes.func,
    onSelect: PropTypes.func,
    initializeBiblePanel: PropTypes.func,
    selectedBookId: PropTypes.string,
    ifShowSearchedBooks: PropTypes.bool,
    searchedBooks: PropTypes.array
  }

  constructor(props){
    super(props)
  }

  showCatalogue(){
    if(this.props.ifShowSearchedBooks){
      return(
        <SearchedBooks
          searchedBooks={this.props.searchedBooks}
          onSelect={this.props.onSelect} 
          selectedBookId={this.props.selectedBookId} 
          initializeBiblePanel={this.props.initializeBiblePanel}
        />
      )
    }
    else{
      return( 
        <BibleCatalogueBody 
          onSelect={this.props.onSelect} 
          selectedBookId={this.props.selectedBookId} 
        />
      )
    }
  }

  render() {
    const { onSelect, selectedBookId } = this.props;
    return (
      <div className="column bookSelector client-height">
        <BibleCatalogueHeader 
          getInputContent={this.props.getInputContent}
        />
        {this.showCatalogue()}
      </div>
    );
  }
}

export default BibleCatalogue;