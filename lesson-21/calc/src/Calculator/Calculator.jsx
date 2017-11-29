import React from 'react';
import './Calculator.css';
import Display from './Display';
import Button from './Button';
import { delay } from 'lodash';
import CalculatorManager from './CalculatorManager';

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

    this.state = {
      display: null,
      hide: false
    };
  }

  blink(cb) {
    this.setState({ hide: true }, () => delay(() => cb(), 50));
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
    CalculatorManager.handle(type, value);
    const caller = () => {
      this.setDisplayValue(CalculatorManager.getDisplayValue());
    };

    if (CalculatorManager.needBlink()) {
      this.blink(caller);
    } else {
      caller();
    }
  };

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
