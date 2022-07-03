import { signIn, useSession } from 'next-auth/react';
import {
  HeaderContainer,
  HeaderToolbar,
  HeaderGroup,
  HeaderLoginBtn,
  HeaderProfileBox,
  HeaderProfile,
} from './Header.style';
import CalendarHeading from '../Calendar/CalendarHeading';
import ThemeToggle from '../ThemeToggle';
import ProfileLayer from '../ProfileLayer';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { authLogin, authLogout } from '../../store/modules/auth';
import { RootState } from '../../store';

const Header = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const [isOpenLayer, setIsOpenLayer] = useState<boolean>(false);

  useEffect(() => {
    if (session) dispatch(authLogin(session.user as RootState));
    else dispatch(authLogout());
  }, [dispatch, session]);

  const onClickLayerHandler = () => {
    setIsOpenLayer(!isOpenLayer);
  };

  return (
    <HeaderContainer>
      <HeaderToolbar>
        <CalendarHeading />
        <HeaderGroup>
          <ThemeToggle />
          {!session && (
            <HeaderLoginBtn>
              <a
                href={'/api/auth/signin'}
                onClick={(e) => {
                  e.preventDefault();
                  signIn('google');
                }}
              />
            </HeaderLoginBtn>
          )}
          {session?.user && (
            <HeaderProfileBox>
              <HeaderProfile onClick={onClickLayerHandler}>
                <Image
                  src={session.user.image!}
                  alt={`${session.user.name!}님의 프로필 이미지`}
                  layout="fill"
                />
              </HeaderProfile>
              {isOpenLayer && <ProfileLayer onClickLayer={onClickLayerHandler} />}
            </HeaderProfileBox>
          )}
        </HeaderGroup>
      </HeaderToolbar>
    </HeaderContainer>
  );
};

export default Header;
