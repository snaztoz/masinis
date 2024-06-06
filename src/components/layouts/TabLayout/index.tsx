import HStack from '../HStack';
import Tab from './Tab';
import TabDefaultView from './TabDefaultView';
import TabItem from './TabItem';
import VStack from '../VStack';
import { useState } from 'react';

interface Props {
  tabs: TabItem[];
}

function TabLayout({ tabs: initialTabs }: Props) {
  const [tabs, setTabs] = useState<TabItem[]>(initialTabs);

  function handleTabActivation(id: string) {
    setTabs((prev) =>
      prev.map((tab) => ({
        ...tab,
        isActive: tab.id === id,
      }))
    );
  }

  function handleTabClosing(id: string) {
    setTabs((oldTabs) => {
      const targetTabIndex = oldTabs.findIndex((tab) => tab.id === id);

      const isTabActive = oldTabs[targetTabIndex]!.isActive;
      const lastRemainingTab = oldTabs.length === 1;

      if (!isTabActive || lastRemainingTab) {
        // remove targeted tab, no automatic tab changing
        return oldTabs.filter((tab) => tab.id !== id);
      }

      // create new array and remove targeted tab
      const newTabs = oldTabs.filter((tab) => tab.id !== id);

      // change active tab to another opened tab
      const removedTabIsTheLastTab = targetTabIndex + 1 === oldTabs.length;
      if (removedTabIsTheLastTab) {
        // no tab after the removed one, so we mark the last tab
        // from `newTabs` as the active tab.
        newTabs[newTabs.length - 1].isActive = true;
      } else {
        // the tab after the removed one will replaces the removed
        // tab position, so we can just use the `targetTabIndex`
        // to access it.
        newTabs[targetTabIndex].isActive = true;
      }

      return newTabs;
    });
  }

  return (
    <VStack className="grow h-full">
      <HStack className="w-full">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            id={tab.id}
            title={tab.title}
            isActive={tab.isActive}
            onClick={() => handleTabActivation(tab.id)}
            closeHandler={() => handleTabClosing(tab.id)}
          />
        ))}
      </HStack>

      <div className="grow w-full bg-neutral-800">
        {tabs.find((tab) => tab.isActive)?.view || <TabDefaultView />}
      </div>
    </VStack>
  );
}

export default TabLayout;
