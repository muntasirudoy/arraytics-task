/**
 *
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - The dropdown's children components.
 * @param {string} [props.variant=""] - The theme variant for the dropdown.
 * @param {Object} [props.value] - The controlled selected value.
 * @param {function} [props.onChange] - Callback fired when an item is selected.
 * @returns {JSX.Element}
 */

/**
 * Dropdown.Trigger renders the clickable element that toggles the dropdown menu.
 *
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - The trigger's children.
 * @returns {JSX.Element}
 */

/**
 * Dropdown.Menu renders the dropdown menu containing the dropdown items.
 *
 * @component
 * @param {Object} props
 * @param {React.ReactNode} props.children - The menu's children (Dropdown.Item components).
 * @returns {JSX.Element}
 */

/**
 * Dropdown.Item represents an individual selectable item within the dropdown menu.
 *
 * @component
 * @param {Object} props
 * @param {Object} props.value - The value object for the item (should have an `id` property).
 * @param {React.ReactNode} props.children - The item's display content.
 * @returns {JSX.Element}
 */
import { createContext, useContext, useState } from "react";
import cardThemes from "../../../utils/card-theme";
import { stripHtml } from "../../../utils/parse-html";
import {
  DropdownContainer,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "./dropdown-styles";

const DropdownContext = createContext();

const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Dropdown components must be used within <Dropdown>");
  }
  return context;
};

const Dropdown = ({
  children,
  variant = "",
  value: controlledValue,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const [uncontrolledValue, setUncontrolledValue] = useState(null);

  const toggle = () => setIsOpen((prev) => !prev);
  const isControlled = controlledValue !== undefined;
  const selectedItem = isControlled ? controlledValue : uncontrolledValue;

  const selectItem = (value) => {
    if (!isControlled) {
      setUncontrolledValue(value);
    }
    onChange?.(value);
    setIsOpen(false);
  };

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        toggle,
        selectedItem,
        selectItem,
        variant,
      }}
    >
      <DropdownContainer>{children}</DropdownContainer>
    </DropdownContext.Provider>
  );
};

const Trigger = ({ children, ...props }) => {
  const { toggle, selectedItem, variant, isOpen } = useDropdownContext();
  const theme = cardThemes[variant] || cardThemes.blue;
  return (
    <DropdownTrigger
      $borderColor={theme.primary}
      $bgColor={theme.primary}
      $color={theme.primary}
      onClick={toggle}
      $open={isOpen}
      {...props}
    >
      {stripHtml(selectedItem?.title) || children}
    </DropdownTrigger>
  );
};

const Menu = ({ children }) => {
  const { isOpen } = useDropdownContext();
  return (
    <DropdownMenu $open={isOpen} style={{ display: isOpen ? "block" : "none" }}>
      {children}
    </DropdownMenu>
  );
};

const Item = ({ value, children }) => {
  const { selectItem, variant, selectedItem } = useDropdownContext();

  const isSelected = selectedItem === value.id;
  const theme = cardThemes[variant] || cardThemes.blue;

  return (
    <DropdownItem
      $hoverBgColor={theme.primary}
      $color={theme.primary}
      $isSelected={isSelected}
      onClick={() => selectItem(value)}
    >
      {children}
    </DropdownItem>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;
Dropdown.Item = Item;

export default Dropdown;
