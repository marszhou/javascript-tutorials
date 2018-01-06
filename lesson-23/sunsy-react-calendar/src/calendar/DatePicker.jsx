import React, { Component } from 'react';
import DatePickerHeader from './DatePickerHeader';
import DatePickerBody from './DatePickerBody';
import moment from 'moment';
import PropTypes from 'proptypes';

class DatePicker extends Component {
	static PropTypes = {
		
	}
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