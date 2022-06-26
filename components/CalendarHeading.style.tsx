import styled from '@emotion/styled';

export const CalendarHeadingContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeadingDate = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

export const TodayBtn = styled.button`
  margin-left: 20px;
  padding: 4px 12px;
  color: #29b48b;
  border: 1px solid #29b48b;
  border-radius: 6px;
  background-color: #f4f8f6fc;
  transition: all 0s ease;

  &:hover {
    color: #f4f8f6fc;
    background-color: #29b48b;
  }

  &:active {
    transform: scale(0.95);
  }
`;
