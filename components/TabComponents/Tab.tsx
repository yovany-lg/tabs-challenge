import { FC } from "react";
import styles from './Tab.module.css';

interface TabProps {
  isSelected: boolean;
  onClick: (label: string) => void;
  label: string;
}

const Tab: FC<TabProps> = ({ children, isSelected, onClick, label }) => {
  return (
    <button
      role="tab"
      className={styles.tab}
      aria-selected={isSelected}
      onClick={() => onClick(label)}
      aria-controls={`panel-${label}`}
      id={`tab-${label}`}
      tabIndex={isSelected ? 0 : -1}
    >
      {children}
    </button>
  )
}

export default Tab;
