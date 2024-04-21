import ContextMenuBox from "./ContextMenuBox";
import { closeContextMenu } from "../slices/context_menu";
import { useAppDispatch, useAppSelector } from "../hooks/store";

function ContextMenu() {
  const isContextMenuOpened = useAppSelector(s => s.contextMenu.isOpened);

  const dispatch = useAppDispatch();

  return (
    <>
      {isContextMenuOpened && (
        <div
          className="absolute left-0 top-0 right-0 bottom-0 z-10 w-full h-full
            select-none overflow-clip"
          onClick={() => dispatch(closeContextMenu())}
          onContextMenu={(e) => {
            e.preventDefault();
            e.stopPropagation();

            dispatch(closeContextMenu());
          }}
        >
          <ContextMenuBox />
        </div>
      )}
    </>
  );
}

export default ContextMenu;
