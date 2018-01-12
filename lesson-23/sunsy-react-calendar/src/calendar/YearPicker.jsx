import React, { Component } from 'react';
import PropTypes from 'prop-types';

class YearPicker extends Component {
  static propTypes = {
    start: PropTypes.number,
    onSelect: PropTypes.func,
    onReturn: PropTypes.func
  }

  constructor(props){
    super(props);
    this.state = {

    };
  }

  

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default YearPicker;