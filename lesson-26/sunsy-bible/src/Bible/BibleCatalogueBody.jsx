import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BibleCatalogueBody extends Component {
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
    const { oldBooks, newBooks, onSelect, selectedBookId } = this.props;
    
    return (
      <div className="list-content">
        <div className="bookGroup">
          <div className="title">
            旧约
          </div>
          <ul className="list">
            {[...Array(39)].map(
              (_, index) => {
                return(
                  <li 
                    key={oldBooks[index].id} 
                    className={oldBooks[index].id === selectedBookId ? "highlighted" : " "} 
                    role="button" 
                    onClick={
                      () => {
                        onSelect(oldBooks[index].id, oldBooks[index].chapterCount)
                      }
                    }
                  >
                    <span>{oldBooks[index].nameCn}</span>
                  </li>
                )
              }
            )}
          </ul>
        </div>
        <div className="bookGroup">
          <div className="title">
            新约
          </div>
          <ul className="list">
            {[...Array(27)].map(
              (_, index) => {
                return(
                  <li 
                    key={newBooks[index].id} 
                    className={newBooks[index].id === selectedBookId ? "highlighted" : " "}
                    role="button" 
                    onClick={
                      () => {
                        onSelect(newBooks[index].id, newBooks[index].chapterCount)
                      }
                    }
                  >
                    <span>{newBooks[index].nameCn}</span>
                  </li>
                )
              }
            )
              
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default BibleCatalogueBody;