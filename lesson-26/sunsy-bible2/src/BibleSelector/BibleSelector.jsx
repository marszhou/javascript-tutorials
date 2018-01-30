import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookSelector from './BookSelector';
import ChapterSelector from './ChapterSelector';
import VerseSelector from './VerseSelector';
import './style.css';
import BibleData from './data.json';


class BibleSelector extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <BookSelector />
        <ChapterSelector />
        <VerseSelector />
      </div>
    );
  }
}

export default BibleSelector;