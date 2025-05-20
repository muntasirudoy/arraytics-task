import { useState, Children, cloneElement } from "react";
import {
  TabButton,
  TabList,
  TabPanelWrapper,
  TabsWrapper,
} from "./Tabs.styles";

const Tabs = ({ children, defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const tabList = [];
  const tabPanels = [];

  Children.forEach(children, (child, index) => {
    if (child.type.displayName === "TabsTab") {
      tabList.push(
        cloneElement(child, {
          isActive: index === activeIndex,
          onClick: () => setActiveIndex(index),
        })
      );
    }

    if (child.type.displayName === "TabsPanel") {
      tabPanels.push(index === activeIndex ? child : null);
    }
  });

  return (
    <TabsWrapper>
      <TabList>{tabList}</TabList>
      <TabPanelWrapper>{tabPanels}</TabPanelWrapper>
    </TabsWrapper>
  );
};

const TabsTab = ({ children, isActive, onClick }) => {
  return (
    <TabButton $active={isActive} onClick={onClick}>
      {children}
    </TabButton>
  );
};
TabsTab.displayName = "TabsTab";

const TabsPanel = ({ children }) => <div>{children}</div>;
TabsPanel.displayName = "TabsPanel";

Tabs.Tab = TabsTab;
Tabs.Panel = TabsPanel;

export default Tabs;
