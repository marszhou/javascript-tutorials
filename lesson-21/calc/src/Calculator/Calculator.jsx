import React from 'react';
import './Calculator.css';
import Display from './Display';
import Button from './Button';

const buttons = [
  // type, value, text=value, size=1
  ['func', 'clear', 'C'],
  ['func', 'toggle_positive', '±'],
  ['func', 'percent', '%'],
  ['operator', 'divide', '÷'],
  ['number', 7],
  ['number', 8],
  ['number', 9],
  ['operator', 'multiply', '×'],
  ['number', 4],
  ['number', 5],
  ['number', 6],
  ['operator', 'minus', '-'],
  ['number', 1],
  ['number', 2],
  ['number', 3],
  ['operator', 'plus', '+'],
  ['number', 0, 0, 2],
  ['entity', '.'],
  ['operator', '=']
];

class Calculator extends React.Component {
  handleButtonClick = (type, value) => {
    console.log(type, value);
  };

  render() {
    return (
      <ul id="cal">
        <Display />
        {buttons.map(([type, value, text, size = 1]) => {
          text = text || value;
          return (
            <Button
              key={value}
              type={type}
              value={value}
              size={size}
              onClick={this.handleButtonClick}
            >{text}</Button>
          );
        })}

      </ul>
    );
  }
}

export default Calculator;
