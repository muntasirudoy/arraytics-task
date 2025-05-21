import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 45px;
  width: 100%;
  padding: 16px;
  transition: all 0.3s ease;
  justify-items: center;
  @media (max-width: 480px) {
    margin: 0 auto;
    grid-template-columns: 1fr;
  }
`;
export const TabContainer = styled.div`
  width: fit-content;
  padding: 16px;
  transition: all 0.3s ease;
  display: flex;
  margin: 0 auto;
    @media (min-width: 320px) and (max-width: 575px) {
    flex-direction: column;
    align-items-center;
    justify-content:center;
    gap:10px;
    align-items:center
  }
`;

export const PricingContainer = styled.div`
  padding: 16px;
`;
