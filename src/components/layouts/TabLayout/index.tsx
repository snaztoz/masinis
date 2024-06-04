import HStack from '../HStack';
import Tab from './Tab';
import TabDefaultView from './TabDefaultView';
import TabItem from './TabItem';
import VStack from '../VStack';
import { useState } from 'react';

interface Props {
  tabs: TabItem[];
}

function TabLayout({ tabs }: Props) {
  const [activeTabId, setActiveTabId] = useState<string | null>(null);

  return (
    <VStack className="grow h-full">
      <HStack className="w-full">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            id={tab.id}
            title={tab.title}
            isActive={tab.id === activeTabId}
            onClick={() => {
              if (tab.id === activeTabId) {
                setActiveTabId(null);
              } else {
                setActiveTabId(tab.id);
              }
            }}
          />
        ))}
      </HStack>

      <div className="grow w-full bg-neutral-800">
        {tabs.find((tab) => tab.id === activeTabId)?.view || <TabDefaultView />}
      </div>
    </VStack>
  );
}

export default TabLayout;
