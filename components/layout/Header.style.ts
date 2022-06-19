import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  position: relative;
  height: 77px;
  width: 100%;
  padding: 0 16px;
  display: grid;
  grid-template-columns: 260px 1fr;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  width: 244px;
  font-size: 28px;
  font-weight: bold;
  line-height: 1;
  svg {
    width: 36px;
    height: 36px;
    margin-right: 8px;
    line-height: 1;
    font-size: 0;
    vertical-align: middle;
  }
`;

export const HeaderToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Profile = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #00000010;
`;
