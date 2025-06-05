import CreateUser from '../features/user/CreateUser';
import { useAppSelector } from '../hooks';
import Slideshow from './Slideshow';

const Home = () => {
  const username = useAppSelector((state) => state.user.username);

  return (
    <div className="mt-8 flex flex-col items-center">
      <h1 className="text-2xl lg-3xl">Biblio | Your favorite book shop</h1>
      {!username && <CreateUser />}
      <Slideshow />
    </div>
  );
};

export default Home;
