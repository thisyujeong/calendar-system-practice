import YearIndicator from '../YearIndicator';
import { HeaderContainer, HeaderToolbar, Profile } from './Header.style';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderToolbar>
        <YearIndicator />
        <Profile></Profile>
      </HeaderToolbar>
    </HeaderContainer>
  );
};

export default Header;
