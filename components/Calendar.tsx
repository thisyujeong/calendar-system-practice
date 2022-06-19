import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectDate } from '../store/modules/calendar';
import { dayOfWeekKo } from '../utils/dayOfWeek';
import { CalendarContainer } from './Calendar.style';

const Calendar = () => {
  const dispatch = useDispatch();

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
