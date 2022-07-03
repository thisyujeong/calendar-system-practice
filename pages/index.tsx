import { useEffect } from 'react';
import { getSession, useSession } from 'next-auth/react';
import LayoutContianer from '../components/layout/Container';
import Weekly from '../components/weekly/Weekly';
import axios from 'axios';
import type { InferGetStaticPropsType } from 'next';

const Home = ({ tasks }: InferGetStaticPropsType<typeof getServerSideProps>) => {
  console.log('tasks', tasks);
  useEffect(() => {}, []);
  return (
    <LayoutContianer>
      <Weekly />
    </LayoutContianer>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api/tasks');
  const tasks = data.data;
  return {
    props: { tasks },
  };
};

export default Home;
