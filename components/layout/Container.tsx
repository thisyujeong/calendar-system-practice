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
        <h1>aside</h1>
      </Aside>
      <Content>
        <Header />
        <Main>{children}</Main>
      </Content>
    </Container>
  );
};

export default LayoutContianer;
