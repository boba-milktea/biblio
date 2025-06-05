import CreateUser from '../features/user/CreateUser';
import { useAppSelector } from '../hooks';

const Home = () => {
  const username = useAppSelector((state) => state.user.username);
  return (
    <div>
      Looking for a nice book?
      { !username && <CreateUser />}
    </div>
  );
};

export default Home;
