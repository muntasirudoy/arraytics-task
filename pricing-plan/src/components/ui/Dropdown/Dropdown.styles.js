import styled, { keyframes } from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 240px;
  font-family: "Inter", sans-serif;
`;

export const DropdownTrigger = styled.button`
  width: 100%;
  padding: 8px 12px;
  font-size: 13px;
  border-radius: 5px;
  text-transform: capitalize;
  display: block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${({ $bgColor, $opacity = 0.1 }) =>
    $bgColor
      ? `${$bgColor}${
          typeof $opacity === "number"
            ? Math.round($opacity * 255)
                .toString(16)
                .padStart(2, "0")
            : ""
        }`
      : "transparent"};
  border: 1px solid
    ${({ $borderColor, $opacity = 0.5 }) =>
      $borderColor
        ? `${$borderColor}${
            typeof $opacity === "number"
              ? Math.round($opacity * 255)
                  .toString(16)
                  .padStart(2, "0")
              : ""
          }`
        : "transparent"};
  color: ${({ $color }) => $color};
  text-align: left;
  cursor: pointer;
  position: relative;
  transition: box-shadow 0.2s ease;
  font-family: var(--font-family-base);
  &:hover {
    box-shadow: 0 0 0 1px
      ${({ $color, $opacity = 0.3 }) =>
        $color
          ? `${$color}${
              typeof $opacity === "number"
                ? Math.round($opacity * 255)
                    .toString(16)
                    .padStart(2, "0")
                : ""
            }`
          : "transparent"};
  }

  &::after {
    content: "▾";
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 12px;
    color: #5f37ef;
  }
`;

const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.95) translateY(-10px);
  }
  60% {
    opacity: 1;
    transform: scale(1.02) translateY(2px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const bounceOut = keyframes`
  0% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  100% {
    opacity: 0;
    transform: scale(0.95) translateY(-10px);
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 110%;
  width: 100%;
  background: white;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  list-style: none;
  padding: 0;
  margin: 2px 0 0 0;
  z-index: 10;

  animation: ${({ isOpen }) => (isOpen ? bounceIn : bounceOut)} 0.25s ease
    forwards;
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
`;

export const DropdownItem = styled.li`
  padding: 10px 12px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 400;
  color: #333;
  transition: background 0.2s ease, color 0.2s ease;
  border: 1px solid #f6f4ff;

  display: block; // or inline-block
  width: 100%; // Ensure it respects container
  max-width: 100%; // Prevent overflow
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background-color: ${({ $hoverBgColor, $opacity = 0.1 }) =>
      $hoverBgColor
        ? `${$hoverBgColor}${
            typeof $opacity === "number"
              ? Math.round($opacity * 255)
                  .toString(16)
                  .padStart(2, "0")
              : ""
          }`
        : "transparent"};
    color: ${({ $color }) => $color || "#5f37ef"};
  }

  ${({ isSelected }) =>
    isSelected &&
    `
    background-color: #f6f4ff;
    color: ${({ $color }) => $color || "#5f37ef"};
    font-weight: 500;
  `}
`;
