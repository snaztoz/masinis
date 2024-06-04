import Tab from './Tab';
import TabDefaultView from './TabDefaultView';
import TabItem from './TabItem';
import { useState } from 'react';

interface Props {
  tabs: TabItem[];
}

function TabLayout({ tabs }: Props) {
  const [activeTabId, setActiveTabId] = useState<string | null>(null);

  return (
    <section className="grow h-full flex flex-col">
      <nav className="flex">
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
      </nav>

      <div className="grow bg-neutral-800">
        {tabs.find((tab) => tab.id === activeTabId)?.view || <TabDefaultView />}
      </div>
    </section>
  );
}

export default TabLayout;
