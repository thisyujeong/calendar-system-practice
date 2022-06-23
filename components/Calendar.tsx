import React from 'react';
import { useSelector } from 'react-redux';
import { Days } from '../index';
import { currCalendar } from '../store/modules/calendar';
import { dayOfWeekKo } from '../utils/dayOfWeek';
import { CalendarContainer } from './Calendar.style';

const Calendar = () => {
  const { days } = useSelector(currCalendar);
  console.log('# days', days);

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
        <tbody>
          {days.map((day: Days, i: number) => (
            <React.Fragment key={i}>
              {i % 7 === 0 && (
                <tr>
                  {days.slice(i, i + 7).map((d: Days) => (
                    <td
                      key={d.date}
                      data-view={d.isCurrMonth ? true : false}
                      className={d.isToday ? 'today' : ''}
                    >
                      {d.date}
                    </td>
                  ))}
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </CalendarContainer>
  );
};

export default Calendar;
