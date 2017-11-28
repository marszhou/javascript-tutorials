import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames'

const Button = ({onClick, value, type, size, children}) => {
  const classNames = {
    key: true,
    [type]: true,
    ["size"+size]: true
  }
  return (
    <li className={cx(classNames)} onClick={() => onClick(type, value)}>{children}</li>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.oneOf(['number', 'operator', 'dot', 'func']).isRequired,
  size: PropTypes.number
};

Button.defaultProps = {
  size: 1
}

export default Button;