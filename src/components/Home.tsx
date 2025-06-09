import CreateUser from '../features/user/CreateUser';
import { useAppSelector } from '../hooks';
import Slideshow from './Slideshow';

const Home = () => {
  const username = useAppSelector((state) => state.user.username);

  return (
    <div className="mt-8 flex flex-col items-center p-4 text-center">
      <h1>Biblio | Your Express Book Shop</h1>
      <p className="my-4 text-xl lg:text-2xl italic">
        Thousands of IT books delivered in one day.
      </p>
      {!username && <CreateUser />}
      <Slideshow />
    </div>
  );
};

export default Home;
