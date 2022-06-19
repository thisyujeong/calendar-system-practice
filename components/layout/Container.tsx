import Calendar from '../Calendar';
import Aside from './Aside';
import { Container, Content, Main } from './Container.style';
import Header from './Header';

type LayoutProps = {
  children: React.ReactNode | undefined;
};

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
