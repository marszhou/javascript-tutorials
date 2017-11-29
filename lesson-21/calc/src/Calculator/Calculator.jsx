import React from 'react';
import './Calculator.css';
import Display from './Display';
import Button from './Button';
import { delay } from 'lodash';

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
  constructor(props) {
    super(props);

    this.left = null;
    this.operator = null;
    this.right = null;
    this.current = 'left';

    this.state = {
      display: null,
      simulatePress: false
    };
  }

  getCurrentValue() {
    return this[this.current] || 0;
  }

  getDisplayValue() {
    return this.state.simulatePress ? null : this.state.display || '0';
  }

  setDisplayValue(value) {
    this[this.current] = value;
    this.setState({
      simulatePress: false,
      display: value
    });
  }

  handleButtonClick = (type, value) => {
    switch (type) {
      case 'func':
        this.executeFunc(value);
        break;
      case 'operator':
        this.insertOperator(value);
        break;
      case 'number':
        this.insertNumber(value);
        break;
      case 'entity':
        if (value === 'dot') {
          this.insertDot(value);
        }
        break;
      default:
        break;
    }
  };

  executeClear() {
    this.blink(() => {
      this.left = null;
      this.operator = null;
      this.right = null;
      this.current = 'left';
      this.setDisplayValue(null);
    });
  }

  executePercent() {
    this.blink(() => {
      const value = parseFloat(this.getCurrentValue());
      this.setDisplayValue(value * 0.01);
    });
  }

  executeFunc(funcName) {
    switch (funcName) {
      case 'clear':
        this.executeClear();
        break;
      case 'percent':
        this.executePercent();
        break;
    }
  }

  insertOperator(operator) {}

  insertNumber(number) {
    let value = this[this.current] || '';
    const isFloat = value.indexOf('.') > -1;
    let allowAppend = true;

    if (number === 0) {
      if (!isFloat && parseInt(value, 10) === 0) {
        allowAppend = false;
      }
    }

    if (!allowAppend) return;

    value = value + '' + number;
    this.setDisplayValue(value);
  }

  insertDot() {}

  blink(cb) {
    this.setState(
      {
        simulatePress: true
      },
      () => delay(cb, 50)
    );
  }

  render() {
    return (
      <ul className="cal">
        <Display value={this.getDisplayValue()} />
        {buttons.map(([type, value, text, size = 1], index) => {
          text = text || value;
          return (
            <Button
              key={value}
              type={type}
              value={value}
              size={size}
              index={index}
              onClick={this.handleButtonClick}
            >
              {text}
            </Button>
          );
        })}
      </ul>
    );
  }
}

export default Calculator;
