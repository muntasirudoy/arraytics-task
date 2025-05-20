import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  width: 100%;
  padding: 16px;
  transition: all 0.3s ease;
  justify-items: center;
  @media (max-width: 480px) {
    margin: 0 auto;
    grid-template-columns: 1fr;
  }
`;
