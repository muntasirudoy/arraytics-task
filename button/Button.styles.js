import styled from "styled-components";

export const ButtonWrapper = styled.button`
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

export const ArrowIcon = styled.span`
  font-size: 16px;
`;
