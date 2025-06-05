import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonPropTypes {
  children: ReactNode;
  disabled?: boolean;
  to?: string;
  type?: string;
  onClick?: () => void;
}

const Button = ({ children, disabled, to, onClick, type }: ButtonPropTypes) => {
  let styles =
    'inline-block bg-accent text-surface px-2 py-1 cursor-pointer hover:bg-primary transition duration-300 ease-in-out rounded-md';
  if (type === 'small') {
    styles =
      'w-6 h-6 inline-block bg-accent text-md text-surface cursor-pointer hover:bg-primary transition duration-300 ease-in-out rounded-full md:w-8 md:h-8';
  }
  if (to) return <Link to={to}>{children}</Link>;

  return (
    <button onClick={onClick} disabled={disabled} className={styles}>
      {children}
    </button>
  );
};

export default Button;
