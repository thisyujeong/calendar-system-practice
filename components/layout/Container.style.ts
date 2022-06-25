import styled from '@emotion/styled';
import { Common } from '../../styles/common';

export const Container = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  overflow: auto;
`;

export const Main = styled.main`
  padding: 16px 40px;
  height: ${Common.layout.bodyHeight};
`;
