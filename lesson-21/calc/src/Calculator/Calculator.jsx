import React from 'react';
import './Calculator.css';
import Display from './Display';
import Button from './Button';
import { delay, isUndefined } from 'lodash';
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
    this.item = null;
  }

  newItem() {
    return new CalculateItem();
  }

  getLiveItem() {
    const last = this.item;
    if (!last || last.isFinished()) {
      const item = this.newItem();
      this.item = item;
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
    console.log(this.item);
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
      case 'toggle_positive':
        this.executeTogglePositive();
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

  executePercent() {
    const item = this.getLiveItem();
    const value = item.executePercent();
    this.setDisplayValue(value);
  }

  executeTogglePositive() {
    const item = this.getLiveItem();
    const value = item.executeTogglePositive();
    this.setDisplayValue(value);
  }

  executeEqual() {
    const item = this.getLiveItem();
    const newItem = item.runEqual();
    this.item = newItem;
    this.setDisplayValue(newItem.v1);
  }

  setOperator(operator) {
    const item = this.getLiveItem();
    const success = item.setOperator(operator);
    if (!success) {
      const newItem = item.runSequence(operator);
      this.item = newItem;
      this.setDisplayValue(newItem.v1);
    }
  }

  insertDigit(digit) {
    const item = this.getLiveItem();
    const value = item.insertDigit(digit);
    if (isUndefined(value)) {
      this.init();
      this.insertDigit(digit); // 重置
      return;
    }
    this.setDisplayValue(value);
  }

  insertDot() {
    const item = this.getLiveItem();
    const value = item.insertDot();
    if (isUndefined(value)) {
      this.init();
      this.insertDot(); // 重置
      return;
    }
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
