import { useState } from "react";

function useMenu() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [menuPosition, setMenuPosition] = useState<[number, number]>([0, 0]);

  function openMenu() {
    setIsMenuShown(true);
  }

  function closeMenu() {
    setIsMenuShown(false);
  }

  return { menuPosition, isMenuShown, setMenuPosition, openMenu, closeMenu };
}

export default useMenu;
