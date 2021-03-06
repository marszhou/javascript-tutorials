import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { data } from './data';

class BibleVerse extends Component {
  static propTypes = {
    selectedBookId: PropTypes.string,
    selectedChapter: PropTypes.number,
    selectedVerse: PropTypes.number,
    onSelect: PropTypes.func
  }
  constructor(props){
    super(props)
  }

  render() {
    const { selectedBookId, selectedChapter, selectedVerse, onSelect } = this.props;
    let verseCount = 0;
    if(selectedBookId > 0 && selectedChapter > 0){
      verseCount = parseInt(data.verseCount[selectedBookId][selectedChapter]);
    }

    return (
      <div 
        className="column chapterSelector client-height" 
        style={selectedChapter ? {display: " "} : {display: "none"}}
      >
        <div className="title">
          <div className="left">
            <span style={{paddingLeft: 5, fontWeight: 'bold'}}>节</span>
          </div>
        </div>
        <div className="list-content">
          <ul className="grid">
            {[...Array(verseCount)].map(
              (_, index) => {
                return (
                  <li 
                    key={index} 
                    role="button" 
                    type="default"
                    onClick={ () => onSelect(index + 1) }
                  >
                    { index + 1 }
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

export default BibleVerse;