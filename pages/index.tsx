import type { NextPage } from 'next';
import LayoutContianer from '../components/layout/Container';
import Weekly from '../components/weekly/Weekly';

const Home: NextPage = () => {
  return (
    <LayoutContianer>
      <Weekly />
    </LayoutContianer>
  );
};

export default Home;
