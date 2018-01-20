import React, { Component } from "react";
import DatePickerHeader from "./DatePickerHeader";
import DatePickerBody from "./DatePickerBody";
import moment from "moment";
import propTypes from 'prop-types';

class DatePicker extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      start: moment()
    };
  }

  handleSelectDate = date => {
    this.setState({
      selected: moment(date),
      start: moment(date)
    });
  };

  handleSetpMoveMonth = adjust => {
    const start = moment(this.state.start).add(adjust,'M')
    this.setState({start})
  }

  handleShowYearPicker = () => {

  }

  handleShowMonthPicker = () => {

  }  
  
  render() {
    const { start, selected } = this.state;
    return (
      <div className="datepiicker col-md-6">
        <div className="datepicker-days" style={{ display: "block" }}>
          <table className="table-condensed">
            <DatePickerHeader 
              start = {start}
              onForward = {() => this.handleSetpMoveMonth(1)}
              onBackward = {() => this.handleSetpMoveMonth(-1)}
              onShowYearPicker = {() => this.handleShowYearPicker}
              onShowMonthPicker = {() => this. handleShowMonthPicker}
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
