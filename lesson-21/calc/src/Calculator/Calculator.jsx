import React from 'react';
import './Calculator.css';
import Display from './Display';
import Button from './Button';
import { delay, last } from 'lodash';
import CalculateItem from './CalculateItem';

const Buttons = [
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
  ['entity', 'dot', '.'],
  ['func', 'equal', '=']
];
class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.init();

    this.state = {
      display: null,
      hide: false
    };
  }

  init() {
    this.stacks = [];
  }

  newItem() {
    return new CalculateItem();
  }

  getLastItem() {
    return last(this.stacks);
  }

  getLiveItem() {
    const last = this.getLastItem();
    if (!last || last.isFinished()) {
      const item = this.newItem();
      this.stacks.push(item);
      return item;
    } else {
      return last;
    }
  }

  blink(cb) {
    this.setState(
      {
        hide: true
      },
      () =>
        delay(() => {
          cb();
          this.log();
        }, 50)
    );
  }

  log() {
    // console.log(this.stacks);
  }

  getDisplayValue() {
    return this.state.hide ? null : this.state.display || '0';
  }

  setDisplayValue(value) {
    this.setState({
      hide: false,
      display: value
    });
  }

  handleButtonClick = (type, value) => {
    switch (type) {
      case 'func':
        this.executeFunc(value);
        break;
      case 'operator':
        this.setOperator(value);
        break;
      case 'number':
        this.insertDigit(value);
        this.log();
        break;
      case 'entity':
        if (value === 'dot') {
          this.insertDot();
        }
        this.log();
        break;
      default:
        break;
    }
  };

  executeFunc(funcName) {
    switch (funcName) {
      case 'clear':
        this.executeClear();
        break;
      case 'percent':
        this.executePercent();
        break;
      case 'equal':
        this.executeEqual();
        break;
      default:
    }
  }

  executeClear() {
    this.blink(() => {
      this.init();
      this.setDisplayValue('');
    });
  }

  executeEqual() {
    const item = this.getLiveItem();
    const newItem = item.runEqual();
    this.stacks.push(newItem);
    this.setDisplayValue(newItem.v1);
  }

  setOperator(operator) {
    const item = this.getLiveItem();
    const success = item.setOperator(operator);
    if (!success) {
      // this.executeEqual();
      // this.setOperator(operator);
    }
  }

  insertDigit(digit) {
    const item = this.getLiveItem();
    const value = item.insertDigit(digit);
    if (value === false) {
      this.init();
      this.insertDigit(digit); // 重置
      return
    }
    this.setDisplayValue(value);
  }

  insertDot() {
    const item = this.getLiveItem();
    const value = item.insertDot();
    this.setDisplayValue(value);
  }

  render() {
    return (
      <ul className="cal">
        <Display value={this.getDisplayValue()} />
        {Buttons.map(([type, value, text, size = 1], index) => {
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
