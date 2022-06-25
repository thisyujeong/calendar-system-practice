import styled from '@emotion/styled';

export const WeeklyInputBox = styled.div`
  position: relative;
  width: 100%;
  height: 38px;

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border: 0;
    height: 38px;
    padding: 8px 12px;
    background: transparent;
    border-bottom: 1px solid transparent;

    &:focus {
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
    }

    &:hover {
      border-color: #29b48b;
    }
  }
`;
