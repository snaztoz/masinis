import { useState } from 'react';
import Tab from './Tab';

const tabs = ['package.json', 'package-lock.json', 'index.html'];

function TabView() {
  const [activeTab, setActiveTab] = useState('package.json');

  return (
    <nav className="flex text-sm dark:text-neutral-400">
      {tabs.map((t) => (
        <Tab
          key={t}
          title={t}
          isActive={t === activeTab}
          handleClick={() => setActiveTab(t)}
        />
      ))}
    </nav>
  );
}

export default TabView;
