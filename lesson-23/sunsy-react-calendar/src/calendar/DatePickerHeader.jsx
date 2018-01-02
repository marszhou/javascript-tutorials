import React, { Component } from 'react';

class DatePickerHeader extends Component {
	render() {
		return (
			<thead>
				<tr>
					<th className="prev" data-action="previous">
						<span
							className="glyphicon glyphicon-chevron-left"
							title="Previous Month"
						/>
					</th>
					<th
						className="picker-switch"
						data-action="pickerSwitch"
						colSpan={5}
						title="Select Month"
					>
						<a href=''>December</a> <a href=''>2017</a>
					</th>
					<th className="next" data-action="next">
						<span
							className="glyphicon glyphicon-chevron-right"
							title="Next Month"
						/>
					</th>
				</tr>
				<tr>
				<th className="dow">Su</th>
					<th className="dow">Mo</th>
					<th className="dow">Tu</th>
					<th className="dow">We</th>
					<th className="dow">Th</th>
					<th className="dow">Fr</th>
					<th className="dow">Sa</th>
				</tr>
			</thead>
		);
	}
}

export default DatePickerHeader;