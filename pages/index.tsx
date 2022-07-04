import LayoutContianer from '../components/layout/Container';
import Weekly from '../components/weekly/Weekly';
import axios from 'axios';
import { RootState } from '../store';
import { getSession } from 'next-auth/react';
import { Task } from '../models/Task';
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

const Home = ({ tasks }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <LayoutContianer>
      <Weekly tasks={tasks} />
    </LayoutContianer>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const session = (await getSession(ctx)) as RootState;
  if (session) {
    const { user } = session;
    const { data } = await axios.get('http://localhost:3000/api/tasks');
    const { data: t } = data;
    const tasks = t.filter((task: Task) => task.uid === user.email);
    console.log('render');

    return {
      props: {
        tasks,
      },
    };
  }

  return {
    props: {
      tasks: null,
    },
  };
};

export default Home;
