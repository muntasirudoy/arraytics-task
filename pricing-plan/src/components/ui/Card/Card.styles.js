import styled from "styled-components";
export const CardTopStripe = styled.div`
  height: 7px;
  width: 100%;
  background-color: ${({ $bgColor }) => $bgColor};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
`;
export const TopBadge = styled.div`
  position: absolute;
  top: 15px;
  right: 10px;
`;
export const CardContainer = styled.div`
  border: 1px solid ${({ $borderColor }) => $borderColor || "#ccc"};
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  min-width: 258px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  position: relative;
`;

export const CardHeader = styled.div`
  margin-bottom: 20px;
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  margin: 10px 0 0 0;
  color: var(--primary-color);
`;

export const Price = styled.p`
  font-size: 32px;
  font-weight: 700;
  margin: 10px 0;
  color: ${({ $color }) => $color || "#ccc"};
`;
export const PriceSuffix = styled.span`
  font-size: 16px;
  font-weight: 400;
  margin: 10px 0;

  color: var(--price-suffix);
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
  font-weight: 500;
  font-size: 16px;
  &:hover {
    opacity: 0.9;
  }
`;
