import { isUndefined } from 'lodash';
import { calculate, isFloat } from '../utils';

export default class CalculateItem {
  constructor({ v1, operator, v2 } = {}, cursor = 1) {
    this.v1 = v1;
    this.operator = operator;
    this.v2 = v2;
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

  setOperator(operator, force=false) {
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

  insertDigit(digit) {
    if (this.cursor === 3) return; // 超出输入范围
    if (this.cursor === 2 && isUndefined(this.operator)) {
      return; // 错误
    }
    const v = this.getCurrentCursorValue();
    let nextV;
    if (isUndefined(v)) {
      if (digit === 0) {
        return v; // do nothing
      }
      nextV = digit; // 非0数字直接赋值
    } else {
      nextV = v + '' + digit; // 已经输入了部分则在后面叠加
    }
    this.setCurrentCursorValue(nextV);
    return nextV;
  }

  insertDot() {
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
    let { v1, v2, operator } = this;
    if (isUndefined(v1)) {
      v1 = 0;
    }
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
    return { v1, v2, operator, result };
  }

  runEqual() {
    const data = this.calculate();
    this.result = data.result;
    let item;
    if (this.operator) {
      item = new CalculateItem({
        v1: data.result,
        operator: this.operator,
        v2: data.v2
      }, 3);
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

  runSequence(operator) {}
}
