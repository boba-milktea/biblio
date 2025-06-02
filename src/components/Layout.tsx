import CartOverview from '../features/cart/CartOverview';
import Footer from './Footer';
import Header from './Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Loading from './Loading';

const Layout = () => {
  // useNavigaton returns the current navigation. Good for rendering pending UI
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="flex flex-col h-screen">
      <Header />
      {isLoading && <Loading />}
      <main className="grow-1">
        <Outlet />
        <CartOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
