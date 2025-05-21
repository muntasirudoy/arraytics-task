import { useState, Children, cloneElement } from "react";
import {
  TabButton,
  TabList,
  TabPanelWrapper,
  TabsWrapper,
} from "./tasbs.styles";

const Tabs = ({
  children,
  index: controlledIndex,

  onTabChange,
}) => {
  const [uncontrolledIndex, setUncontrolledIndex] = useState(0);
  const isControlled = controlledIndex !== undefined;
  const activeIndex = isControlled ? controlledIndex : uncontrolledIndex;

  const tabs = [];
  const panels = [];

  let tabCounter = 0;
  let panelCounter = 0;

  Children.forEach(children, (child) => {
    if (child.type.displayName === "TabsTab") {
      const tabIndex = tabCounter;
      const value = child.props.value ?? tabIndex;

      tabs.push(
        cloneElement(child, {
          key: tabIndex,
          isActive: tabIndex === activeIndex,
          onClick: () => {
            if (!isControlled) setUncontrolledIndex(tabIndex);
            if (onTabChange) onTabChange(value);
          },
        })
      );
      tabCounter++;
    }

    if (child.type.displayName === "TabsPanel") {
      panels.push(cloneElement(child, { key: panelCounter }));
      panelCounter++;
    }
  });

  return (
    <TabsWrapper>
      <TabList>{tabs}</TabList>
      <TabPanelWrapper>{panels[activeIndex]}</TabPanelWrapper>
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
