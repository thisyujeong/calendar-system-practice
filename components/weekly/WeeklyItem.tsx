import { Days } from '../../index';
import { dayOfWeekEn } from '../../utils/dayOfWeek';
import {
  WeekItemContainer,
  WeekItemHeader,
  WeekItemDate,
  WeekItemDay,
} from './WeeklyItem.style';

type WeeklyItemProps = {
  day: Days;
};

const WeekItem = ({ day }: WeeklyItemProps) => {
  console.log('asdfasdfa', day);
  return (
    <WeekItemContainer>
      <WeekItemHeader isToday={day.isToday ? true : false}>
        <WeekItemDate>{day.date}</WeekItemDate>
        <WeekItemDay>{dayOfWeekEn[day.day]}</WeekItemDay>
      </WeekItemHeader>
    </WeekItemContainer>
  );
};

export default WeekItem;
