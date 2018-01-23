import React, { Component } from 'react';
import BibleCatalogueHeader from './BibleCatalogueHeader';
import BibleCatalogueBody from './BibleCatalogueBody';
import PropTypes from 'prop-types';
import SearchedBooks from './SearchedBooks';

class BibleCatalogue extends Component {
  static propTypes = {
    getInputContent: PropTypes.func,
    onSelect: PropTypes.func,
    selectedBookId: PropTypes.string,
    ifShowSearchedBooks: PropTypes.bool,
    SearchedBooks: PropTypes.array
  }

  constructor(props){
    super(props)
  }

  showCatalogue(){
    if(this.props.ifShowSearchedBooks){
      return <SearchedBooks />
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