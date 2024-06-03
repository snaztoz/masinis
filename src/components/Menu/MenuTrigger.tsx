import MenuContext from './MenuContext';
import cn from 'classnames';
import { HTMLAttributes, useContext } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {}

/**
 * Menu opening trigger component.
 *
 * Will respond based on whether its a normal dropdown menu
 * or a context menu.
 */
function MenuTrigger({ className, children, onClick, ...props }: Props) {
  const { asContextMenu, isOpened, setIsOpened, toggleOpen, setPosition } =
    useContext(MenuContext);

  const mergedClassName = cn(`flex items-center h-full`, className);

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!asContextMenu) {
      // Open the menu on normal click
      toggleOpen();
    } else {
      // Run the default onClick handler
      onClick?.(e);
    }
  }

  function handleContextMenu(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (asContextMenu) {
      e.preventDefault();
      e.stopPropagation();

      // Set the position before opening the menu
      setPosition([e.clientX, e.clientY]);
      toggleOpen();
    }
  }

  return (
    <>
      <div
        {...props}
        className={mergedClassName}
        onClick={handleClick}
        onContextMenu={handleContextMenu}
      >
        {children}
      </div>

      {isOpened && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpened(false)}
          onContextMenu={() => setIsOpened(false)}
        ></div>
      )}
    </>
  );
}

export default MenuTrigger;
