import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DatePicker from './DatePicker'
import MonthPicker from './YearPicker'
import TimePicker from './TimePicker'

import 'bootstrap/dist/css/bootstrap.css'
import './less/style.less'

class CalendarPicker extends Component {
  static propTypes = {
		value: PropTypes.oneOfType([
			PropTypes.number,
			PropTypes.string,
			PropTypes.shape({
				year: PropTypes.number,
				month: PropTypes.number,
				day: PropTypes.number,
				hour: PropTypes.number,
				minute: PropTypes.number,
			})
		]).isRequired,
		format: PropTypes.string,
		locale: PropTypes.string,
		mode: PropTypes.oneOf(['YearPicker', 'MonthPicker', 'DatePicker', 'TimePicker']),
		disableDate: PropTypes.array,
		disableTime: PropTypes.array,
		showTimePicker: PropTypes.bool,
		showHoliday: PropTypes.bool,
		showWeekend: PropTypes.bool,
		startAtSunday: PropTypes.bool,
		onChange:PropTypes.func,
		onClear: PropTypes.func,
	}

	static defaultProps = {
		format: 'YYYYMMDD',
		locale: 'zh-cn',
		mode: 'DatePicker',
		disableDate: [],
		disableTime: [],
		showTimePicker: true,
		showHoliday: true,
		showWeekend: true,
		startAtSunday: true,
		onChange: () => {},
		onClear: () => {},
	}

	constructor(props){
		super(props);
		this.state = {
			show: null,
		};
	}

	render(){
		let otherPicker;
		const {show} = this.state;
		switch(show){
			case 'time':
				otherPicker = <TimePicker />;
				break;
			case 'year':
				otherPicker = <YearPicker />;
				break;
			case 'month':
				otherPicker = <MonthPicker />;
				break;
			default:
				otherPicker = null;
				break;
		}

		return(
			<div
				className="bootstrap-datetimepicker-widget timepicker-sbs"
				style={{display: 'block'}}
			>
				<div className='row'>
					<DatePicker />
					{otherPicker}
				</div>
			</div>
		)
	}
}

export default CalendarPicker