import MenuContent from './MenuContent';
import MenuContext from './MenuContext';
import MenuGroup from './MenuGroup';
import MenuItem from './MenuItem';
import MenuTrigger from './MenuTrigger';
import { HTMLAttributes, useState } from 'react';

interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  asContextMenu?: boolean;
}

/**
 * Menu component that can be used as a simple dropdown menu
 * (statically positioned) or as a context menu (right-click,
 * dynamically positioned based on the click position).
 */
function Menu({ asContextMenu = false, children, ...props }: MenuProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  function toggleOpen() {
    setIsOpened((previousState) => !previousState);
  }

  return (
    <MenuContext.Provider
      value={{
        asContextMenu,
        position,
        isOpened,
        setIsOpened,
        toggleOpen,
        setPosition,
      }}
    >
      <div {...props} className="relative">
        {children}
      </div>
    </MenuContext.Provider>
  );
}

Menu.Trigger = MenuTrigger;
Menu.Content = MenuContent;
Menu.Item = MenuItem;
Menu.Group = MenuGroup;

export default Menu;
