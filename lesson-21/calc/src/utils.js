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
