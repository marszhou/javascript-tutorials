import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BibleChapter extends Component {
  static propTypes = {
    chapterCount: PropTypes.number,
    showChapter: PropTypes.bool,
    onSelect: PropTypes.func
  }
  
  constructor(props){
    super(props);
  }

  render() {
    const { chapterCount, showChapter } = this.props;
    return (
      <div 
        className="column chapterSelector client-height" 
        style={ showChapter ? {display: " "} : {display: "none"} }
      >
        <div className="title">
          <div className="left">
            <span style={{paddingLeft: 5, fontWeight: 'bold'}}>章</span>
          </div>
        </div>
        <div className="list-content">
          <ul className="grid">
            {[...Array(chapterCount)].map(
              (_, index) => {
                return(
                  <li key={index} role="button" type="default" onClick={this.props.onSelect}>
                    {index + 1}
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

export default BibleChapter;