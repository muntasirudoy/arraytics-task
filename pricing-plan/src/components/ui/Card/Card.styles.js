import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 24px;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: #fff;
`;

export const CardHeader = styled.div`
  text-align: center;
  margin-bottom: 16px;
`;

export const CardTitle = styled.h3`
  font-size: 24px;
  margin: 8px 0;
`;

export const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 4px 0;
`;

export const Subtitle = styled.div`
  font-size: 14px;
  color: #666;
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
  width: 100%;
`;

export const FeatureItem = styled.li`
  font-size: 14px;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
  text-align: left;
`;

export const SelectPlanButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: #0056b3;
  }
`;
