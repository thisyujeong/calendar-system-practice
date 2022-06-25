import React, { useEffect, useState } from 'react';
import { Days } from '../../index';
import { dayOfWeekEn } from '../../utils/dayOfWeek';
import WeeklyInput from './WeeklyInput';
import {
  WeekItemContainer,
  WeekItemHeader,
  WeekItemDate,
  WeekItemDay,
  WeekItemBody,
  WeeklyList,
} from './WeeklyItem.style';

type WeeklyItemProps = {
  day: Days;
};

const WeekItem = ({ day }: WeeklyItemProps) => {
  const [inputArr, setInputArr] = useState<{ text: string }[]>([{ text: '' }]);
  const [focusTarget, setFocusTarget] = useState(-1);

  const onClickBody = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (inputArr.length !== 1) {
      addInputHandler();
    } else {
      setFocusTarget(0);
    }
  };

  const addInputHandler = () => {
    setInputArr(inputArr.concat({ text: '' }));
    setFocusTarget(focusTarget + 1);
  };

  const removeInputHandler = (index: number) => {
    inputArr.splice(index, 1);
    setFocusTarget(focusTarget - 1);
  };

  useEffect(() => {});

  return (
    <WeekItemContainer>
      <WeekItemHeader isToday={day.isToday ? true : false}>
        <WeekItemDate>{day.date}</WeekItemDate>
        <WeekItemDay>{dayOfWeekEn[day.day]}</WeekItemDay>
      </WeekItemHeader>
      <WeekItemBody>
        <WeeklyList onClick={onClickBody}>
          {inputArr.map((input, i) => (
            <WeeklyInput
              key={i}
              index={focusTarget}
              addInputHandler={addInputHandler}
              removeInputHandler={removeInputHandler}
              focusable={focusTarget === i ? true : false}
            />
          ))}
        </WeeklyList>
      </WeekItemBody>
    </WeekItemContainer>
  );
};

export default WeekItem;
