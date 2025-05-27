import CartOverview from '../features/cart/CartOverview';
import Footer from './Footer';
import Header from './Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Loading from './Loading';

const Layout = () => {
  const navigation = useNavigation();

  return (
    <div className="grid h-100">
      <Header />
      {navigation.state === 'loading' && <Loading />}
      <main>
        <Outlet />
        <CartOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
