import { createContext, useContext, useState } from "react";
import {
  DropdownContainer,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "./Dropdown.styles";
import cardThemes from "../../../utils/card-theme";
import Badge from "../Badge";

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

const Trigger = ({ children }) => {
  const { toggle, selectedItem, variant } = useDropdownContext();
  const theme = cardThemes[variant] || cardThemes.blue;
  return (
    <DropdownTrigger
      $borderColor={theme.primary}
      $bgColor={theme.primary}
      $color={theme.primary}
      onClick={toggle}
    >
      {selectedItem || children}
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
  const isSelected = selectedItem === value;
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
