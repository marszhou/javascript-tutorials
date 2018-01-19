import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BibleVerse extends Component {
  static propTypes = {
    verseCount: PropTypes.number,
    showVerse: PropTypes.bool
  }
  constructor(props){
    super(props)
  }

  render() {
    const { verseCount, showVerse } = this.props;
    return (
      <div 
        className="column chapterSelector client-height" 
        style={showVerse ? {display: " "} : {display: "none"}}
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
                  <li key={index} role="button" type="default">
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