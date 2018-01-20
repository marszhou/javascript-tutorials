import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

class DateCell extends Component {
  static propTypes = {
    date: PropTypes.object,
    mode: PropTypes.oneOf(['new','old','current']),
    today: PropTypes.bool,
    selected: PropTypes.bool,
    weekend: PropTypes.bool,
    onClick: PropTypes.func
  };

  static defaultProps = {
    old: false,
    next: false,
    today: false,
    selected: false
  };
  render() {
    const { date, mode, today, selected, weekend } = this.props
    const classNames = cx({
      next: mode === 'new',
      old: mode === 'old',
      today,
      weekend,
      actinve: selected,
      day: true
    });
    return (
      <td
        data-action="selectDay"
        data-day={date.format("YYYY-MM-DD")}
        className={classNames}
        onClick={this.props.onClick}
      >
        {date.date()}
      </td>
    );
  }
}

export default DateCell;
