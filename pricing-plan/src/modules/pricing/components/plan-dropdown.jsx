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
import Dropdown from "../../../components/ui/Dropdown/Dropdown";
import { parseHTML } from "../../../utils/parse-html";

const PlanDropdown = ({ variants, active, onChange }) => (
  <Dropdown value={active} onChange={onChange}>
    <Dropdown.Trigger>Choose Plan</Dropdown.Trigger>
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
