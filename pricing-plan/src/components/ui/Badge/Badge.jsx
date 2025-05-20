import InfoIcon from "../../icons/InfoIcon";
import { StyledBadge } from "./Badge.style";

const Badge = ({
  children,
  bgColor,
  rounded,
  opacity,
  color,
  padding,
  icon,
}) => {
  return (
    <StyledBadge
      $bgColor={bgColor}
      $opacity={opacity}
      $rounded={rounded}
      $color={color}
      $padding={padding}
    >
      {children} {icon && <InfoIcon />}
    </StyledBadge>
  );
};

Badge.displayName = "Badge";
export default Badge;
