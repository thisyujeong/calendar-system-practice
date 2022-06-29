import { signIn, signOut, useSession } from 'next-auth/react';
import { HeaderContainer, HeaderToolbar, Group, LoginBtn } from './Header.style';
import CalendarHeading from '../CalendarHeading';
import ThemeToggle from '../ThemeToggle';
import Profile from '../Profile';
const Header = () => {
  const { data: session } = useSession();
  console.log(typeof session?.user?.image);
  return (
    <HeaderContainer>
      <HeaderToolbar>
        <CalendarHeading />
        <Group>
          <ThemeToggle />
          {!session && (
            <LoginBtn>
              <a
                href={'/api/auth/signin'}
                onClick={(e) => {
                  e.preventDefault();
                  signIn('google');
                }}
              />
            </LoginBtn>
          )}
          {session?.user && (
            <>
              <Profile image={session.user.image!} name={session.user.name!} />
              <a
                href={'/api/auth/signout'}
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                로그아웃
              </a>
            </>
          )}
        </Group>
      </HeaderToolbar>
    </HeaderContainer>
  );
};

export default Header;
