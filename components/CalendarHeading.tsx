import { useSelector } from 'react-redux';
import { currCalendar } from '../store/modules/calendar';
import dateFormat from '../utils/dateFormat';
import { CalendarHeadingContainer, YearText } from './CalendarHeading.style';

const CalendarHeading = () => {
  const calendar = useSelector(currCalendar);
  const { month, year } = dateFormat(calendar.fullDate);

  return (
    <CalendarHeadingContainer>
      <YearText>{`${month} ${year}`}</YearText>
    </CalendarHeadingContainer>
  );
};

export default CalendarHeading;
