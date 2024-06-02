import { OverlayMenuPosition } from '../contracts/overlay_menu';
import { useState } from 'react';

function useMenu() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [menuPosition, setMenuPosition] = useState<OverlayMenuPosition>({
    x: 0,
    y: 0,
  });

  function openMenu() {
    setIsMenuShown(true);
  }

  function closeMenu() {
    setIsMenuShown(false);
  }

  return { menuPosition, isMenuShown, setMenuPosition, openMenu, closeMenu };
}

export default useMenu;
