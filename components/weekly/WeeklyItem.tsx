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
import axios from 'axios';
import { RootState } from '../../store';

type WeeklyItemProps = {
  day: Days;
};

type InputData = {
  text: string;
  type: string;
  checked: boolean;
};

const WeekItem = ({ day }: WeeklyItemProps) => {
  const [inputData, setInputData] = useState<InputData[]>([
    { text: '', type: 'input', checked: false },
  ]);
  const { data: session } = useSession();
  const [focusId, setFocusId] = useState(0);
  const [inputText, setInputText] = useState<string>('');
  const [isFocus, setFocus] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocus) inputRef.current?.focus();
  }, [isFocus, focusId]);

  const saveData = useCallback(() => {
    if (session && inputText !== '') {
      const { email } = session?.user as RootState;

      axios.post('http://localhost:3000/api/tasks', {
        uid: email,
        date: day.fullDate.toString(),
        text: inputText,
        checked: checked,
      });
    }
  }, [checked, day.fullDate, inputText, session]);

  const onClickBody = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    inputRef.current?.focus();
    setFocus(true);
  }, []);

  const addInputHandler = useCallback(() => {
    setInputData(
      inputData.concat({
        text: '',
        type: 'input',
        checked: false,
      })
    );
    setFocusId(focusId + 1);
  }, [focusId, inputData]);

  const onChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);

  const onBlurInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      saveData();
    },
    [saveData]
  );

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
        saveData();
      }
    },
    [inputText, inputData, focusId, addInputHandler, saveData]
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
