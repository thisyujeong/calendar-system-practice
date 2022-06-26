import { useDispatch, useSelector } from 'react-redux';
import { currCalendar, selectDate } from '../store/modules/calendar';
import dateFormat from '../utils/dateFormat';
import { CalendarHeadingContainer, HeadingDate, TodayBtn } from './CalendarHeading.style';

const CalendarHeading = () => {
  const dispatch = useDispatch();
  const calendar = useSelector(currCalendar);
  const { month, year } = dateFormat(calendar.fullDate);

  return (
    <CalendarHeadingContainer>
      <HeadingDate>{`${month} ${year}`}</HeadingDate>
      <TodayBtn onClick={() => dispatch(selectDate(new Date().toString()))}>
        Today
      </TodayBtn>
    </CalendarHeadingContainer>
  );
};

export default CalendarHeading;
