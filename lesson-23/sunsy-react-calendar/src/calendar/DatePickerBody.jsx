import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateCell from './DateCell';
import {getWeeksForDateBody, isWeekend} from './utils';
import moment from 'moment';

class DatePickerBody extends Component {
	static propTypes = {
		start: PropTypes.object, // moment object
		selected: PropTypes.func, // moment object
		onSelectDate: PropTypes.func
	}

	render() {
		const {
			start,
			selected: selectedDate,
			onSelectDate
		} = this.props;
		const weeks = getWeeksForDateBody(start);
		const current = moment();
		const compareMonth = start.format('YYYYMM');

		return (
			<tbody>
				{weeks.map((days, i) => (
					<tr key={i}>
						{days.map((day, k) => {
							// 将日期转换成年月的格式比较大小，确定其显示颜色
							const compareMonth2 = day.format('YYYYMM');
							const mode = 
								compareMonth2 > compareMonth
								? 'new'
								: compareMonth2 < compareMonth ? 'old' : 'current';
							// 每个日期都有today属性，是boolean类型
							const today =
								day.format('YYYYMMDD') ===current.format('YYYYMMDD')
							// 每个日期都有weekend属性，是boolean类型
							const weekend = isWeekend(day);
							// 判断此日期是否是选择的日期
							const selected = selectedDate
								? selectedDate.format('YYYYMMDD') ===day.format('YYYYMMDD')
								: false;
							
						return (
							<DateCell 
								key={k}
								date={day}
								mode={mode}
								today={today}
								weekend={weekend}
								selected={selected}
								onClick={() => onSelectDate(day)}
							/>
						)
						})}
					</tr>
				))}
			</tbody>
		);
	}
}

export default DatePickerBody;