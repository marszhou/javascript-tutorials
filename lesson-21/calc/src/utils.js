import _ from 'lodash';

export function getTextDimention(text, styles = {display: 'inline-block'}, element = null) {
  let oldStyles = {};
  let newStyles = { ...styles };
  text = _.escape(text);
  const ignoreStyles = [
    'width',
    'height',
    'textOverflow',
    'overflow',
    'minWidth',
    'minHeight',
    'maxWidth',
    'maxHeight',
    'blockSize',
    'inlineSize'
  ];
  if (element) {
    oldStyles = { ...window.getComputedStyle(element, null) };
    newStyles = Object.keys(oldStyles).reduce((ret, key) => {
      if (key.match(/^[\d]+$/)) return ret;
      if (key.match('^webkit')) return ret;
      if (ret[key]) return ret;
      if (ignoreStyles.indexOf(key) > -1) return ret;
      ret[key] = oldStyles[key];
      return ret;
    }, newStyles);
  }
  const el = document.createElement('div');
  Object.keys(newStyles).forEach(key => el.style[key] = newStyles[key]);
  el.innerText = text;
  document.body.appendChild(el);
  const rect = el.getBoundingClientRect();
  document.body.removeChild(el);
  return rect;
}

export function calculate(v1, operator, v2) {
  switch(operator) {
    case 'plus':
      return v1+v2;
    case 'minus':
      return v1-v2;
    case 'multiply':
      return v1*v2;
    case 'divide':
      return v1/v2;
    default:
      return NaN;
  }
}

export function isFloat(v) {
  const n = +v;
  // 针对科学计数法，这样判断有效
  if (!Number.isInteger(n)) {
    return true
  } else {
    // 有可能是1.0或2.这种形式，实际上这样的字符串判断为浮点数
    if((v+'').indexOf('.') > -1) {
      return true
    }
  }
  return false;
}
