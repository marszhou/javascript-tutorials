import CalculateItem from './CalculateItem';
import { isUndefined } from 'lodash';

export default {
  item: null,
  blink: false,

  getDisplayValue() {
    const item = this.getLiveItem();
    return item.getCurrentDisplayValue();
  },

  needBlink() {
    const old = this.blink
    this.blink = false;
    return old;
  },

  init() {
    this.item = null;
  },

  newItem() {
    return new CalculateItem();
  },

  getLiveItem() {
    const last = this.item;
    if (!last || last.isFinished()) {
      const item = this.newItem();
      this.item = item;
      return item;
    } else {
      return last;
    }
  },

  handle(type, value) {
    switch (type) {
      case 'func':
        this.executeFunc(value);
        break;
      case 'operator':
        this.setOperator(value);
        break;
      case 'number':
        this.insertDigit(value);
        break;
      case 'entity':
        if (value === 'dot') {
          this.insertDot();
        }
        break;
      default:
        break;
    }
  },

  executeFunc(funcName) {
    switch (funcName) {
      case 'clear':
        this.executeClear();
        break;
      case 'percent':
      case 'toggle_positive':
        this.executeChange(funcName);
        break;
      case 'equal':
        this.executeEqual();
        break;
      default:
    }
  },

  executeClear() {
    this.init();
  },

  executeChange(type) {
    const item = this.getLiveItem();
    const value = item.executeChange(type);
    this.blink = true;
  },

  executeEqual() {
    const item = this.getLiveItem();
    const newItem = item.runEqual();
    this.item = newItem;
    this.blink = true;
  },

  setOperator(operator) {
    const item = this.getLiveItem();
    const success = item.setOperator(operator);
    if (!success) {
      const newItem = item.runSequence(operator);
      this.item = newItem;
    }
    this.blink = true;
  },

  insertDigit(digit) {
    const item = this.getLiveItem();
    const value = item.insertDigit(digit);
    if (isUndefined(value)) {
      this.init();
      this.insertDigit(digit); // 重置
      return;
    }
  },

  insertDot() {
    const item = this.getLiveItem();
    const value = item.insertDot();
    if (isUndefined(value)) {
      this.init();
      this.insertDot(); // 重置
      return;
    }
  }
}