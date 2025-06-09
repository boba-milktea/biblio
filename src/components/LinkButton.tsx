import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface LinkBtnPropTypes {
  children: ReactNode;
  to: string;
  style?: string;
}

const LinkButton = ({ style, children, to }: LinkBtnPropTypes) => {
  let styles = 'text-amber-900 hover:underline xl:text-2xl';
  if (style === 'button') {
    styles =
      'inline-block bg-link text-surface p-2 border-2 hover:bg-primary rounded-md';
  }

  return (
    <Link to={to} className={styles}>
      {children}
    </Link>
  );
};

export default LinkButton;
