# Demo： 计算器React化

项目使用，在本目录下
```
> yarn # 首次运行
> yarn start
```

步骤
## 第一步：初始化

shell中用create-react-app新建项目

```
> create-react-app [your-app-name] --scripts-version custom-react-scripts
> cd [your-app-name]
> rm -f src/*
```

## 第二步：入口

src/index.js

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
```

src/App.jsx

```
import React from 'react';
import Calculator from 'Calculator'
const App = () => {
  return (
    <div>
      <Calculator />
    </div>
  );
};

export default App;
```

src/Calculator/Calculator.jsx

```
import React from 'react';

const Calculator = () => {
  return (
    <div>
      Calculator
    </div>
  );
};

export default Calculator;
```

## 第三步：UI

src/Calculator/Calculator.css

```css
body  {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}

ul.cal {
  list-style: none;
  padding: 0;
  border-right: 1px solid black;
  border-top: 1px solid black;

  width: 232px;
  /* height: 320px; */
  background: rgb(131,131,131);

  display: flex;
  flex-wrap: wrap;
  /* align-items: flex-start; */
  align-content: flex-start;
}

ul.cal li{
  flex: 1 21%;
  height: 45px;
  background: #dcdcdc;
  text-align: center;
  line-height: 45px;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  cursor: default;
  box-sizing: border-box;
}

ul.cal li.size2 {
  flex: 2 42%;
}

ul.cal li.size4 {
  flex: 1 100%;
}

ul.cal li.output {
  background: #A0A0A0;
  font-size: 36px;
  height: 81px;
  line-height: 110px;
  color: white;
  text-align: right;
  padding-right: 6px;
  font-family: "Shree Devanagari 714";
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

ul.cal li.func {
  background: #d0d0d0;
}

ul.cal li.operator {
  background: #f6872c;
  color: white;
}

ul.cal li.key:active {
  background: #a9a9a9;
}

ul.cal li.operator:active {
  background: #bd6821;
  color: #5d5d5d;
}
```

src/Calculator/Calculator.jsx

```
import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  render() {
    return (
      <ul className="cal">
        <li className="size4 output">0</li>
        <li className="key func">C</li>
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
}

export default Calculator;
```

## 第四步：拆分组件

显示屏 Calculator/Display.jsx

```
import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ value }) => {
  return (
    <li
      className="size4 output"
      title={value}
    >
      {value}
    </li>
  );
};

Display.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Display.defaultProps = {
  value: 0
};

export default Display;
```

按钮 Calculator/Button.jsx

这里引入一个新函数，(cx)[https://github.com/JedWatson/classnames]
需要先安装 ```> yarn add classnames```

```
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Button = ({ onClick, value, type, size, children, index }) => {
  const classNames = {
    key: true,
    [type]: true,
    ['size' + size]: true,
    ['item-'+index]: true
  };
  return (
    <li className={cx(classNames)} onClick={() => onClick(type, value)}>
      {children}
    </li>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.oneOf(['number', 'operator', 'dot', 'func', 'entity'])
    .isRequired,
  size: PropTypes.number
};

Button.defaultProps = {
  size: 1
};

export default Button;
```

主组件 Calculator/Calculator.jsx

```
......
import Display from './Display';
import Button from './Button';

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
      display: null
    };
  }

  getDisplayValue() {
    return this.state.hide ? null : this.state.display || '0';
  }

  handleButtonClick = (type, value) => {
    console.log(type, value);
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

......
```



