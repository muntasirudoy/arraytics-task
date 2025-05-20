import styled, { css } from "styled-components";

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const TooltipBox = styled.div`
  position: absolute;
  z-index: 10;
  width: 240px;
  background: white;
  color: var(--tooltip-text-color);
  font-size: 14px;
  line-height: 1.5;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  transition: opacity 0.5s ease;
  white-space: normal;
  font-family: var(--font-family-base);

  ${({ "data-position": pos }) => {
    switch (pos) {
      case "bottom":
        return css`
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 8px;
        `;
      case "left":
        return css`
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
          margin-right: 8px;
        `;
      case "right":
        return css`
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          margin-left: 8px;
        `;
      default:
        return css`
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 8px;
        `;
    }
  }}

  &::after {
    content: "";
    position: absolute;
    border-width: 6px;
    border-style: solid;
  }

  ${({ "data-position": pos }) => {
    switch (pos) {
      case "bottom":
        return css`
          &::after {
            top: -12px;
            left: 50%;
            transform: translateX(-50%);
            border-color: transparent transparent white transparent;
          }
        `;
      case "left":
        return css`
          &::after {
            top: 50%;
            right: -12px;
            transform: translateY(-50%);
            border-color: transparent transparent transparent white;
          }
        `;
      case "right":
        return css`
          &::after {
            top: 50%;
            left: -12px;
            transform: translateY(-50%);
            border-color: transparent white transparent transparent;
          }
        `;
      default:
        return css`
          &::after {
            bottom: -12px;
            left: 50%;
            transform: translateX(-50%);
            border-color: white transparent transparent transparent;
          }
        `;
    }
  }}
`;
