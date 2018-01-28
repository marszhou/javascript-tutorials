import React, { Component } from "react";
import PropTypes from "prop-types";
import BookItem from "./BookItem";

class BookSelector extends Component {
  render() {
    return (
      <div className="column bookSelector client-height">
        <div className="title">
          <div className="left">
            <span style={{ paddingLeft: 5, fontWeight: "bold" }}>书</span>
          </div>
          <div className="right">
            <i
              className="fa fa-th"
              aria-hidden="true"
              style={{ paddingRight: 5 }}
            />
          </div>
          <div className="content">
            <div className="search">
              <i className="fa fa-search searchIcon" aria-hidden="true" />
              <input type="text" placeholder="过滤..." />
            </div>
          </div>
        </div>
        <BookItem />
      </div>
    );
  }
}

export default BookSelector;
