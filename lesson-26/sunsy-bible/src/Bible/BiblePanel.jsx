import React, { Component } from 'react';
import BibleCatalogue from './BibleCatalogue';
import BibleChapter from './BibleChapter';
import BibleSentence from './BibleSentence';
import PropTypes from 'prop-types';
import { data } from './data';

import './style.css';

class BiblePanel extends Component {
  static propTypes = {
    
  }
  
  constructor(props){
    super(props);
    this.handleSelectBook = this.handleSelectBook.bind(this);
    this.state = {
      selectedBookId: " ",
      chapterCount: 50,
      showChapter: false,
      onSelectBook: " ",
      onSelectChapter: " ",
      onSelectSentence: " "
    }
  }

  handleSelectBook(bookId, chapterCount){
    chapterCount = parseInt(chapterCount);
    this.setState({
      selectedBookId: bookId,
      chapterCount: chapterCount,
      showChapter: true
    })
  }

  handleSelectChapter(){

  }

  handleSelectSentence(){

  }

  render() {
    const oldBooks = data.books.slice(0, 39);
    const newBooks = data.books.slice(39);
    return (
      <div style={{display: 'flex'}}>
        <BibleCatalogue 
          oldBooks={oldBooks} 
          newBooks={newBooks} 
          onSelect={this.handleSelectBook}
          selectedBookId={this.state.selectedBookId}
        />
        <BibleChapter 
          chapterCount={this.state.chapterCount}
          showChapter={this.state.showChapter}
        />
        <BibleSentence />
      </div>
    );
  }
}

export default BiblePanel;