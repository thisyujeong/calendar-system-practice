import styled from '@emotion/styled';
import { css } from '@emotion/react';

const dynamic = ({ isToday }: { isToday: boolean }) => {
  if (isToday) {
    return css`
      * {
        color: #29b48b;
      }
      border-color: #29b48b;
    `;
  }
};

export const WeeklyItemContainer = styled.div`
  position: relative;
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

export const WeeklyItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #2c3e50;
  padding-left: 4px;

  ${dynamic}
`;

export const WeeklyItemDate = styled.span`
  font-size: 24px;
  font-weight: bold;
`;

export const WeeklyItemDay = styled.span`
  opacity: 0.4;
  font-size: 14px;
  font-weight: bold;
`;

export const WeeklyItemBody = styled.div`
  position: relative;
  min-height: 304px;
  height: 100%;
`;

export const WeeklyList = styled.div`
  position: relative;
  background: url('/images/underline.svg');
  background-size: 100% 38px;
  background-repeat: repeat;
  height: 100%;
`;

export const WeeklyInputBox = styled.div`
  position: relative;
  width: 100%;
  height: 38px;
  padding: 8px 12px;
  line-height: 22px;

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border: 0;
    height: 38px;
    line-height: 22px;
    font-size: 16px;
    padding: 8px 12px;
    background: transparent;
    border-bottom: 1px solid transparent;
    transition: all 0.2s ease;
    font-family: 'Ubuntu', 'GothicA1';

    &:hover {
      background: #f4f8f6fc;
      border-color: #29b48b;
    }

    &:focus {
      background: transparent;
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
      border-color: transparent;
      border-radius: 4px;
    }
  }

  div {
    font-size: 16px;
  }
`;
