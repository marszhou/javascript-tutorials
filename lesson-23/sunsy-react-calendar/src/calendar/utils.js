import moment from 'moment';
import _ from 'lodash';

export function getWeeksForDateBody(time /*moment object*/){
  const weeks = [];
  const startOfMonth = moment(time).startOf('month');
  const dayOfWeek = moment(startOfMonth).isoWeekday();
  let startOfDatePickerBody = null;
  if(dayOfWeek < 7){
    startOfDatePickerBody = moment(startOfMonth).subtract(dayOfWeek, 'day');
  }else{
    startOfDatePickerBody = moment(startOfMonth);
  }
  let i = 0;
  [...Array(6)].forEach(() => {
    const week = [];
    [...Array(7)].forEach(() => {
      const day = moment(startOfDatePickerBody).add(i, 'day');
      week.push(day);
      i++;
    });
    weeks.push(week);
  })
  return weeks;
}

export function isWeekend(day){
  const weekend = day.isoWeekday();
  return weekend ===6 || weekend ===7;
}

export function getMoment(value, format = null){
  if(_.isEmpty(value)) return null;
  if(moment.isMoment(value)) return value;
  if(_.isString(value)) return moment(value, format);
  if(_.isNumber(value)) return moment(value);
  if(_.isObject(value)) return moment(value);
}