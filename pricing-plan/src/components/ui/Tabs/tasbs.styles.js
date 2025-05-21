import styled, { css } from "styled-components";

export const TabsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const TabList = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  width: fit-content;
  margin-right: 10px;
  align-items: center;
`;

export const TabButton = styled.button`
  padding: 3px 0;
  font-size: 16px;
  white-space: nowrap;
  font-weight: 600;
  font-family: var(--font-family-base);
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  color: #555;

  ${({ $active }) =>
    $active &&
    css`
      color: #b78deb;
      border-bottom: 2px solid #b78deb;
    `}

  &:hover {
    color: #b78deb;
  }
`;

export const TabPanelWrapper = styled.div`
  margin: 0 auto;
`;
