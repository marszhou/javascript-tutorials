import React, { Component } from 'react';

class WeiboTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordsCount: 0,
      textInput: "输入一段文字"
    }
  }

  handleChange = (el) => {
    const value = el.value;
    console.log(value)
    
    this.setState({
      wordsCount: value,
      textInput: el.value
    })
  }

  render() {
    return (
      <div className="container">
        <div className="text-title-container">
          <div className="text-title left">有什么新鲜事想告诉大家?</div>
          <div className="text-title right">已输入{this.state.wordsCount}个字</div>
        </div>
        <div className="">
          <textarea 
            className="text-input" 
            cols="50" 
            rows="10"
            value={this.state.textInput}
            onChange={this.handleChange}
          ></textarea>
        </div>
      </div>
    );
  }
}

export default WeiboTextInput;