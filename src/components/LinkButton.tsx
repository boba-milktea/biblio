import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface LinkBtnPropTypes {
  children: ReactNode;
  to: string;
}


const LinkButton = ({ children, to }: LinkBtnPropTypes) => {
  const navigate = useNavigate();
  const className = 'text-sm text-amber-900 hover:underline';

  if (to === '-1')
    return (
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default LinkButton;
