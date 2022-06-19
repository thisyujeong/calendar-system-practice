import { useSelector } from 'react-redux';
import { RootState } from '../store';
import convertDate from '../utils/convertDate';
import { IndicatorContainer, YearText } from './YearIndicator.style';

const YearIndicator = () => {
  const calendar = useSelector((state: RootState) => state.calendar.current);
  console.log();

  return (
    <IndicatorContainer>
      <YearText>
        {convertDate(calendar).month} {convertDate(calendar).year}
      </YearText>
    </IndicatorContainer>
  );
};

export default YearIndicator;
