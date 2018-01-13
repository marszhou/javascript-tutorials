import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MonthPicker extends Component {
  static propTypes = {
    onSelect: PropTypes.func,
    onReturn: PropTypes.func
  }

  render() {
    const {onSelect, onReturn} = this.props;
    
    return (
      <div className="datepicker-months" style={{ display: 'block' }}>
        <table className="table-condensed">
          <thead>
            <tr>
              <th
                className="picker-switch"
                data-action="pickerSwitch"
                title="Select Year"
              >
                <a href="#" onClick={onReturn}>
                  返回
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {
                  [...Array(12)].map(
                    (_, i) => (
                      <span
                        key={i}
                        data-action="selectMonth"
                        className="month"
                        onClick={() => onSelect(i)}
                      >
                        {i+1}月
                      </span>
                    )
                  )
                }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MonthPicker;