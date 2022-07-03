import { useState } from 'react';
import {
  AsideContainer,
  AsideInner,
  AsideToggle,
  AsideTitle,
  AsideContent,
} from './Aside.style';

type AsideProps = {
  children: React.ReactNode | undefined;
};

const Aside = ({ children }: AsideProps) => {
  const [isAsideOpen, setIsAsideOpen] = useState<boolean>(true);

  return (
    <AsideContainer open={isAsideOpen}>
      <AsideToggle
        open={isAsideOpen}
        onClick={() => {
          setIsAsideOpen(!isAsideOpen);
        }}
      ></AsideToggle>
      <AsideInner open={isAsideOpen}>
        <AsideTitle>Weekply</AsideTitle>
        <AsideContent>{children}</AsideContent>
      </AsideInner>
    </AsideContainer>
  );
};

export default Aside;
