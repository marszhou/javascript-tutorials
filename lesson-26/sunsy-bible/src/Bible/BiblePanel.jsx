import React, { Component } from 'react';
import BibleCatalogue from './BibleCatalogue';
import BibleChapter from './BibleChapter';
import BibleVerse from './BibleVerse';
import PropTypes from 'prop-types';
import { data } from './data';

import './style.css';

class BiblePanel extends Component {
  static propTypes = {
    value: PropTypes.object,
    onChange: PropTypes.func
  }
  
  constructor(props){
    super(props);
    this.handleSelectBook = this.handleSelectBook.bind(this);
    this.handleSelectChapter = this.handleSelectChapter.bind(this);
    this.handleSelectVerse = this.handleSelectVerse.bind(this);
    this.getInputContent = this.getInputContent.bind(this);
    this.initializeBiblePanel = this.initializeBiblePanel.bind(this);
    this.state = {
      contentLocation: this.props.value,
      searchedBooks: [ ],
      ifShowSearchedBooks: false
    }
  }

  handleSelectBook(bookId){
    this.setState({
      contentLocation: { selectedBookId: bookId, selectedChapter: 0} 
    })
    console.log(this.state.contentLocation);
    
  }

  handleSelectChapter(chapter){
    this.setState({
      contentLocation: { selectedChapter: parseInt(chapter) } 
    })
    console.log(this.state.contentLocation);
    
  }

  handleSelectVerse(){

  }

  getInputContent(event){
    // 需要用正则表达式限制输入数字型或数字型字符串
    const inputContent = event.target.value;
    const searchedBooks = [];
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
      contentLocation: {  selectedBookId: "0", selectedChapter: 0, selectedVerse: 0 }
    })
  }

  render() {
    return (
      <div style={{display: 'flex'}}>
        <BibleCatalogue
          onInputChange={this.getInputContent}
          onSelect={this.handleSelectBook}
          selectedBookId={this.state.contentLocation.selectedBookId}
          ifShowSearchedBooks={this.state.ifShowSearchedBooks}
          searchedBooks={this.state.searchedBooks}
          initializeBiblePanel={this.initializeBiblePanel}
        />
        <BibleChapter 
          selectedBookId={this.state.contentLocation.selectedBookId}
          selectedChapter={this.state.contentLocation.selectedChapter}
          onSelect={this.handleSelectChapter}
        />
        <BibleVerse
          selectedBookId={this.state.contentLocation.selectedBookId}
          selectedChapter={this.state.contentLocation.selectedChapter}
          selectedVerse={this.state.contentLocation.selectedVerse}
          onSelect={this.handleSelectVerse}
        />
      </div>
    );
  }
}

export default BiblePanel;