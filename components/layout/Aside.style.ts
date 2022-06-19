import styled from '@emotion/styled';
import { Common } from '../../styles/common';

export const AsideContainer = styled.section`
  border-right: 2px solid #2c3e5010;
  position: relative;
`;

export const AsideToggle = styled.div<{ open: boolean }>`
  position: absolute;
  top: 58px;
  right: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid #2c3e5020;
  background-color: #fff;
  transform: translateX(50%);
  z-index: 10;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-bottom: 2px solid #2c3e5050;
    border-right: 2px solid #2c3e5050;
    transform: translate(-75%, -50%) rotate(-45deg);
    transform: ${({ open }) =>
      open
        ? 'translate(-75%, -50%) rotate(-45deg)'
        : 'translate(-25%, -50%) rotate(135deg)'};
  }

  &:hover,
  &:hover:after {
    border-color: #2c3e5080;
  }
`;

export const AsideTitle = styled.h1`
  padding: 0 24px;
  font-size: 28px;
  font-weight: bold;
  line-height: 77px;

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
  padding: 16px 24px;
  height: ${Common.layout.bodyHeight};
`;
