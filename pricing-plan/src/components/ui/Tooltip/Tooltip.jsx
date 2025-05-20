// Tooltip/index.js
import { useState, cloneElement, Children } from "react";
import { TooltipWrapper, TooltipBox } from "./Tooltip.styles";

const Tooltip = ({ children, position = "top" }) => {
  const [visible, setVisible] = useState(false);

  let trigger = null;
  let content = null;

  Children.forEach(children, (child) => {
    if (child.type.displayName === "TooltipTrigger") {
      trigger = cloneElement(child, {
        onShow: () => setVisible(true),
        onHide: () => setVisible(false),
      });
    }
    if (child.type.displayName === "TooltipContent") {
      content = cloneElement(child, {
        visible,
        position,
      });
    }
  });

  return (
    <TooltipWrapper>
      {trigger}
      {content}
    </TooltipWrapper>
  );
};

const TooltipTrigger = ({ children, onShow, onHide }) => {
  return (
    <div onMouseEnter={onShow} onMouseLeave={onHide}>
      {children}
    </div>
  );
};
TooltipTrigger.displayName = "TooltipTrigger";

const TooltipContent = ({ children, visible, position }) => {
  return visible ? (
    <TooltipBox data-position={position}>{children}</TooltipBox>
  ) : null;
};
TooltipContent.displayName = "TooltipContent";

Tooltip.Trigger = TooltipTrigger;
Tooltip.Content = TooltipContent;

export default Tooltip;
