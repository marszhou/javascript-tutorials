import { isUndefined } from 'lodash';
import { calculate, isFloat } from '../utils';

export default class CalculateItem {
  constructor(
    { v1, operator, v2, hiddenFactor, hiddenOperator } = {},
    cursor = 1
  ) {
    this.v1 = v1;
    this.operator = operator;
    this.v2 = v2;
    this.hiddenFactor = hiddenFactor;
    this.hiddenOperator = hiddenOperator;
    this.cursor = cursor; // 输入指针
    this.result = undefined;
  }

  toString() {
    if (!this.isFinished()) {
      return (
        '*CalculateItem' +
        JSON.stringify({
          v1: this.v1,
          operator: this.operator,
          v2: this.v2,
          cursor: this.cursor
        })
      );
    }
    const data = this.calculate();
    return '$CalculateItem' + JSON.stringify(data);
  }

  isFinished() {
    return !isUndefined(this.result);
  }

  setOperator(operator, force = false) {
    if (this.operator && !force) {
      if (!isUndefined(this.v2)) {
        return false;
      }
    }
    this.operator = operator;
    this.cursor = 2;
    return true;
  }

  getCurrentCursorValue() {
    if (this.cursor === 1) {
      return this.v1;
    }
    return this.v2;
  }

  setCurrentCursorValue(v) {
    if (this.cursor === 1) {
      this.v1 = v;
    } else {
      this.v2 = v;
    }
  }

  getChangeKeyName() {
    if (this.cursor === 1) {
      return 'v1';
    }
    if (this.cursor === 2) {
      if (isUndefined(this.v2)) {
        return 'v1';
      } else {
        return 'v2';
      }
    }
  }

  executePercent() {
    const key = this.getChangeKeyName();
    const value = +this[key];
    this[key] = value * 0.01;
    return this[key];
  }

  executeTogglePositive() {
    const key = this.getChangeKeyName();
    const value = +this[key];
    this[key] = -value;
    return this[key];
  }

  insertDigit(digit) {
    if (this.cursor >= 2 && isUndefined(this.operator)) {
      return; // 错误
    }
    const v = this.getCurrentCursorValue();
    let nextV;
    if (isUndefined(v)) {
      if (digit === 0) {
        return '0';
      }
      nextV = digit; // 非0数字直接赋值
    } else {
      nextV = v + '' + digit; // 已经输入了部分则在后面叠加
    }
    this.setCurrentCursorValue(nextV);
    return nextV;
  }

  insertDot() {
    if (this.cursor >= 2 && isUndefined(this.operator)) {
      return; // 错误
    }
    const v = this.getCurrentCursorValue();
    let nextV;
    if (isUndefined(v)) {
      nextV = '0.';
    } else {
      if (isFloat(v)) return v; // do nothing
      nextV = v + '.';
    }
    this.setCurrentCursorValue(nextV);
    return nextV;
  }

  calculate() {
    let { v1, v2, operator, hiddenFactor, hiddenOperator } = this;
    if (isUndefined(v1)) {
      v1 = 0;
    }
    operator = operator || hiddenOperator;
    v2 = v2 || hiddenFactor;
    if (!operator) {
      if (isUndefined(v2)) {
        // 输入了一个数字，直接按=号
        operator = 'multiply';
        v2 = 1;
      } else {
        return; // 没有符号但是有v2，这种情况应该不存在
      }
    } else {
      if (isUndefined(v2)) {
        v2 = v1;
      }
    }
    const result = calculate(+v1, operator, +v2);
    return { v1, v2, operator, result, hiddenFactor, hiddenOperator };
  }

  runEqual() {
    const data = this.calculate();
    this.result = data.result;
    let item;
    if (data.operator) {
      item = new CalculateItem(
        {
          v1: data.result,
          hiddenOperator: data.operator,
          hiddenFactor: data.v2
        },
        2
      );
    } else {
      item = new CalculateItem(
        {
          v1: data.result
        },
        2
      );
    }
    return item;
  }

  runSequence(operator) {
    const data = this.calculate();
    this.result = data.result;
    let item = new CalculateItem(
      {
        v1: data.result,
        operator
      },
      2
    );
    return item;
  }
}
