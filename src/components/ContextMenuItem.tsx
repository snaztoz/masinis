import { ReactNode } from "react";
import { cn } from "../libs/classnames";

interface Props {
  isDanger?: boolean
  children: ReactNode
}

function ContextMenuItem({ isDanger, children }: Props) {
  return (
    <button
      className={cn("px-3", "py-1", "text-left", "rounded",
        "hover:bg-neutral-300", "dark:hover:bg-neutral-700",
        { "text-red-400": isDanger }
      )}
    >
      {children}
    </button>
  );
}

export default ContextMenuItem;
