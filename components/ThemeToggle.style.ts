import styled from '@emotion/styled';

export const ToggleContainer = styled.div`
  border-radius: 50%;
  transition: all 0.2s ease, transform 0.1s ease;

  cursor: pointer;
  &:hover {
    background: #eff1f9;
  }

  &:active {
    transform: scale(0.9);
  }
`;
export const ToggleButton = styled.div`
  width: 40px;
  height: 40px;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(/images/theme-light.svg);

  &[data-theme='dark'] {
    background-image: url(/images/theme-dark.svg);
    animation: spin 0.3s ease;
  }
  &[data-theme='light'] {
    background-image: url(/images/theme-light.svg);
    animation: spin 0.3s ease;
  }
`;
