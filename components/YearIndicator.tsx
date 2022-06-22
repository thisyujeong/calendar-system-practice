import { useSelector } from 'react-redux';
import { currCalendar } from '../store/modules/calendar';
import convertDate from '../utils/convertDate';
import { IndicatorContainer, YearText } from './YearIndicator.style';

const YearIndicator = () => {
  const calendar = useSelector(currCalendar);
  const { month, year } = convertDate(calendar.fullDate);

  return (
    <IndicatorContainer>
      <YearText>{`${month} ${year}`}</YearText>
    </IndicatorContainer>
  );
};

export default YearIndicator;
