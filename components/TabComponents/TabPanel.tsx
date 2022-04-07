import { FC } from "react"
import styles from './TabPanel.module.css';

interface TabPanelProps {
  label: string;
  isSelected: boolean;
}

const TabPanel: FC<TabPanelProps> = ({ children, isSelected, label }) => {
  return (
    <div
      className={styles.tabPanel}
      role="tabpanel"
      id={`panel-${label}`}
      aria-labelledby={`tab-${label}`}
      hidden={!isSelected}
      tabIndex={0}
    >
      {children}
    </div>
  );
}

export default TabPanel;
