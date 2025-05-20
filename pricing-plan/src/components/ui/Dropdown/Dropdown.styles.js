import styled, { keyframes } from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 240px;
  font-family: "Inter", sans-serif;
`;

export const DropdownTrigger = styled.button`
  width: 100%;
  padding: 12px 16px;
  font-size: 14px;
  border-radius: 8px;
  background-color: #f6f4ff;
  border: 1px solid #e0d8ff;
  color: #5f37ef;
  text-align: left;
  cursor: pointer;
  position: relative;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 0 0 2px #ddd6fe;
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
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  list-style: none;
  padding: 8px 0;
  margin: 8px 0 0 0;
  z-index: 10;
  animation: ${({ isOpen }) => (isOpen ? bounceIn : bounceOut)} 0.25s ease
    forwards;
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
`;

export const DropdownItem = styled.li`
  padding: 12px 16px;
  font-size: 14px;
  cursor: pointer;
  color: #333;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #f6f4ff;
    color: #5f37ef;
  }

  ${({ isSelected }) =>
    isSelected &&
    `
    background-color: #f6f4ff;
    color: #5f37ef;
    font-weight: 500;
  `}
`;
