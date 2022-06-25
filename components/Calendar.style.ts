import styled from '@emotion/styled';

export const CalendarContainer = styled.div``;

export const CalendarExplore = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ExploreDate = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
export const ExploreControl = styled.div`
  line-height: 0;

  .prev,
  .next {
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
    margin-left: 8px;
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

export const CalendarTable = styled.table`
  thead {
    th {
      display: table-cell;
      width: 30px;
      height: 38px;
      color: #29b48b;
    }
  }

  tbody {
    td {
      position: relative;
      display: table-cell;
      width: 30px;
      height: 30px;
      text-align: center;
      cursor: pointer;

      span {
        position: relative;
        z-index: 2;
      }

      &.today span {
        color: #29b48b;
        font-weight: bold;
      }

      &:not([data-selected='true']) {
        &:after {
          content: '';
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, calc(-50% - 1px));
          width: 24px;
          height: 24px;
          background: #eff1f9;
          opacity: 0;
        }
        &:hover:after {
          opacity: 1;
        }
      }

      &[data-view='false'] {
        opacity: 0.5;
      }

      &[data-selected='true'] {
        span {
          position: relative;
          color: #eff1f9;
          font-weight: bold;
          z-index: 2;
        }

        &:before {
          content: '';
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, calc(-50% - 1px));
          width: 24px;
          height: 24px;
          background: #29b48b;
        }
      }
    }
  }
`;
