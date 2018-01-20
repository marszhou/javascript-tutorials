import React, { Component } from "react";
import PropTypes from "prop-types";
import DateCell from "./DateCell";
import { getWeeksForDateBody, isWeekend } from "./utils";
import moment from "moment";

class DatePickerBody extends Component {
  static props = {
    start: PropTypes.object,
    selected: PropTypes.object,
    onSelectDate: PropTypes.func
  };

  render() {
    const { start, selected : selectedDate, onSelectDate } = this.props;
    const weeks = getWeeksForDateBody(start);
    const current = moment();
    const compareMonth = start.format("YYYYMM");

    return (
      <tbody>
        {weeks.map((days, i) => (
          <tr key={i}>
            {days.map((day, k) => {
              const compareMonth2 = day.format("YYYYMM");
              const mode =
                compareMonth2 > compareMonth
                  ? 'new'
                  : compareMonth2 < compareMonth ? 'old' : 'current';
              const today = day.format("YYYYMMDD") === current.format("YYYYMMDD");
              const weekend = isWeekend(day);
              const selected = selectedDate
                ? selectedDate.format("YYYYMMDD") === day.format("YYYYMMDD")
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
              );
            })}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default DatePickerBody;
