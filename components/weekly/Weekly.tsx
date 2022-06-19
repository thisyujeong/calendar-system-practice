import { dayOfWeekEn } from '../../utils/dayOfWeek';
import { WeeklyContainer } from './Weekly.style';
import WeeklyItem from './WeeklyItem';

const Weekly = () => {
  return (
    <WeeklyContainer>
      {dayOfWeekEn.map((day) => (
        <WeeklyItem key={day} day={day} />
      ))}
    </WeeklyContainer>
  );
};

export default Weekly;
