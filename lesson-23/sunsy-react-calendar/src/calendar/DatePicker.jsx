import React, { Component } from 'react';

class DatePicker extends Component {
	render() {
		return (
			<div className='datepicker col-md-6'>
				<div className='datepicker-days' style={{display: 'block'}}>
					<table className='table-condensed'>
						<DatePickerHeader />
						<DatePickerBody />
					</table>
				</div>
			</div>
		);
	}
}

export default DatePicker;