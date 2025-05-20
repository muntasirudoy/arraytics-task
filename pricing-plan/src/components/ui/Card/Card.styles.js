import styled from "styled-components";

export const CardContainer = styled.div`
  border: 2px solid ${({ borderColor }) => borderColor};
  border-radius: 10px;
  padding: 24px;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

export const CardHeader = styled.div`
  margin-bottom: 20px;
`;

export const CardTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;

export const Price = styled.p`
  font-size: 28px;
  font-weight: 700;
  margin: 10px 0;
`;

export const Subtitle = styled.p`
  background-color: #f0f0f0;
  padding: 6px 12px;
  border-radius: 999px;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 16px 0;
`;

export const FeatureItem = styled.li`
  font-size: 14px;
  margin-bottom: 8px;
`;

export const SelectPlanButton = styled.button`
  background-color: ${({ bgColor }) => bgColor};
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
