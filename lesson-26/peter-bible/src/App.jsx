import React, { Component } from "react";
import PropTypes from "prop-types";
import BibleSelector from "./Bible/BibleSelector";

class App extends Component {
  render() {
    return (
      <div>
        <BibleSelector bookId={1} Chapter={2} Verse={3} />
      </div>
    );
  }
}
export default App;
