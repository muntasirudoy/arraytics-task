/** *
 * @component
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - Content to be displayed inside the badge.
 * @param {string} [props.bgColor] - Background color of the badge.
 * @param {boolean} [props.rounded] - If true, applies rounded corners to the badge.
 * @param {number|string} [props.opacity] - Opacity of the badge.
 * @param {string} [props.color] - Text color of the badge.
 * @param {string} [props.padding] - Padding inside the badge.
 * @param {boolean} [props.icon] - If true, displays an info icon with a tooltip.
 */
import InfoIcon from "../../icons/info-icon";
import Tooltip from "../Tooltip/Tooltip";
import { StyledBadge } from "./badge-styles";

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
