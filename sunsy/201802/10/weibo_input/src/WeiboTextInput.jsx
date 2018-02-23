import React, { Component } from 'react';
import { handleWordsCount } from './utils';

class WeiboTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordsCount: 0,
      textInput: ""
    }
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    const wordsCount = handleWordsCount(value);
    this.setState({
      wordsCount: wordsCount,
      textInput: value
    })
  }

  render() {
    return (
      <div className="container">
        <div className="text-title-container">
          <div className="text-title left">有什么新鲜事想告诉大家?</div>
          <div className="text-title right" style={this.state.wordsCount > 140 ? {"color": "red"} : {"color": ""}}>已输入{this.state.wordsCount}个字</div>
        </div>
        <div className="">
          <textarea 
            className="text-input" 
            cols="50" 
            rows="10"
            placeholder="请输入一段文字"
            value={this.state.textInput}
            onChange={this.handleInputChange}
          ></textarea>
        </div>
      </div>
    );
  }
}

export default WeiboTextInput;