import { dayOfWeek } from '../../utils/dayOfWeek';
import { WeeklyContainer } from './Weekly.style';
import WeeklyItem from './WeeklyItem';

const Weekly = () => {
  return (
    <WeeklyContainer>
      {dayOfWeek.map((day) => (
        <WeeklyItem key={day} day={day} />
      ))}
    </WeeklyContainer>
  );
};

export default Weekly;
