import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Days } from '../../index';
import { dayOfWeekEn } from '../../utils/dayOfWeek';
import {
  WeeklyItemContainer,
  WeeklyItemHeader,
  WeeklyItemDate,
  WeeklyItemDay,
  WeeklyItemBody,
  WeeklyList,
  WeeklyInputBox,
} from './WeeklyItem.style';

type WeeklyItemProps = {
  day: Days;
};

type InputData = {
  text: string;
  type: string;
};
const WeekItem = ({ day }: WeeklyItemProps) => {
  const [inputData, setInputData] = useState<InputData[]>([{ text: '', type: 'input' }]);
  const [focusId, setFocusId] = useState(0);
  const [inputText, setInputText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickBody = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    inputRef.current?.focus();
  }, []);

  const addInputHandler = useCallback(() => {
    setInputData(inputData.concat({ text: '', type: 'input' }));
    setFocusId(focusId + 1);
  }, [focusId, inputData]);

  const removeInputHandler = useCallback(() => {
    inputData.splice(focusId, 1);
    setFocusId(focusId - 1);
  }, [focusId, inputData]);

  const onChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);

  const onBlurInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {}, []);

  const onKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === 'Enter' && inputText !== '') {
        inputData[focusId] = { text: inputText, type: 'item' };
        addInputHandler();
        setInputText('');
      }
    },
    [focusId, inputData, inputText, addInputHandler]
  );

  return (
    <WeeklyItemContainer>
      <WeeklyItemHeader isToday={day.isToday ? true : false}>
        <WeeklyItemDate>{day.date}</WeeklyItemDate>
        <WeeklyItemDay>{dayOfWeekEn[day.day]}</WeeklyItemDay>
      </WeeklyItemHeader>
      <WeeklyItemBody>
        <WeeklyList onClick={onClickBody}>
          {inputData.map((data, i) => (
            <WeeklyInputBox key={i}>
              <>
                {data.type === 'input' ? (
                  <input
                    type="text"
                    ref={inputRef}
                    onChange={onChangeInput}
                    onKeyPress={onKeyPress}
                    onBlur={onBlurInput}
                    autoFocus
                  />
                ) : (
                  <div>
                    <span>{data.text}</span>
                  </div>
                )}
              </>
            </WeeklyInputBox>
          ))}
        </WeeklyList>
      </WeeklyItemBody>
    </WeeklyItemContainer>
  );
};

export default WeekItem;
