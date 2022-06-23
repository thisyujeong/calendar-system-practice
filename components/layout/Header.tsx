import CalendarHeading from '../CalendarHeading';
import { HeaderContainer, HeaderToolbar, Profile } from './Header.style';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderToolbar>
        <CalendarHeading />
        <Profile></Profile>
      </HeaderToolbar>
    </HeaderContainer>
  );
};

export default Header;
