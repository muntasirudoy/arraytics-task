import InfoIcon from "../../icons/info-icon";
import Tooltip from "../Tooltip/tooltip";
import { StyledBadge } from "./badge.styles";

const Badge = ({
  children,
  bgColor,
  rounded,
  opacity,
  color,
  padding,
  icon,
  ...props
}) => {
  return (
    <StyledBadge
      $bgColor={bgColor}
      $opacity={opacity}
      $rounded={rounded}
      $color={color}
      $padding={padding}
      {...props}
    >
      {children}{" "}
      {icon && (
        <>
          <Tooltip position="top">
            <Tooltip.Trigger>
              <span style={{ textDecoration: "underline", cursor: "info" }}>
                <InfoIcon />
              </span>
            </Tooltip.Trigger>
            <Tooltip.Content>
              Trigger the widget on exit intent, after a certain time period, or
              when user scrolls to a specific part of the website.
            </Tooltip.Content>
          </Tooltip>
        </>
      )}
    </StyledBadge>
  );
};

Badge.displayName = "Badge";
export default Badge;
