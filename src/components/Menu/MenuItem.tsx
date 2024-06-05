import MenuContext from './MenuContext';
import cn from 'classnames';
import { ButtonHTMLAttributes, useContext } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isDangerous?: boolean;
  onClickWithCloser?: (
    e: React.MouseEvent<HTMLButtonElement>,
    handleClose: () => void
  ) => void;
}

/**
 * Individual menu content items component.
 */
function MenuItem({
  className = '',
  isDangerous,
  disabled,
  children,
  onClickWithCloser,
  ...props
}: Props) {
  const { setIsOpened } = useContext(MenuContext);

  const mergedClassName = cn(
    `w-full px-3 py-1 text-left rounded`,
    disabled
      ? 'cursor-default brightness-75'
      : 'hover:bg-neutral-300 dark:hover:bg-neutral-700',
    isDangerous ? 'text-red-400' : 'text-neutral-800 dark:text-neutral-300'
  );

  return (
    <button
      {...props}
      className={mergedClassName}
      onClick={(e) => {
        if (!disabled) {
          onClickWithCloser?.(e, () => setIsOpened(false));
        }
      }}
    >
      {children}
    </button>
  );
}

export default MenuItem;
