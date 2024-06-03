import MenuContext from './MenuContext';
import cn from 'classnames';
import { HTMLAttributes, useContext } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  align?: string;
}

/**
 * The real menu content box component.
 */
function MenuContent({
  align = 'right',
  className,
  children,
  ...props
}: Props) {
  const { asContextMenu, position, isOpened } = useContext(MenuContext);

  const alignmentClasses = cn(
    'w-48 md:w-64 lg:w-72 absolute z-50 rounded-md shadow-lg',
    {
      'ltr:origin-top-left rtl:origin-top-right start-0':
        align === 'left' && !asContextMenu,
      'ltr:origin-top-right rtl:origin-top-left mt-2 end-0':
        align === 'right' && !asContextMenu,
      'origin-top': !align,
    }
  );

  const mergedContentClasses = cn(
    `w-48 md:w-64 lg:w-72 bg-neutral-100 dark:bg-neutral-800 border border-neutral-300
    dark:border-neutral-700 text-sm rounded`,
    asContextMenu ? 'fixed' : 'absolute',
    className
  );

  /**
   * Calculate box position using raw CSS styles (Tailwind does
   * not support dynamic classes that involves calculation like
   * this).
   *
   * This calculation is **only** used when the menu acting as
   * a context menu.
   */
  function calculatePositionStyles(x: number, y: number) {
    const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

    const xPosExceedingHalfOfWindow = x > windowWidth / 2;
    const yPosExceedingHalfOfWindow = y > windowHeight / 2;

    return {
      top: yPosExceedingHalfOfWindow ? undefined : `${y}px`,
      bottom: yPosExceedingHalfOfWindow ? `${windowHeight - y}px` : undefined,

      left: xPosExceedingHalfOfWindow ? undefined : `${x}px`,
      right: xPosExceedingHalfOfWindow ? `${windowWidth - x}px` : undefined,
    };
  }

  return (
    <>
      {isOpened && (
        <div className={alignmentClasses}>
          <div
            {...props}
            className={mergedContentClasses}
            style={
              asContextMenu
                ? calculatePositionStyles(position[0], position[1])
                : {}
            }
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default MenuContent;
