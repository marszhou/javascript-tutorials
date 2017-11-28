import React from 'react';
import './Calculator.css';
import Display from './Display';
import Button from './Button';

class Calculator extends React.Component {
  handleButtonClick = (type, value) => {
    console.log(type, value)
  }

  render() {
    return (
      <ul id="cal">
        <Display />
        <Button type="func" value="C" onClick={this.handleButtonClick}>C</Button>
        <li className="key func">±</li>
        <li className="key func">％</li>
        <li className="key operator">÷</li>
        <li className="key number">7</li>
        <li className="key number">8</li>
        <li className="key number">9</li>
        <li className="key operator">×</li>
        <li className="key number">4</li>
        <li className="key number">5</li>
        <li className="key number">6</li>
        <li className="key operator">-</li>
        <li className="key number">1</li>
        <li className="key number">2</li>
        <li className="key number">3</li>
        <li className="key operator">+</li>
        <li className="key size2 number">0</li>
        <li className="key dot">.</li>
        <li className="key operator">=</li>
      </ul>
    );
  }
};

export default Calculator;