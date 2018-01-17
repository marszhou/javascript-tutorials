import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DatePicker from './DatePicker'
import MonthPicker from './MonthPicker'
import TimePicker from './TimePicker'
import YearPicker from './YearPicker'
import moment from 'moment'

import 'bootstrap/dist/css/bootstrap.css'
import './less/style.less'

import { getMoment } from './utils'

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
			}),
			PropTypes.object,
		]),
		format: PropTypes.string,
		locale: PropTypes.string,
		mode: PropTypes.oneOf([
			'YearPicker',
			'MonthPicker',
			'DatePicker',
			'TimePicker'
		]),
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
			// show是显示面板类型,year month date time
			show: '',
			// start是App的传入日期，把start格式化成moment对象
			start: props.value ? getMoment(props.value) : moment()
		};
	}

	/* handleChange改变当前组件state的start值，并将newDate传入
	App中state的date。
	*/
	handleChange = newDate => {
		this.setState({
			start: moment(newDate)
		});
		// onChange改变App中state的date值 ???为什么要改变
		this.props.onChange(newDate);
	}

	// 仅改变当前组件的日期状态，月份增加或减少
	handleAjustMonth = adjust => {
		const start = moment(this.state.start).add(adjust, 'M');
		this.setState({ start	});
	}

	// 控制显示面板类型
	handleShowPicker = type => {
		this.setState({
			show: type
		})
	}

	// 选定月份，并返回date面板
	handleSelectMonth = i => {
		this.setState({
			start: moment(this.state.start).month(i),
			show: 'date'
		})
	}

	handleSelectYear = (i) => {
		this.setState({
			start: moment(this.state.start).year(i),
			show: 'date'
		})
	}

	handleReturn = () => {
		this.setState({
			show: 'date'
		})
	}

	renderPicker(){
		const {show, start} = this.state;
		const {value} = this.props;
		const v = getMoment(value);
		switch(show){
			case 'time': 
				return (
		<TimePicker	/>);
			case 'year': 
				return (
					<YearPicker
						start={start.year()}
						onSelect={this.handleSelectYear}
						onReturn={this.handleReturn}
					/>
				);
			case 'month': 
				return (
					<MonthPicker
						onSelect={this.handleSelectMonth}
						onReturn={this.handleReturn}
					/>
				);
			case 'date': 
				return (
					<DatePicker
						date={v}
						start={start}
						onShowPicker={this.handleShowPicker}
						onChange={this.handleChange}
						onAjustMonth={this.handleAjustMonth}
					/>
				);
			default: 
				return (
					<DatePicker
						date={v}
						start={start}
						onShowPicker={this.handleShowPicker}
						onChange={this.handleChange}
						onAjustMonth={this.handleAjustMonth}
					/>
				)
		}
	}

	render(){
		return(
			<div
				className="bootstrap-datetimepicker-widget timepicker-sbs"
				style={{margin: 10, width: 240, display: 'block'}}
			>
				<div className='row'>
					<div className="datepicker">
						{this.renderPicker()}
					</div>
				</div>
			</div>
		)
	}
}

export default CalendarPicker;