import React, { Component } from 'react';
import DatePickerHeader from './DatePickerHeader';
import DatePickerBody from './DatePickerBody';
import moment from 'moment';
import PropTypes from 'proptypes';

class DatePicker extends Component {
	static propTypes = {
		date: PropTypes.object, // moment object
		start: PropTypes.object, // moment object
		onShowPicker: PropTypes.func,
		onChange: PropTypes.func,
		onAjustMonth: PropTypes.func,
	}
	constructor(props){
		super(props);
	}

	handleAjustMonth = ajust => {
		this.props.onAjustMonth(ajust);
	}

	handleSelectDate = (date) => {
		this.props.onChange(date);
	}

	handleShowPicker = (e, type) => {
		e.preventDefault();
		this.props.onShowPicker(type);
	}

	render() {
		//const { selected } = this.state
		const { start, date } = this.props;
		return (

			<div className='datepicker-days' style={{display: 'block'}}>
				<table className='table-condensed'>
					<DatePickerHeader 
						start={start}
						onForward={() => this.handleAjustMonth(1)}
						onBackward={() => this.handleAjustMonth(-1)}
						onShowMonthPicker={() => this.handleShowPicker(e, 'month')}
						onShowYearPicker={() => this.handleShowPicker(e, 'year')}
					/>
					<DatePickerBody 
						onSelectDate={this.handleSelectDate}
						start={start}
						selected={date}
					/>
				</table>
			</div>
		);
	}
}

export default DatePicker;