import { FC } from "react";
import styles from "./TabList.module.css";

interface TabListProps {
  label: string;
}

const TabList: FC<TabListProps> = ({ children, label }) => {
  return (
    <div className={styles.tabList} role="tablist" aria-label={label}>
      {children}
    </div>
  )
}

export default TabList;
