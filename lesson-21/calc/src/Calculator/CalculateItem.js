import { isUndefined } from 'lodash';
import { calculate, isFloat } from '../utils';

export default class CalculateItem {
  constructor({ v1, operator, v2, last = {} } = {}, cursor = 1) {
    this.v1 = v1;
    this.operator = operator;
    this.v2 = v2;
    this.last = last;

    this.cursor = cursor; // 输入指针, 1输入v1，2输入op，3输入v2，>3 无效
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
    this.cursor = 3;
    return true;
  }

  getCurrentCursorValue() {
    if (this.cursor === 1) {
      return this.v1;
    } else if (this.cursor === 3) {
      return this.v2;
    }
  }

  setCurrentCursorValue(v) {
    if (this.cursor === 1) {
      this.v1 = v;
    } else if (this.cursor === 3) {
      this.v2 = v;
    }
  }

  currentDisplayKeyName() {
    if (!isUndefined(this.v1) && !isUndefined(this.v2)) {
      return 'v2';
    }
    return 'v1';
  }

  getCurrentDisplayValue() {
    return this[this.currentDisplayKeyName()];
  }

  executeChange(type) {
    const key = this.currentDisplayKeyName();
    const value = +this[key];
    switch (type) {
      case 'percent':
        this[key] = value * 0.01;
        break;
      case 'toggle_positive':
        this[key] = -value;
        break;
      default:
    }
  }

  insertDigit(digit) {
    if (!(this.cursor === 1 || this.cursor === 3)) {
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
    if (!(this.cursor === 1 || this.cursor === 3)) {
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
    let { v1, v2, operator, last } = this;
    if (isUndefined(v1)) {
      v1 = 0;
    }
    operator = operator || last.operator;
    v2 = v2 || last.v2;
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
    return { v1, v2, operator, result, last };
  }

  runEqual() {
    const data = this.calculate();
    this.result = data.result;
    let item;
    if (data.operator) { // 有符号
      item = new CalculateItem(
        {
          v1: data.result,
          last: {
            operator: data.operator,
            v2: data.v2
          }
        },
        2
      );
    } else { // 直接按等号
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
      3
    );
    return item;
  }
}
