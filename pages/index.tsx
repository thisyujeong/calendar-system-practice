import LayoutContianer from '../components/layout/Container';
import Weekly from '../components/weekly/Weekly';
import axios from 'axios';
import type { InferGetStaticPropsType } from 'next';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { Task } from '../models/Task';

const Home = ({ allTasks }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data: session } = useSession();
  const [tasks, setTasks] = useState<Task | null>(null);

  useEffect(() => {
    if (session?.user) {
      const { email } = session.user;
      const t = allTasks.filter((task: Task) => task.uid === email);
      setTasks(t);
    }
  }, [allTasks, session?.user]);

  return (
    <LayoutContianer>
      <Weekly tasks={tasks} />
    </LayoutContianer>
  );
};

export const getStaticProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api/tasks');
  const allTasks = data.data;

  return {
    props: { allTasks },
    revalidate: 1,
  };
};

export default Home;
