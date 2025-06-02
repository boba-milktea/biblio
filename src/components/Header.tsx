import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import User from '../features/user/User';
const logo = '../assets/logo.png';

const Header = () => {
  return (
    <header className="px-4 flex justify-between h-16 items-center bg-surface text-text font-heading font-bold text-md md:text-xl">
      <Link to="/">
        <img className="w-24  md:w-34" src={logo} alt="logo" />
      </Link>
      <SearchOrder />
      <nav className="flex gap-4 md:gap-12">
        <Link to="books">Books</Link>
        <Link to="cart">Cart</Link>
        <Link to="order">Order</Link>
      </nav>
      <User />
    </header>
  );
};

export default Header;
