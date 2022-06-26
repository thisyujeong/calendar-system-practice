import dynamic from 'next/dynamic';
import Calendar from '../Calendar';
import Aside from './Aside';
import { Container, Content, Main } from './Container.style';

type LayoutProps = {
  children: React.ReactNode | undefined;
};

const Header = dynamic(() => import('./Header'), {
  ssr: false,
});

const LayoutContianer = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Aside>
        <Calendar />
      </Aside>
      <Content>
        <Header />
        <Main>{children}</Main>
      </Content>
    </Container>
  );
};

export default LayoutContianer;
