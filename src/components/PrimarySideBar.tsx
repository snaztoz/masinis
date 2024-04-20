import { MdOutlineFileOpen, MdOutlineSettings } from "react-icons/md";
import { ReactElement, useState } from "react";

type View = { label: string, icon: ReactElement };
type Views = { "project-explorer": View, "settings": View };
type ViewId = keyof Views;

const views: Views = {
  "project-explorer": {
    label: "Project Explorer",
    icon: <MdOutlineFileOpen />,
  },
  "settings": {
    label: "Settings",
    icon: <MdOutlineSettings />,
  },
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
          className="px-4 py-2 border-r border-neutral-300 dark:border-neutral-800
            min-w-64 select-none"
        >
          <h2 className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
            {views[activeViewId as ViewId].label}
          </h2>
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
              {viewProperties.label}
            </span>
            <button
              key={viewId}
              className={`p-2 rounded-full text-2xl hover:text-neutral-500
                dark:hover:text-neutral-300
                ${viewId === activeViewId ? 'text-neutral-500 dark:text-neutral-300' : ''}`}
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
