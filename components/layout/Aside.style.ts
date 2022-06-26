import styled from '@emotion/styled';
import { Common } from '../../styles/common';
import { css } from '@emotion/react';

export const AsideContainer = styled.section<{ open: boolean }>`
  position: relative;
  min-width: ${({ open }) => (open ? '260px' : '0')};
  border-right: 2px solid #2c3e5010;
  transition: min-width 0.2s ease;
`;

export const AsideInner = styled.div<{ open: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: opacity 0.2s ease;
`;

const dynamicToggle = ({ open }: { open: boolean }) => {
  if (!open) {
    return css`
      right: -12px;
      width: 30px;
      border-radius: 0;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    `;
  }
};

export const AsideToggle = styled.div<{ open: boolean }>`
  position: absolute;
  top: 75px;
  right: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid #2c3e5020;
  background-color: #fff;
  transform: translateX(50%);
  transition: all 0.2s ease;
  z-index: 10;
  cursor: pointer;

  ${dynamicToggle}

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid #2c3e5050;
    border-right: 2px solid #2c3e5050;
    transition: border 0.2s ease;
    transform: ${({ open }) =>
      open
        ? 'translate(-25%, -50%) rotate(135deg)'
        : 'translate(-75%, -50%) rotate(-45deg)'};
  }

  &:hover,
  &:hover:after {
    border-color: #29b48b;
    background: #f4f8f6fc;
  }
`;

export const AsideTitle = styled.h1`
  padding: 21px 30px;
  font-size: 28px;
  font-weight: bold;
  height: ${Common.layout.headerHeight};

  svg {
    width: 36px;
    height: 36px;
    margin-right: 8px;
    line-height: 1;
    font-size: 0;
    vertical-align: middle;
  }
`;

export const AsideContent = styled.div`
  padding: 46px 24px 16px;
  height: ${Common.layout.bodyHeight};
`;
