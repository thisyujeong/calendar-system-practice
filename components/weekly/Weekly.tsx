import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { currCalendar } from '../../store/modules/calendar';
import getThisWeek from '../../utils/getThisWeek';
import { WeeklyContainer } from './Weekly.style';

const WeeklyItem = dynamic(() => import('./WeeklyItem'), {
  ssr: false,
});

const Weekly = () => {
  const { days } = useSelector(currCalendar);
  const [weekDays, setWeekDays] = useState(getThisWeek(days));

  useEffect(() => {
    setWeekDays(getThisWeek(days));
  }, [days]);

  return (
    <WeeklyContainer>
      {weekDays.map((d) => (
        <WeeklyItem key={d.date} day={d} />
      ))}
    </WeeklyContainer>
  );
};

export default Weekly;
