import styled from '@emotion/styled';
import { Common } from '../../styles/common';

export const Container = styled.div`
  display: flex;
  position: relative;
  /* grid-template-columns: 260px 1fr; */
  height: 100vh;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  /* grid-template-rows: ${Common.layout.headerHeight} 1fr; */
`;

export const Main = styled.main`
  padding: 16px 40px;
  height: ${Common.layout.bodyHeight};
`;
