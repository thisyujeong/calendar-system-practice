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
        <AsideTitle>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 36 36">
            <path
              d="m25.12 4.66h-1.35v-1.66c0-.55-.45-1-1-1s-1 .45-1 1v1.66h-11.55v-1.66c0-.55-.45-1-1-1s-1 .45-1 1v1.66h-1.34c-2.25 0-4.08 1.83-4.08 4.08v17.19c0 2.25 1.83 4.08 4.08 4.08h18.24c2.25 0 4.08-1.83 4.08-4.08v-17.2c-.01-2.25-1.83-4.07-4.08-4.07zm-18.24 2h1.33v1.01c0 .55.45 1 1 1s1-.45 1-1v-1.01h11.55v1.01c0 .55.45 1 1 1s1-.45 1-1v-1.01h1.35c1.14 0 2.08.93 2.08 2.08v4.11h-22.38v-4.12c0-1.14.93-2.07 2.07-2.07zm18.24 21.34h-18.24c-1.14 0-2.08-.93-2.08-2.08v-11.08h22.39v11.09c0 1.14-.93 2.07-2.07 2.07zm-3.68-10.11c.35.42.29 1.05-.13 1.41l-6.06 5.04c-.19.15-.41.23-.64.23-.27 0-.54-.11-.74-.32l-2.52-2.74c-.37-.41-.35-1.04.06-1.41s1.04-.35 1.41.06l1.88 2.04 5.33-4.43c.42-.36 1.05-.3 1.41.12z"
              fill="#2c3e50"
            ></path>
          </svg>
          Weekple
        </AsideTitle>
        <AsideContent>{children}</AsideContent>
      </AsideInner>
    </AsideContainer>
  );
};

export default Aside;
