import HStack from '../../../components/layouts/HStack';
import ProjectExplorerView from '../../ProjectExplorerView';
import VStack from '../../../components/layouts/VStack';
import cn from 'classnames';
import { useState } from 'react';

const views = [ProjectExplorerView];

function PrimarySideBar() {
  // default to ProjectExplorerView
  const [activeViewIndex, setActiveViewIndex] = useState<number | null>(0);

  const View = activeViewIndex !== null && views[activeViewIndex];

  function toggleView(i: number) {
    if (i === activeViewIndex) {
      setActiveViewIndex(null);
      return;
    }
    setActiveViewIndex(i);
  }

  return (
    <HStack className="h-full">
      {View && (
        <VStack
          className="h-full w-72 lg:w-80 py-2 border-l border-neutral-300
            dark:border-neutral-800 select-none"
        >
          <View />
        </VStack>
      )}

      <VStack
        className="h-full justify-start p-2 gap-2 border-l border-neutral-300
          dark:border-neutral-700 text-neutral-400"
      >
        {[...views].map((view, i) => {
          const Icon = view.Icon;

          return (
            <div key={i} className="group relative">
              <span
                className="hidden group-hover:block px-2 py-0.5 w-fit absolute
                  top-1/4 right-[110%] rounded text-nowrap text-xs
                  text-neutral-800 dark:text-neutral-300 bg-neutral-300
                  dark:bg-neutral-800 border border-neutral-400
                  dark:border-neutral-700 select-none"
              >
                {view.title}
              </span>
              <button
                key={i}
                className={cn(
                  'p-2',
                  'rounded-full',
                  'text-2xl',
                  'hover:text-neutral-500',
                  'dark:hover:text-neutral-300',
                  {
                    'text-neutral-500 dark:text-neutral-300':
                      i === activeViewIndex,
                  }
                )}
                onClick={() => toggleView(i)}
              >
                <Icon />
              </button>
            </div>
          );
        })}
      </VStack>
    </HStack>
  );
}

export default PrimarySideBar;
