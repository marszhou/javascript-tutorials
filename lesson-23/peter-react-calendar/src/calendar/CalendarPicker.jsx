import React, { Component } from "react";
import PropTypes from "prop-types";
import DatePicker from "./DatePicker";
import MonthPicker from "./MonthPicker";
import YearPicker from "./YearPicker";
import TimePicker from "./TimePicker";
import "bootstrap/dist/css/bootstrap.css";
import "./less/style.less";
import { getMoment } from "./utils";
import moment from "moment";

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
        minute: PropTypes.number
      }),
      PropTypes.object
    ]).isRequired,
    format: PropTypes.string,
    locale: PropTypes.string,
    mode: PropTypes.oneOf([
      "YearPicker",
      "MonthPicker",
      "DatePicker",
      "TimePicker"
    ]),
    disableDate: PropTypes.array,
    disableTime: PropTypes.array,
    showTimePicker: PropTypes.bool,
    showHoliday: PropTypes.bool,
    showWeekend: PropTypes.bool,
    startAtSunday: PropTypes.bool,
    onChange: PropTypes.func,
    onClear: PropTypes.func
  };

  static defaultProps = {
    format: "YYYYMMDD",
    locale: "zh-cn",
    mode: "DatePicker",
    disableDate: [],
    disableTime: [],
    showTimePicker: true,
    showHoliday: false,
    showWeekend: true,
    startAtSunday: true,
    onChange: () => {},
    onClear: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      show: null,
      start: props.value ? getMoment(props.value) : moment()
    };
  }

  handleChange = newDate => {
    this.setState({
      start: moment(newDate)
    });
    this.props.onChange(newDate);
  };

  handleShowPicker = type => {
    this.setState({
      show: type
    });
  };

  handleAdjustMonth = adjust => {
    const start = moment(this.state.start).add(adjust, "M");
    this.setState({ start });
  };

  handleSelectYear = i => {
    this.setState({
      start: moment(this.state.start).year(i),
      show: "date"
    });
  };

  handleSelectMonth = i => {
    this.setState({
      start: moment(this.state.start).month(i),
      show: "date"
    })
  }

  handleReturn = () => {
    this.setState({
      show: "date"
    });
  };

  renderPicker() {
    const { show, start } = this.state;
    const { value } = this.props;
    const v = getMoment(value);
    switch (show) {
      case "time":
        return <TimePicker />;
        break;
      case "year":
        return (
          <YearPicker
            start={start.year()}
            onSelect={this.handleSelectYear}
            onReturn={this.handleReturn}
          />
        );
        break;
      case "month":
        return (
          <MonthPicker
            onSelect={this.handleSelectMonth}
            onReturn={this.handleReturn}
          />
        );
        break;
      case "date":
      default:
        return (
          <DatePicker
            date={v}
            start={start}
            onShowPicker={this.handleShowPicker}
            onChange={this.handleChange}
            onAdjustMonth={this.handleAdjustMonth}
          />
        );
        break;
    }
  }
  render() {
    return (
      <div
        className="bootstrap-datetimepicker-widget timepicker-sbs"
        style={{ width: 240, display: "block" }}
      >
        <div className="row">
          <div className="datepicker col-md-6">{this.renderPicker()}</div>
        </div>
      </div>
    );
  }
}

export default CalendarPicker;
