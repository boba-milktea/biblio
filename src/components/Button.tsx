import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonPropTypes {
  children: ReactNode;
  disabled?: boolean;
  to?: string;
  onClick?: () => void;
}

const Button = ({ children, disabled, to, onClick }: ButtonPropTypes) => {
  const className = 'inline-block bg-amber-500';

  if (to) return <Link to={to}>{children}</Link>;

  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
