import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import NavItems from './NavItems';
import User from '../features/user/User';
import logo from '../assets/logo.png';
import { useState } from 'react';
import SearchBooks from '../features/books/SearchBooks';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" flex relative justify-between p-4 items-center bg-surface text-text">
      <Link className="mx-2" to="/">
        <img className="w-24 md:w-34 lg:w-40" src={logo} alt="logo" />
      </Link>
      <SearchBooks />

      <nav className="hidden md:flex font-bold font-inter gap-2 md:gap-4 xl:gap-8 md:text-xl lg:text-2xl xl:text-3xl">
        <NavItems />
      </nav>

      <RxHamburgerMenu
        className="md:hidden size-[2em] cursor-pointer mr-4"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
        role="botton"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setIsOpen((prev) => !prev)}
      />

      {isOpen && (
        <div className="md:hidden absolute w-full h-[12em] bg-border right-[0.02em] top-16 z-10">
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
