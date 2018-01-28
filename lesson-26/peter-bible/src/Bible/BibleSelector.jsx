import React, { Component } from "react";
import PropTypes from "prop-types";
import BookSelector from "./BookSelector";
import ChapterSelector from "./ChapterSelector";
import VerseSelector from "./VerseSelector";
import "./style.css";
import BibleData from "./data.json";

class BibleSelector extends Component {
  static propTypes = {
    value: PropTypes.shape({
      bookId: PropTypes.number,
      chapter: PropTypes.number,
      verse: PropTypes.number
    })
  };

  static defaultProps = {
    value: {
      bookId: 1,
      chapter: 2,
      verse: 3
    }
  };

  render() {
    // const { chapter, verse } = this.state;
    console.log(
      "chapter ：" + this.props.chapter + " verse : " + this.props.verse
    );
    return (
      <div style={{ display: "flex" }}>
        <BookSelector />
        <ChapterSelector
          count={10}
          selected={this.chapter}
          onSelect={chapter => {
            this.setState({ chapter });
            console.log("chapter" + chapter);
          }}
        />
        <VerseSelector
          count={20}
          selected={this.verse}
          onSelect={verse => {
            this.setState({ verse });
            console.log("verse" + verse);
          }}
        />
      </div>
    );
  }
}

export default BibleSelector;
