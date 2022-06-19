import styled from '@emotion/styled';
import { Common } from '../../styles/common';

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 260px 1fr;
  height: ${Common.layout.bodyHeight};
`;

export const Main = styled.main`
  padding: 16px;
`;
