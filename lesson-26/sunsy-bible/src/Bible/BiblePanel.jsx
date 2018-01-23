import React, { Component } from 'react';
import BibleCatalogue from './BibleCatalogue';
import BibleChapter from './BibleChapter';
import BibleVerse from './BibleVerse';
import PropTypes from 'prop-types';
import { data } from './data';

import './style.css';

class BiblePanel extends Component {
  
  constructor(props){
    super(props);
    this.handleSelectBook = this.handleSelectBook.bind(this);
    this.handleSelectChapter = this.handleSelectChapter.bind(this);
    this.handleSelectVerse = this.handleSelectVerse.bind(this);
    this.state = {
      selectedBookId: "1153072783907", // string格式
      selectedChapter: 1, // 默认选择第一章
      selectedVerse: 1, //默认选择第一节
      clicked: false
    }
  }

  handleSelectBook(bookId){
    this.setState({
      selectedBookId: bookId,
     
    })
  }

  handleSelectChapter(selectedChapter){
    this.setState({
      selectedChapter: parseInt(selectedChapter),
      
    })
  }

  handleSelectVerse(){

  }

  render() {
    return (
      <div style={{display: 'flex'}}>
        <BibleCatalogue 
          onSelect={this.handleSelectBook}
          selectedBookId={this.state.selectedBookId}
        />
        <BibleChapter 
          selectedBookId={this.state.selectedBookId}
          selectedChapter={this.state.selectedChapter}
          onSelect={this.handleSelectChapter}
        />
        <BibleVerse
          selectedBookId={this.state.selectedBookId}
          selectedChapter={this.state.selectedChapter}
          selectedVerse={this.state.selectedVerse}
          onSelect={this.handleSelectVerse}
        />
      </div>
    );
  }
}

export default BiblePanel;