import { HeaderContainer, HeaderTitle, HeaderToolbar, Profile } from './Header.style';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Weekple</HeaderTitle>
      <HeaderToolbar>
        <Profile></Profile>
      </HeaderToolbar>
    </HeaderContainer>
  );
};

export default Header;
