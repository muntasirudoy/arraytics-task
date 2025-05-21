import styled from "styled-components";

export const StyledBadge = styled.span`
  background-color: ${({ $bgColor, $opacity }) =>
    $bgColor
      ? `${$bgColor}${
          typeof $opacity === "number"
            ? Math.round($opacity * 255)
                .toString(16)
                .padStart(2, "0")
            : ""
        }`
      : "transparent"};
  color: ${({ $color }) => $color || "#fff"};
  padding: ${({ $padding }) => $padding || "8px 12px"};
  font-size: 13px;
  border-radius: ${({ $rounded }) => ($rounded ? "50px" : "4px")};
  display: flex;
  align-items: center;
  height: fit-content;
  gap: 5px;
  white-space: nowrap;
  width: fit-content;
`;
