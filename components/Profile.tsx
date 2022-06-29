import Image from 'next/image';
import { ProfileContainer } from './Profile.style';

type ProfileProps = {
  image: string;
  name: string;
};

const Profile = ({ image, name }: ProfileProps) => {
  return (
    <ProfileContainer>
      <Image src={image} alt={`${name}님의 프로필 이미지`} layout="fill" />
    </ProfileContainer>
  );
};

export default Profile;
