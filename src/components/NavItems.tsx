import { NavLink } from 'react-router-dom';

const navLinks = [
  {
    label: 'Home',
    to: '/'
  },
  { label: 'Books', to: 'books' },
  { label: 'Cart', to: 'cart' },
  { label: 'Order', to: 'order/new' }
];

const NavItems = ({ onClick }: { onClick?: () => void }) => {
  return (
    <>
      {navLinks.map(({ label, to }) => (
        <NavLink
          key={to}
          to={to}
          onClick={onClick}
          className="transition duration-300 ease-in-out text-text
          hover:text-amber-950 hover:-translate-y-1 hover:underline"
        >
          {label}
        </NavLink>
      ))}
    </>
  );
};

export default NavItems;
