import { useState } from 'react';
import { useSelector } from 'react-redux';
import { currCalendar } from '../../store/modules/calendar';
import getThisWeek from '../../utils/getThisWeek';
import { WeeklyContainer } from './Weekly.style';
import WeeklyItem from './WeeklyItem';

const Weekly = () => {
  const { days } = useSelector(currCalendar);
  const [weekDays, setWeekDays] = useState(getThisWeek(days));
  return (
    <WeeklyContainer>
      {weekDays.map((d) => (
        <WeeklyItem key={d.date} day={d} />
      ))}
    </WeeklyContainer>
  );
};

export default Weekly;
