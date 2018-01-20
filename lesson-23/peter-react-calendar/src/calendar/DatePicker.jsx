import React, { Component } from "react";
import DatePickerHeader from "./DatePickerHeader";
import DatePickerBody from "./DatePickerBody";
import moment from "moment";
import propTypes from 'prop-types';

class DatePicker extends Component {
  static propTypes = {
    date: propTypes.object,
    start: propTypes.object,
    onShowPicker: propTypes.func,
    onChange: propTypes.func,
    onAdjustMonth: propTypes.func
  };
  constructor(props) {
    super(props)
  }

  handleSelectDate = date => {
    this.props.onChange(date)
  };

  handleAdjustMonth = adjust => {
    this.props.onAdjustMonth(adjust)
  }

  handleShowPicker = (e, type) => {
    e.preventDefault()
    this.props.onShowPicker(type)
  }

  render() {
    const { start, selected } = this.props;
    return (
      <div className="datepiicker col-md-6">
        <div className="datepicker-days" style={{ display: "block" }}>
          <table className="table-condensed">
            <DatePickerHeader 
              start = {start}
              onForward = {() => this.handleAdjustMonth(1)}
              onBackward = {() => this.handleAdjustMonth(-1)}
              onShowYearPicker = {(e) => this.handleShowPicker(e, 'year')}
              onShowMonthPicker = {(e) => this. handleShowPicker(e, 'month')}
            />
            <DatePickerBody
              onSelectDate = {this.handleSelectDate}
              start = {start}
              selected = {selected}
            />
          </table>
        </div>
      </div>
    );
  }
}

export default DatePicker;
