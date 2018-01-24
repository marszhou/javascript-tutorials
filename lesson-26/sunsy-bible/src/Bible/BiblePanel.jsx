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
    this.getInputContent = this.getInputContent.bind(this);
    this.initializeBiblePanel = this.initializeBiblePanel.bind(this);
    this.state = {
      selectedBookId: "0", // string格式
      selectedChapter: 0, // 默认选择第一章
      selectedVerse: 0, //默认选择第一节
      searchedBooks: [ ],
      ifShowSearchedBooks: false
    }
  }

  handleSelectBook(bookId){
    this.setState({
      selectedBookId: bookId,
      selectedChapter: 0
    })
  }

  handleSelectChapter(selectedChapter){
    this.setState({
      selectedChapter: parseInt(selectedChapter),
    })
  }

  handleSelectVerse(){

  }

  getInputContent(){
    // 需要用正则表达式限制输入数字型或数字型字符串
    let inputContent = document.getElementById("input").value; 
    let searchedBooks = [];
    data.books.forEach( (book, index) => {
      for(let key in book){
        if(book[key].indexOf(inputContent) >= 0){
          if(inputContent){
            searchedBooks.push(book.id)
          }
          break
        }
      }
    })
    if(searchedBooks.length > 0){
      this.setState({
        searchedBooks: searchedBooks,
        ifShowSearchedBooks: true,
      })
    }
    else{
      this.setState({
        ifShowSearchedBooks: false,
      })
    }
  }

  initializeBiblePanel(){
    this.setState({
      selectedBookId: "0",
      selectedChapter: 0,
      selectedVerse: 0,
    })
  }

  render() {
    return (
      <div style={{display: 'flex'}}>
        <BibleCatalogue
          getInputContent={this.getInputContent}
          onSelect={this.handleSelectBook}
          selectedBookId={this.state.selectedBookId}
          ifShowSearchedBooks={this.state.ifShowSearchedBooks}
          searchedBooks={this.state.searchedBooks}
          initializeBiblePanel={this.initializeBiblePanel}
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