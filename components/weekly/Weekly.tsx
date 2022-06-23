import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currCalendar, selectDate } from '../../store/modules/calendar';
import { dayOfWeekEn } from '../../utils/dayOfWeek';
import getThisWeek from '../../utils/getThisWeek';
import { WeeklyContainer } from './Weekly.style';
import WeeklyItem from './WeeklyItem';

const Weekly = () => {
  const { days } = useSelector(currCalendar);
  const [weekDays, setWeekDays] = useState(getThisWeek(days));
  console.log(weekDays);
  return (
    <WeeklyContainer>
      {weekDays.map((d) => (
        <WeeklyItem key={d.date} day={d} />
      ))}
    </WeeklyContainer>
  );
};

export default Weekly;
