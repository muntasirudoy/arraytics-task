import styled from "styled-components";
export const CardTopStripe = styled.div`
  height: 6px;
  width: 100%;
  background-color: ${({ $bgColor }) => $bgColor};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
`;
export const CardContainer = styled.div`
  border: 1px solid ${({ $borderColor }) => $borderColor || "#ccc"};
  border-radius: 10px;
  padding: 24px;
  width: 100%;
  max-width: 258px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  position: relative;
`;

export const CardHeader = styled.div`
  margin-bottom: 20px;
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  color: var(--primary-color);
`;

export const Price = styled.p`
  font-size: 28px;
  font-weight: 700;
  margin: 10px 0;
  color: ${({ $color }) => $color || "#ccc"};
`;

export const Subtitle = styled.p`
  background-color: ${({ $bgColor, $opacity = 0.11 }) =>
    $bgColor
      ? `${$bgColor}${
          typeof $opacity === "number"
            ? Math.round($opacity * 255)
                .toString(16)
                .padStart(2, "0")
            : ""
        }`
      : "transparent"};
  padding: 6px 12px;
  border-radius: 999px;
  display: inline-block;
  font-size: 12.5px;
  font-weight: 500;
  color: ${({ $color }) => $color};
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 16px 0;
`;

export const FeatureItem = styled.li`
  font-size: 14px;
  margin: 0;
  font-weight: 400;
  color: var(--primary-color);
  padding: 10px 0;
`;

export const SelectPlanButton = styled.button`
  background-color: ${({ $bgColor }) => $bgColor || "#007bff"};
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
  font-weight: 600;

  &:hover {
    opacity: 0.9;
  }
`;
