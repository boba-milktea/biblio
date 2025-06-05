import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import { RxHamburgerMenu } from 'react-icons/rx';
import NavItems from './NavItems';
import User from '../features/user/User';
import logo from '../assets/logo.png';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" flex justify-between py-4 items-center bg-surface text-text text-md">
      <Link className="mx-2" to="/">
        <img className="w-24 md:w-34" src={logo} alt="logo" />
      </Link>
      <SearchOrder />
      <nav className="hidden md:flex font-bold font-inter text-md gap-2 md:gap-4 xl:gap-8 md:text-xl xl:text-2xl">
        <NavItems />
      </nav>

      <RxHamburgerMenu
        className="md:hidden size-[2em] cursor-pointer mr-2"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
        role="botton"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setIsOpen((prev) => !prev)}
      />

      {isOpen && (
        <div className="md:hidden absolute w-full h-[12em] bg-border top-16 z-10">
          <nav className="flex flex-col items-end font-bold uppercase text-md gap-4 p-4">
            <NavItems onClick={() => setIsOpen(false)} />
          </nav>
        </div>
      )}
      <User />
    </header>
  );
};

export default Header;
