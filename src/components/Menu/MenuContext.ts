import { Dispatch, SetStateAction, createContext } from 'react';

const MenuContext = createContext<{
  asContextMenu: boolean;
  position: [number, number];
  isOpened: boolean;
  setPosition: Dispatch<SetStateAction<[number, number]>>;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  toggleOpen: () => void;
}>({
  asContextMenu: false,
  position: [0, 0],
  isOpened: false,
  setPosition: () => {},
  setIsOpened: () => {},
  toggleOpen: () => {},
});

export default MenuContext;
