import styled from '@emotion/styled';
import { Common } from '../../styles/common';

export const HeaderContainer = styled.div`
  position: relative;
  height: ${Common.layout.headerHeight};
  width: 100%;
  padding: 0 40px;
  display: grid;
  align-items: center;
`;

export const HeaderToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;
export const Profile = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  margin-left: 20px;
  border-radius: 100%;
  background-color: #00000010;
`;
