import VStack from '../layouts/VStack';
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
    <VStack
      {...props}
      className="px-1 py-1 border-b last:border-0
        dark:border-neutral-700"
    >
      {children}
    </VStack>
  );
}

export default MenuGroup;
