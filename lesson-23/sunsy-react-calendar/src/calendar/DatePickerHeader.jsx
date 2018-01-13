import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DatePickerHeader extends Component {
	static propTypes = {
		start: PropTypes.object,
		onForward: PropTypes.func,
		onBackward: PropTypes.func,
		onShowYearPicker: PropTypes.func,
		onShowMonthPicker: PropTypes.func
	}

	render() {
		const {
			start,
			onForward,
			onBackward,
			onShowYearPicker,
			onShowMonthPicker
		} = this.props;
		const month = start.format('M月');
		const year = start.format('YYYY年');

		return (
			<thead>
				<tr>
					{/*向左箭头*/}
					<th className="prev" data-action="previous" onClick={onBackward}>
						<span
							className="glyphicon glyphicon-chevron-left"
							title="Previous Month"
						/>
					</th>
					{/*年月显示*/}
					<th
						className="picker-switch"
						data-action="pickerSwitch"
						colSpan={5}
						title="Select Month"
					>
						<a href="#" onClick={onShowYearPicker}>
							{year}
						</a>
							{' '}
						<a href="#" onClick={onShowMonthPicker}>
							{month}
						</a>
					</th>
					{/*向右箭头*/}
					<th className="next" data-action="next" onClick={onForward}>
						<span
							className="glyphicon glyphicon-chevron-right"
							title="Next Month"
						/>
					</th>
				</tr>
				<tr>
				<th className="dow">日</th>
					<th className="dow">一</th>
					<th className="dow">二</th>
					<th className="dow">三</th>
					<th className="dow">四</th>
					<th className="dow">五</th>
					<th className="dow">六</th>
				</tr>
			</thead>
		);
	}
}

export default DatePickerHeader;