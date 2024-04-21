import { cn } from "../libs/classnames";
import ProjectExplorerView from "./ProjectExplorerView";
import { createElement, useState } from "react";

type ViewId = "project-explorer";

const views = {
  "project-explorer": ProjectExplorerView,
};

function PrimarySideBar() {
  const [activeViewId, setActiveViewId] = useState<ViewId | null>(null);

  function toggleView(viewName: ViewId) {
    if (viewName === activeViewId) {
      setActiveViewId(null);
      return;
    }
    setActiveViewId(viewName);
  }

  return (
    <div className="flex">
      {activeViewId && (
        <div
          className="py-2 border-r border-neutral-300 dark:border-neutral-800
            w-72 lg:w-80 select-none"
        >
          {/* without using JSX because the view is dynamically selected */}
          {createElement(views[activeViewId])}
        </div>
      )}

      <nav className="p-2 flex flex-col gap-2 text-neutral-400">
        {Object.entries(views).map(([viewId, viewProperties]) => (
          <div
            key={viewId}
            className="group relative"
          >
            <span
              className="hidden group-hover:block px-2 py-0.5 w-fit absolute
                top-1/4 right-[110%] rounded text-nowrap text-xs font-medium
                text-neutral-100 dark:text-neutral-300 bg-neutral-400
                dark:bg-neutral-600 select-none"
            >
              {viewProperties.title}
            </span>
            <button
              key={viewId}
              className={cn("p-2", "rounded-full", "text-2xl",
                "hover:text-neutral-500", "dark:hover:text-neutral-300",
                { "text-neutral-500 dark:text-neutral-300": viewId === activeViewId }
              )}
              onClick={() => toggleView(viewId as ViewId)}
            >
              {viewProperties.icon}
            </button>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default PrimarySideBar;
