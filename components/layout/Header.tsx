import CalendarHeading from '../CalendarHeading';
import ThemeToggle from '../ThemeToggle';
import { HeaderContainer, HeaderToolbar, Group, Profile } from './Header.style';
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderToolbar>
        <CalendarHeading />
        <Group>
          <ThemeToggle />
          <Profile></Profile>
        </Group>
      </HeaderToolbar>
    </HeaderContainer>
  );
};

export default Header;
