import HeaderMenu from './HeaderMenu';
import useMenu from '../../../hooks/useMenu';
import { MdMoreVert } from 'react-icons/md';
import { useRef } from 'react';

interface Props {
  title: string;
}

function Header({ title }: Props) {
  const menuTogglerRef = useRef<HTMLDivElement>(null);
  const { isMenuShown, menuPosition, setMenuPosition, openMenu, closeMenu } =
    useMenu();

  function handleMenu(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    e.stopPropagation();

    const togglerPosition = menuTogglerRef.current?.getBoundingClientRect();
    const x = togglerPosition!.right;
    const y = togglerPosition!.bottom;

    setMenuPosition({ x, y });
    openMenu();
  }

  return (
    <>
      <header className="flex justify-between px-4">
        <h2 className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
          {title}
        </h2>

        <div ref={menuTogglerRef} className="relative flex items-center">
          <button
            className="text-neutral-400 hover:text-neutral-500
              dark:hover:text-neutral-300"
            onClick={handleMenu}
          >
            <MdMoreVert />
          </button>
        </div>
      </header>

      <HeaderMenu
        position={menuPosition}
        isShown={isMenuShown}
        handleClose={closeMenu}
      />
    </>
  );
}

export default Header;
