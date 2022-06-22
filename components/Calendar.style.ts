import styled from '@emotion/styled';

export const CalendarContainer = styled.div`
  thead {
    th {
      display: table-cell;
      width: 30px;
      height: 38px;
      color: #4f785f;
    }
  }

  tbody {
    td {
      display: table-cell;
      width: 30px;
      height: 30px;
      text-align: center;
    }

    td[data-view='false'] {
      opacity: 0.5;
    }
  }
`;
