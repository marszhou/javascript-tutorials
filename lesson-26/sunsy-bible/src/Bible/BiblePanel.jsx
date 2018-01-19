import React, { Component } from 'react';
import BibleCatalogue from './BibleCatalogue';
import BibleChapter from './BibleChapter';
import BibleVerse from './BibleVerse';
import PropTypes from 'prop-types';
import { data } from './data';

import './style.css';

class BiblePanel extends Component {
  static propTypes = {

  }
  
  constructor(props){
    super(props);
    this.handleSelectBook = this.handleSelectBook.bind(this);
    this.handleSelectChapter = this.handleSelectChapter.bind(this);
    this.handleSelectVerse = this.handleSelectVerse.bind(this);
    this.state = {
      selectedBookId: " ", // string格式
      chapterCount: null, // number格式
      verseCount: null, // number格式
      showChapter: false,
      showVerse: false
    }
  }

  handleSelectBook(bookId, chapterCount){
    let chapterCountNumber = parseInt(chapterCount);
    this.setState({
      selectedBookId: bookId,
      chapterCount: chapterCountNumber,
      showChapter: true,
      showVerse: false
    })
  }

  handleSelectChapter(chapterNumber){
    let verseCountNumber = parseInt(chapterNumber);
    this.setState({
      verseCount: verseCountNumber,
      showVerse: true
    })
  }

  handleSelectVerse(){

  }

  render() {
    const oldBooks = data.books.slice(0, 39);
    const newBooks = data.books.slice(39);
    const verseCountObject = data.verseCount;
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
          selectedBookId={this.state.selectedBookId}
          verseCountObject={verseCountObject}
          onSelect={this.handleSelectChapter}
        />
        <BibleVerse
          verseCount={this.state.verseCount}
          showVerse={this.state.showVerse}
        />
      </div>
    );
  }
}

export default BiblePanel;