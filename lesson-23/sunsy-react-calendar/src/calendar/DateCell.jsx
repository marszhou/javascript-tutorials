import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class DateCell extends Component {
	static propTyeps = {
		date: PropTypes.object,
		old: PropTypes.bool,
		next: PropTypes.bool,
		today: PropTypes.bool,
		selected: PropTypes.bool,
	}
	static defaultProps = {
		old: false,
		next: false,
		today: false,
		selected: false,
	}
	render() {
		const {date, old, next, today, selected} = this.props;
		const classNames = cx({
			date, old, next, today, selected, day: true
		})
		return (
			<td
			data-action="selectDay"
			data-day={date.format('YYYY-MM-DD')}
			className={classNames}
			>
				{date.date()}
			</td>
		);
	}
}

export default DateCell;