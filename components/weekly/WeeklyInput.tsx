import { useCallback, useEffect, useRef, useState } from 'react';
import { WeeklyInputBox } from './WeeklyInput.style';

type WeeklyInpuProps = {
  index: number;
  focusable: boolean;
  addInputHandler: () => void;
  removeInputHandler: (index: number) => void;
};

const WeeklyInput = ({
  index,
  focusable,
  addInputHandler,
  removeInputHandler,
}: WeeklyInpuProps) => {
  const [inputText, setInputText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);

  const onBlurInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (inputText === '') removeInputHandler(index);
    },
    [index, inputText, removeInputHandler]
  );

  const onKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === 'Enter' && inputText !== '') {
        addInputHandler();
      }
    },
    [addInputHandler, inputText]
  );

  useEffect(() => {
    if (focusable) inputRef.current?.focus();
  }, [focusable]);

  return (
    <WeeklyInputBox>
      <input
        type="text"
        ref={inputRef}
        onChange={onChangeInput}
        onKeyPress={onKeyPress}
        onBlur={onBlurInput}
      />
    </WeeklyInputBox>
  );
};

export default WeeklyInput;
