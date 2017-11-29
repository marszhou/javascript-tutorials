import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ value }) => {
  return <li className="size4 output" title={value}>{value}</li>;
};

Display.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Display.defaultProps = {
  value: 0
};

export default Display;
