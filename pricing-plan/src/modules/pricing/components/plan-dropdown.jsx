/**
 *
 * @component
 * @param {Object[]} variants - Array of plan variant objects.
 * @param {string} variants[].title - The display title of the plan variant (may contain HTML).
 * @param {string} variants[].name - The unique identifier for the plan variant.
 * @param {Object} active - The currently selected plan variant.
 * @param {Function} onChange - Callback function invoked when the selected plan changes.
 * @returns {JSX.Element} The rendered dropdown component for plan selection.
 */
import InfoIcon from "../../../components/icons/info-icon";
import Badge from "../../../components/ui/Badge";
import { StyledBadge } from "../../../components/ui/Badge/badge-styles";
import Dropdown from "../../../components/ui/Dropdown/Dropdown";
import { DrodownIcon } from "../../../components/ui/Dropdown/dropdown-styles";
import Tooltip from "../../../components/ui/Tooltip";
import { parseHTML } from "../../../utils/parse-html";

const PlanDropdown = ({ variants, active, onChange, theme }) => (
  <Dropdown value={active} onChange={onChange} variant={theme}>
    <DrodownIcon>
      <Dropdown.Trigger>Choose Plan</Dropdown.Trigger>
      <StyledBadge $opacity={0.5} $color={theme} $rounded={true}>
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
      </StyledBadge>
    </DrodownIcon>
    <Dropdown.Menu>
      {variants.map((variant, idx) => (
        <Dropdown.Item
          value={{ title: variant.title, id: variant.name }}
          key={idx}
        >
          <div dangerouslySetInnerHTML={parseHTML(variant.title)} />
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  </Dropdown>
);

PlanDropdown.displayName = "PlanDropdown";
export default PlanDropdown;
