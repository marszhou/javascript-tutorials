import moment from 'moment';
import _ from 'lodash';

export function getWeeksForDateBody(time /*moment object*/){
  const weeks = [];
  const startOfMonth = moment(time).startOf('month');
  const dayOfWeek = moment(startOfMonth).isoWeekday();
  let startDateOfDateBody = null;
  if(dayOfWeek < 7){
    startDateOfDateBody = moment(startOfMonth).subtract(dayOfWeek, 'day')
  }else{
    startDateOfDateBody = moment(startOfMonth)
  }
  let i = 0;
  [...Array(6)].forEach(() => {
    const week = []
    [...Array(7)].forEach(() => {
      week.push(startDateOfDateBody)
      i++
    })
    weeks.push(week)
  })
  return weeks;
}