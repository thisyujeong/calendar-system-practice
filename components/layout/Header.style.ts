import styled from '@emotion/styled';
import { Common } from '../../styles/common';

export const HeaderContainer = styled.div`
  position: relative;
  height: ${Common.layout.headerHeight};
  width: 100%;
  padding: 0 40px;
  display: grid;
  align-items: center;
`;

export const HeaderToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const LoginBtn = styled.div`
  margin-left: 10px;
  a {
    position: relative;
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 40%;
    background: var(--toggle-icon-bg);
    transition: all 0.2s ease, transform 0.1s ease;
    cursor: pointer;

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      transform: translate(-50%, -50%);
      background: var(--toggle-icon);
      mask-image: url(/images/login.svg);
      mask-size: 20px 20px;
      mask-position: center;
      mask-repeat: no-repeat;
      transition: all 0.2s ease;
    }

    &:hover:after {
      background: var(--accent);
    }

    &:active {
      transform: scale(0.9);
    }
  }
`;
