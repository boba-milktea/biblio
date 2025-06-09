import type { ReactNode } from 'react';

interface ButtonPropTypes {
  children: ReactNode;
  disabled?: boolean;
  to?: string;
  type?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, disabled, onClick, type }: ButtonPropTypes) => {
  let styles =
    'inline-block bg-accent text-surface px-2 py-2 hover:bg-primary rounded-md';
  if (type === 'small') {
    styles =
      'w-6 h-6 inline-block bg-accent text-surface hover:bg-primary rounded-full md:w-8 md:h-8';
  }

  if (type === 'btn-link') {
    styles = 'text-amber-900 hover:underline';
  }

  return (
    <button onClick={onClick} disabled={disabled} className={styles}>
      {children}
    </button>
  );
};

export default Button;
