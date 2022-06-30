import { ProfileLayerContainer, ProfileMaskLayer } from './ProfileLayer.style';
import { signOut } from 'next-auth/react';

type ProfileLayerProps = {
  onClickLayer: () => void;
};
const ProfileLayer = ({ onClickLayer }: ProfileLayerProps) => {
  return (
    <ProfileLayerContainer>
      <ul>
        <li>
          <a
            href={'/api/auth/signout'}
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            로그아웃
          </a>
        </li>
      </ul>
      <ProfileMaskLayer onClick={onClickLayer} />
    </ProfileLayerContainer>
  );
};

export default ProfileLayer;
