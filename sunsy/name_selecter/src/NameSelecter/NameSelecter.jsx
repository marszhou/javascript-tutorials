import React, { Component } from 'react';
import NameList from './NameList';
import CountSet from './CountSet';
import Result from './Result';
import NameData from './data.json';

class Nameselecter extends Component {
  render() {
    const nameList = NameData;
    return (
      <div>
        <NameList nameList/>
        <CountSet />
        <Result />
      </div>
    );
  }
}

export default Nameselecter;