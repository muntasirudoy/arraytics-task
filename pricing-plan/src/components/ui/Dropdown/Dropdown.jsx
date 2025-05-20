import { createContext, useContext, useState } from "react";
import {
  DropdownContainer,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "./Dropdown.styles";

const DropdownContext = createContext();

const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Dropdown components must be used within <Dropdown>");
  }
  return context;
};

const Dropdown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggle = () => setIsOpen((prev) => !prev);
  const selectItem = (value) => {
    setSelectedItem(value);
    setIsOpen(false);
  };

  return (
    <DropdownContext.Provider
      value={{ isOpen, toggle, selectedItem, selectItem }}
    >
      <DropdownContainer>{children}</DropdownContainer>
    </DropdownContext.Provider>
  );
};

const Trigger = ({ children }) => {
  const { toggle, selectedItem } = useDropdownContext();
  return (
    <DropdownTrigger onClick={toggle}>
      {selectedItem || children}
    </DropdownTrigger>
  );
};

const Menu = ({ children }) => {
  const { isOpen } = useDropdownContext();
  return (
    <DropdownMenu
      isOpen={isOpen}
      style={{ display: isOpen ? "block" : "none" }}
    >
      {children}
    </DropdownMenu>
  );
};

const Item = ({ value, children }) => {
  const { selectItem } = useDropdownContext();
  return (
    <DropdownItem onClick={() => selectItem(value)}>{children}</DropdownItem>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;
Dropdown.Item = Item;

export default Dropdown;
