import { Adapters } from '../libs/adapters';
import { ReactNode } from 'react';

interface Props {
  dangerous?: boolean;
  children: ReactNode;
  handleClick?: () => void;
}

function OverlayMenuItem({ dangerous, children, handleClick }: Props) {
  const { cn } = Adapters;

  return (
    <button
      className={cn(
        'px-3',
        'py-1',
        'text-left',
        'rounded',
        'hover:bg-neutral-300',
        'dark:hover:bg-neutral-700',
        { 'text-red-400': dangerous }
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default OverlayMenuItem;
