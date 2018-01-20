import moment from "moment";

export function getWeeksForDateBody(time) {
  const weeks = [];
  const startOfMonth = moment(time).startOf();
  const dayOfWeek = startOfMonth.isoWeekday();
  let startOfDatePickerBody = null;
  if (dayOfWeek < 7) {
    startOfDatePickerBody = moment(startOfMonth).subtract(dayOfWeek, "days");
  } else {
    startOfDatePickerBody = moment(startOfMonth);
  }

  let x = 0;
  [...Array(6)].forEach(() => {
    const week = [];
    [...Array(7)].forEach(() =>{
        const day = moment(startOfDatePickerBody).add(x,'day');
        week.push(day);
        ++x;
    })
    weeks.push(week)
  })

  return weeks;
}

export function isWeekend(d) {
  const w = d.isoWeekday()
  return w === 6 || w === 7
}
