import styled from '@emotion/styled';

export const CalendarContainer = styled.div`
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

      &.today span {
        color: #29b48b;
        font-weight: bold;
      }

      &:hover {
        background: #eff1f9;
      }
    }

    td[data-view='false'] {
      opacity: 0.5;
    }

    td[data-selected='true'] {
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
`;
