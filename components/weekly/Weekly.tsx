import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { currCalendar } from '../../store/modules/calendar';
import { WeeklyContainer } from './Weekly.style';
import { Task } from '../../models/Task';
import dynamic from 'next/dynamic';
import getThisWeek from '../../utils/getThisWeek';

const WeeklyItem = dynamic(() => import('./WeeklyItem'), {
  ssr: false,
});

interface TasksProps {
  tasks: Task | null;
}

const Weekly = ({ tasks }: TasksProps) => {
  const { days } = useSelector(currCalendar);
  const [weekDays, setWeekDays] = useState(getThisWeek(days));

  useEffect(() => {
    setWeekDays(getThisWeek(days));
    console.log(tasks);
  }, [days, tasks]);

  return (
    <WeeklyContainer>
      {weekDays.map((d) => (
        <WeeklyItem key={d.date} day={d} />
      ))}
    </WeeklyContainer>
  );
};

export default Weekly;
