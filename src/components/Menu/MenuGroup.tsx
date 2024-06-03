import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {}

/**
 * Menu content items grouping component.
 *
 * The menu content box will separate each group using a
 * line separator.
 */
function MenuGroup({ children, ...props }: Props) {
  return (
    <div
      {...props}
      className="px-1 py-1 flex flex-col border-b last:border-0
        dark:border-neutral-700"
    >
      {children}
    </div>
  );
}

export default MenuGroup;
