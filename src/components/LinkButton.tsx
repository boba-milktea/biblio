import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface LinkBtnPropTypes {
  children: ReactNode;
  to: string;
  style?: string;
}

const LinkButton = ({ style, children, to }: LinkBtnPropTypes) => {
  const navigate = useNavigate();
  let styles = 'text-sm text-amber-900 hover:underline';
  if (style === 'button') {
    styles =
      'inline-block bg-link text-surface p-2 border-2 cursor-pointer hover:bg-primary transition duration-300 ease-in-out rounded-md';
  }
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
    <Link to={to} className={styles}>
      {children}
    </Link>
  );
};

export default LinkButton;
