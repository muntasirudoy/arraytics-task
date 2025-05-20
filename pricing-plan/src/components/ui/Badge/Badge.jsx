import { StyledBadge } from "./Badge.styles";

const Badge = ({ children }) => {
  return <StyledBadge>{children}</StyledBadge>;
};

Badge.displayName = "Badge";
export default Badge;
