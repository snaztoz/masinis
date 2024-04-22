import { ReactNode } from "react";

interface Props {
  children: ReactNode
}

function OverlayMenuItemGroup({ children }: Props) {
  return (
    <div
      className="px-1 py-1 flex flex-col border-b last:border-0 dark:border-neutral-700">
      {children}
    </div>
  );
}

export default OverlayMenuItemGroup;
