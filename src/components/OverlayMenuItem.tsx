import { ReactNode } from "react";
import { cn } from "../libs/classnames";

interface Props {
  dangerous?: boolean
  children: ReactNode
}

function OverlayMenuItem({ dangerous, children }: Props) {
  return (
    <button
      className={cn("px-3", "py-1", "text-left", "rounded",
        "hover:bg-neutral-300", "dark:hover:bg-neutral-700",
        { "text-red-400": dangerous }
      )}
    >
      {children}
    </button>
  );
}

export default OverlayMenuItem;
