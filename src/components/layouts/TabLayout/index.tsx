import HStack from '../HStack';
import Tab from './Tab';
import TabDefaultView from './TabDefaultView';
import TabItem from './TabItem';
import VStack from '../VStack';
import { Fragment } from 'react';

interface Props {
  tabs: TabItem[];
  onTabClick: (id: string) => void;
  onTabCloseClick: (id: string) => void;
}

function TabLayout({ tabs, onTabClick, onTabCloseClick }: Props) {
  const activeTab = tabs.find((tab) => tab.isActive);
  const view = activeTab ? (
    // use `key` in order to make the view is properly
    // re-created on tab activation
    <Fragment key={activeTab.id}>{activeTab.view()}</Fragment>
  ) : (
    <TabDefaultView />
  );

  return (
    <VStack className="grow h-full min-w-0">
      <HStack className="shrink-0 w-full overflow-x-auto">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            id={tab.id}
            title={tab.title}
            isActive={tab.isActive}
            onClick={() => onTabClick(tab.id)}
            closeHandler={() => onTabCloseClick(tab.id)}
          />
        ))}
      </HStack>

      <div className="grow w-full bg-neutral-800 overflow-y-auto">{view}</div>
    </VStack>
  );
}

export default TabLayout;
