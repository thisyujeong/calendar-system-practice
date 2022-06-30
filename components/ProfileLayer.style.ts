import styled from '@emotion/styled';

export const ProfileLayerContainer = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  width: 160px;
  border-radius: 6px;
  border: 2px solid var(--border-color);
  background: var(--emphasis-bg);
  z-index: 10;

  ul {
    position: relative;
    z-index: 20;
    padding: 4px 0;

    li {
      a {
        display: block;
        width: 100%;
        padding: 6px 14px;
        line-height: 1.57;
        color: var(--text);
      }

      &:hover {
        background: var(--primary);
        a {
          color: var(--accent);
        }
      }
    }
  }
`;

export const ProfileMaskLayer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
