import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import tw from 'tailwind-styled-components';

const Test = tw.h1`
text-3xl font-bold underline
`;

const Home: NextPage = () => {
  return <Test className="text-3xl font-bold underline">Hello world!</Test>;
};

export default Home;
