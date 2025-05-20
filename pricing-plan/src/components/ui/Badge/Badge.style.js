import styled from "styled-components";

export const StyledBadge = styled.span`
  position: absolute;
  top: 13px;
  right: 8px;
  background-color: ${({ $bgColor }) => $bgColor};
  color: white;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: ${({ $rounded }) => $rounded || "4px"};
`;
