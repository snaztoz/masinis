import OverlayMenuBox from "./OverlayMenuBox";
import { closeOverlayMenu } from "../slices/overlay_menu";
import { useAppDispatch, useAppSelector } from "../hooks/store";

function OverlayMenu() {
  const isOverlayMenuOpened = useAppSelector(s => s.overlayMenu.isOpened);

  const dispatch = useAppDispatch();

  return (
    <>
      {isOverlayMenuOpened && (
        <div
          className="absolute left-0 top-0 right-0 bottom-0 z-10 w-full h-full
            select-none overflow-clip"
          onClick={() => dispatch(closeOverlayMenu())}
          onContextMenu={(e) => {
            e.preventDefault();
            e.stopPropagation();

            dispatch(closeOverlayMenu());
          }}
        >
          <OverlayMenuBox />
        </div>
      )}
    </>
  );
}

export default OverlayMenu;
