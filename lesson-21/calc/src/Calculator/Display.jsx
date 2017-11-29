import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
// import { getTextDimention } from '../utils';

// function calculateTextWidth(text) {
//   const container = document.createElement('ul');
//   document.body.appendChild(container);
//   container.classList.add('cal');
//   container.innerHTML = '<li class="size4 output"></li>';
//   const el = container.querySelector('li');
//   console.log(getTextDimention(text, undefined, el));
//   document.body.removeChild(container);
// }

const FontWidthMappings = [
  [36, 22],
  [34, 20],
  [32, 18],
  [30, 16],
  [28, 15],
  [24, 13],
  [20, 11]
];
const MaxTextWidth = 206;

function getProperWdith(text, mappings, maxWidth) {
  const find = mappings.find(([fontSize, w]) => {
    if (w * text.length <= maxWidth) return true;
  });
  return (find && find[0]) || _.last(mappings)[0];
}

const Display = ({ value }) => {
  const fontSize = getProperWdith(value, FontWidthMappings, MaxTextWidth);
  return (
    <li
      className="size4 output"
      title={value}
      style={{ fontSize: `${fontSize}px` }}
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
