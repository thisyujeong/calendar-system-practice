import React, { useEffect, useState, useRef, useCallback } from 'react';
import { dayOfWeekEn } from '../../utils/dayOfWeek';
import { useSession } from 'next-auth/react';
import { Days } from '../../index';
import {
  WeeklyItemContainer,
  WeeklyItemHeader,
  WeeklyItemDate,
  WeeklyItemDay,
  WeeklyItemBody,
  WeeklyList,
  WeeklyInputBox,
  TodoInputItem,
  TodoItemBox,
} from './WeeklyItem.style';

type WeeklyItemProps = {
  day: Days;
};

type InputData = {
  date: string;
  text: string;
  type: string;
  checked: boolean;
};

const WeekItem = ({ day }: WeeklyItemProps) => {
  const [inputData, setInputData] = useState<InputData[]>([
    { date: day.fullDate.toString(), text: '', type: 'input', checked: false },
  ]);
  const [focusId, setFocusId] = useState(0);
  const [inputText, setInputText] = useState<string>('');
  const [isFocus, setFocus] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocus) inputRef.current?.focus();
  }, [isFocus, focusId]);

  const onClickBody = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    inputRef.current?.focus();
    setFocus(true);
  }, []);

  const addInputHandler = useCallback(() => {
    setInputData(
      inputData.concat({
        date: day.fullDate.toString(),
        text: '',
        type: 'input',
        checked: false,
      })
    );
    setFocusId(focusId + 1);
  }, [day.fullDate, focusId, inputData]);

  const onChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);

  const onBlurInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {}, []);

  const onKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === 'Enter' && inputText !== '') {
        inputData[focusId] = {
          ...inputData[focusId],
          text: inputText,
          type: 'item',
        };
        setInputText('');
        addInputHandler();
        setFocus(true);
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
                  <TodoInputItem
                    type="text"
                    ref={inputRef}
                    onChange={onChangeInput}
                    onBlur={onBlurInput}
                    onKeyPress={onKeyPress}
                    autoComplete="none"
                    // autoFocus
                  />
                ) : (
                  <TodoItemBox>
                    <span>{data.text}</span>
                  </TodoItemBox>
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
