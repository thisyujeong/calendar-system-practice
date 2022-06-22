export default function getCalendar({ current }: { current: Date }) {
  // this month calendar days
  const days = [];

  const today = getNewDate(new Date());
  const todayMonth = today.month;
  const todayDate = today.date;

  const currYear = current.getFullYear();
  const currMonth = current.getMonth();
  const currDate = current.getDate();

  // first & last date of current month
  const firstDate = new Date(currYear, currMonth, 1);
  const lastDate = new Date(currYear, currMonth + 1, 0);

  // first day of current month
  let firstDay = firstDate.getDay();
  let lastDay = lastDate.getDay();

  // preview date for prev month of current month calendar
  if (firstDay !== 0) {
    // last day of prev month
    const lastDateOfPrevMonth = new Date(currYear, currMonth, 0);
    for (let i = firstDay - 1; i >= 0; i--) {
      const year = lastDateOfPrevMonth.getFullYear();
      const month = lastDateOfPrevMonth.getMonth();
      const date = lastDateOfPrevMonth.getDate() - i;
      const fullDate = new Date(year, month, date);

      days.push(date);
    }
  }

  // days of current month
  for (let i = firstDate.getDate(); i <= lastDate.getDate(); i++) {
    days.push(i);
  }

  // preview date for next month of current month calendar
  if (firstDay !== 0) {
    // last day of prev month
    const firstDateOfNextMonth = new Date(currYear, currMonth + 1, 1);
    for (let i = 0; i < 7 - (lastDay + 1); i++) {
      const year = firstDateOfNextMonth.getFullYear();
      const month = firstDateOfNextMonth.getMonth();
      const date = firstDateOfNextMonth.getDate();
      const fullDate = new Date(year, month, date);
      days.push(i + 1);
    }
  }

  return { days, month: currMonth + 1, year: currYear };
}

export function getNewDate(select: Date) {
  const year = select.getFullYear();
  const month = select.getMonth() + 1;
  const date = select.getDate();
  const day = select.getDay();
  const hours = select.getHours();
  const minutes = select.getMinutes();
  const seconds = select.getSeconds();

  return { year, month, date, day, hours, minutes, seconds };
}
