import { LuLayoutPanelTop } from 'react-icons/lu';

function TabDefaultView() {
  return (
    <div
      className="h-full flex flex-col gap-5 justify-center items-center
        dark:text-neutral-500 select-none"
    >
      <div className="text-7xl">
        <LuLayoutPanelTop />
      </div>

      <h1 className="text-xl">No opened tab</h1>
    </div>
  );
}

export default TabDefaultView;
