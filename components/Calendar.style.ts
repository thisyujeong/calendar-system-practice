import styled from '@emotion/styled';

export const CalendarContainer = styled.div`
  thead {
    th {
      display: table-cell;
      width: 30px;
      height: 38px;
      color: #4190d6;
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

      &.today {
        color: #4190d6;
        font-weight: bold;
      }

      &:hover {
        background: #eff1f9;
      }
    }

    td[data-view='false'] {
      opacity: 0.5;
    }
  }
`;
