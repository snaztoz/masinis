import VStack from '../VStack';
import { LuLayoutPanelTop } from 'react-icons/lu';

function TabDefaultView() {
  return (
    <VStack
      className="h-full gap-4 justify-center items-center dark:text-neutral-500
        select-none"
    >
      <div className="text-7xl">
        <LuLayoutPanelTop />
      </div>

      <h1 className="text-xl font-medium">No opened tab</h1>
    </VStack>
  );
}

export default TabDefaultView;
