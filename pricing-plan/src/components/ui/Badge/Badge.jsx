import { StyledBadge } from "./Badge.style";

const Badge = ({ children, bgColor, rounded }) => {
  return (
    <StyledBadge $bgColor={bgColor} $rounded={rounded}>
      {children}
    </StyledBadge>
  );
};

Badge.displayName = "Badge";
export default Badge;
