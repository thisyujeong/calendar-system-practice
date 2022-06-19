import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0.85714rem 1.142857rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  width: 244px;
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1;
  svg {
    width: 28px;
    height: 28px;
    margin-right: 8px;
    vertical-align: bottom;
  }
`;

export const HeaderToolbar = styled.div`
  display: flex;
  align-items: center;
`;

export const Profile = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #00000010;
`;
