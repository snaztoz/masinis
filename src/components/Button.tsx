import cn from 'classnames';
import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

function Button({ variant = 'primary', children, ...props }: Props) {
  const mergedClassName = cn(`px-3 py-2 rounded-md border`, {
    'bg-pink-600 hover:bg-pink-700 text-pink-50 border-transparent':
      variant === 'primary',
    'text-pink-500 hover:text-pink-50 border-pink-600 hover:bg-pink-600':
      variant === 'secondary',
  });

  return (
    <button className={mergedClassName} {...props}>
      {children}
    </button>
  );
}

export default Button;
