import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const GlobalButton = styled.button<{
  theme: DefaultTheme;
  padding?: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  inProgress?: boolean;
  minwidth?: string;
  maxwidth?: string;
  margin?: string;
  fontsize?: number;
  smfontsize?: number;
}>`
  background: ${({ theme }) => theme.colors.buttonBackground};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-family: ${({ theme }) => theme.fonts.main};

  color: ${({ theme }) => theme.colors.text};
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '50px')};
  min-width: ${({ minwidth }) => minwidth};
  max-width: ${({ maxwidth }) => maxwidth};
  padding: ${({ padding }) => padding};
  border-radius: 12px;
  border: none;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  cursor: ${({ inProgress }) => (inProgress ? 'progress' : 'pointer')};
  margin: ${({ margin }) => (margin ? margin : '20px 0px')};
  font-size: ${({ fontsize }) => fontsize ?? '16'}px;
  &:hover {
    border-radius: 12px;

    border: 1px solid transparent;
    background:
      padding-box
        ${({ theme, disabled }) =>
          disabled ? theme.colors.grey : theme.colors.cardLight},
      border-box ${({ theme }) => theme.colors.buttonBackground};
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: ${({ smfontsize }) => smfontsize ?? '16'}px;
    margin-top: 10px;
  }
`;

export const ChainButton = styled.button<{
  padding: string;
  theme: DefaultTheme;
  width?: string;
  height?: string;
}>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  display: flex;
  align-items: center;
  padding: ${({ padding }) => padding};
  border: 2px solid transparent;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.background},
    ${({ theme }) => theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
`;

export const LaunchDappButton = styled.button<{
  isconnected: string;
  theme: DefaultTheme;
}>`
  padding: 12px 31.5px 12px 31.5px;
  border: 2px solid transparent;
  border-radius: 12px;
  background: ${({ theme, isconnected }) =>
      isconnected === 'true'
        ? theme.colors.buttonBackground
        : theme.colors.background},
    ${({ theme, isconnected }) =>
      isconnected === 'true'
        ? theme.colors.background
        : theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  cursor: pointer;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 29.9px;
  letter-spacing: 0.02em;
  text-align: center;
  color: ${({ theme, isconnected }) =>
    isconnected === 'true' ? theme.colors.text : theme.colors.buttonBackground};
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonBackground};
    color: ${({ theme }) => theme.colors.text};
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
  }

  &:hover span {
    background: white;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    padding: 10px 30px;
    font-size: 18px;
  }
`;

export const LaunchDappSpan = styled.span<{
  isconnected: string;
  theme: DefaultTheme;
}>`
  font-family: ${({ theme }) => theme.fonts.main};
  background: ${({ theme, isconnected }) =>
    isconnected === 'true' ? theme.colors.text : theme.colors.buttonBackground};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  transition: background 0.3s ease;
`;
