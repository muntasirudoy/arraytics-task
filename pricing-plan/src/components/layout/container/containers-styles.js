import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;

  // @media (min-width: 320px) {
  //   max-width: 310px;
  // }
  // @media (min-width: 480px) {
  //   max-width: 470px;
  // }
  // @media (min-width: 576px) {
  //   max-width: 580px;
  // }
  @media (min-width: 768px) {
    max-width: 680px;
  }
  @media (min-width: 992px) {
    max-width: 900px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;
