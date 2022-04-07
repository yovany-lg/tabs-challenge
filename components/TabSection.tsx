import { useState } from "react";
import Tab from "./TabComponents/Tab";
import TabList from "./TabComponents/TabList";
import TabPanel from "./TabComponents/TabPanel";
import TabPanels from "./TabComponents/TabPanels";
import Tabs from "./TabComponents/Tabs";

const tabsData = [
  {
    label: 'None',
    title: 'Severity: None',
    descrption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    label: 'Low',
    title: 'Severity: Low',
    descrption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    label: 'Medium',
    title: 'Severity: Medium',
    descrption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    label: 'High',
    title: 'Severity: High',
    descrption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    label: 'Critical',
    title: 'Severity: Critical',
    descrption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
]

const TabSection = () => {
  const [selected, setSelected] = useState(tabsData[0].label);
  return (
    <Tabs>
      <TabList label="ImportantTabs">
        {tabsData.map(({ label }) => {
          return (
            <Tab
              key={label}
              label={label}
              onClick={setSelected}
              isSelected={selected === label}
            >
              {label}
            </Tab>
          );
        })}
      </TabList>
      <TabPanels>
        {tabsData.map(({ label, title, descrption }) => {
          return (
            <TabPanel key={`tab-panel-${label}`} label={label} isSelected={selected === label}>
              <h1>{title}</h1>
              <p>{descrption}</p>
            </TabPanel>
          );
        })}
      </TabPanels>
    </Tabs>
  );
}

export default TabSection;