import styled from '@emotion/styled';

export const CalendarHeadingContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const HeadingDate = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

export const HeadingExploreControl = styled.div`
  line-height: 0;
  margin-left: 20px;

  .prev,
  .next {
    display: inline-block;
    position: relative;
    width: 30px;
    height: 30px;
    text-indent: -99999999px;
    background-image: url('/images/arrow.png');
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .prev {
    transform: rotate(180deg);
  }
`;

export const FlexGroup = styled.div`
  display: flex;
`;

export const TodayBtn = styled.button`
  margin-left: 20px;
  padding: 4px 12px;
  color: #29b48b;
  border: 1px solid transparent;
  border-radius: 6px;
  background-color: #ecf7f1fc;
  transition: border 0.2s ease, transform 0.1s ease;

  &:hover {
    border: 1px solid #29b48b;
  }

  &:active {
    transform: scale(0.95);
  }
`;
