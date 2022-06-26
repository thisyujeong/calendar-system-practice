import { useEffect, useState } from 'react';
import { ToggleContainer, ToggleButton } from './ThemeToggle.style';

const ThemeToggle = () => {
  const [themeMode, setThemeMode] = useState<string>();

  const themeModeHandle = () => {
    setThemeMode(themeMode === 'dark' ? 'light' : 'dark');
  };

  return (
    <ToggleContainer>
      <ToggleButton
        className={themeMode}
        onClick={themeModeHandle}
        data-theme={themeMode}
      ></ToggleButton>
    </ToggleContainer>
  );
};

export default ThemeToggle;
