import CartOverview from '../features/cart/CartOverview';
import Footer from './Footer';
import Header from './Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Loading from './Loading';

const Layout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="grow-1">
        {isLoading && <Loading />}
        <Outlet />
      </main>
      <CartOverview />

      <Footer />
    </div>
  );
};

export default Layout;
