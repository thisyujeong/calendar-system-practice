import { ItemContainer, ItemHeader } from './WeeklyItem.style';

type WeeklyItemProps = {
  day: string;
};

const WeekItem = ({ day }: WeeklyItemProps) => {
  return (
    <ItemContainer>
      <ItemHeader>{day}</ItemHeader>
    </ItemContainer>
  );
};

export default WeekItem;
