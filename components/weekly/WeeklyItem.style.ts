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

export const WeekItemContainer = styled.div`
  position: relative;
  padding: 12px;
`;

export const WeekItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #2c3e50;
  padding-left: 4px;

  ${dynamic}
`;

export const WeekItemDate = styled.span`
  font-size: 32px;
  font-weight: bold;
`;

export const WeekItemDay = styled.span`
  opacity: 0.4;
  font-size: 14px;
  font-weight: bold;
`;
