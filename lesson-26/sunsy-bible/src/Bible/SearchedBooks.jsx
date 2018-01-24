import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { data } from './data';

class SearchedBooks extends Component {
  static propTypes = {
    searchedBooks: PropTypes.array,
    onSelect: PropTypes.func,
    initializeBiblePanel: PropTypes.func,
    selectedBookId: PropTypes.string
  }
  componentDidMount(){
    this.props.initializeBiblePanel()
  }

  componentWillUnmount(){
    this.props.initializeBiblePanel()
  }


  render() {
    const { searchedBooks, onSelect, selectedBookId } = this.props;
    
    return (
      <div className="list-content">
        <div className="bookGroup">
          <div className="title">
            搜索结果
          </div>
          <ul className="list">
            {searchedBooks.map(
              (bookId, index) => {
                let nameCn = undefined;
                data.books.forEach(
                  (bookObj, index) => {
                    if(bookObj.id === bookId){
                      nameCn = bookObj.nameCn
                    }
                  }
                )
                return(
                  <li 
                    key={bookId} 
                    className={bookId === selectedBookId ? "highlighted" : " "} 
                    role="button" 
                    onClick={
                      () => {
                        onSelect(bookId)
                      }
                    }
                  >
                    <span>{nameCn}</span>
                  </li>
                )
              }
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchedBooks;