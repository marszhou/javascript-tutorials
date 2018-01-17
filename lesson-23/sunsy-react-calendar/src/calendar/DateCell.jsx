import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class DateCell extends Component {
	static propTyeps = {
		date: PropTypes.object,
		mode: PropTypes.oneOf(['new', 'old', 'current']),
		today: PropTypes.bool,
		selected: PropTypes.bool,
		weekend: PropTypes.bool,
		onClick: PropTypes.func
	}
	static defaultProps = {
		mode: 'current',
		weekend: false,
		today: false,
		selected: false
	}
	render() {
		const {date, mode, today, selected, weekend} = this.props;
		const classNames = cx({
			new: mode==='new',
			old: mode==='old',
			today, 
			weekend,
			active: selected,
			day: true
		})
		return (
			<td
			data-action="selectDay"
			data-day={date.format('YYYY-MM-DD')}
			className={classNames}
			onClick={this.props.onClick}
			>
				{date.date()} 
			</td>
		);
	}
}

export default DateCell;