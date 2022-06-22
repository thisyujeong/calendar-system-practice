import { useSelector } from 'react-redux';
import { currCalendar } from '../store/modules/calendar';
import { dayOfWeekKo } from '../utils/dayOfWeek';
import { CalendarContainer } from './Calendar.style';

const Calendar = () => {
  const { days } = useSelector(currCalendar);
  console.log(days);
  return (
    <CalendarContainer>
      <table>
        <thead>
          <tr>
            {dayOfWeekKo.map((day, i) => (
              <th key={i}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </CalendarContainer>
  );
};

export default Calendar;
