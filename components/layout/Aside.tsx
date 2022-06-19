import { AsideContainer } from './Aside.style';

type AsideProps = {
  children: React.ReactNode | undefined;
};

const Aside = ({ children }: AsideProps) => {
  return <AsideContainer>{children}</AsideContainer>;
};

export default Aside;
