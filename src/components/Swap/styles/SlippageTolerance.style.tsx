import { styled } from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const SlippageWrapper = styled.div<{
  display: string;
  theme: DefaultTheme;
}>`
  display: ${({ display }) => display};
  background: ${({ theme }) => theme.colors.card};
  padding: 10px;
  width: 100%;
  border-radius: 20px;
  margin: 15px 0px;
  @media (max-width: 900px) {
    width: 100%;
    margin-top: 40px;
  }
`;

export const SidebarTitle = styled.h2<{
  fontSize: number;
  theme: DefaultTheme;
}>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.whiteBorder};
`;

export const ToleranceButtons = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 20px;
`;

export const ToleranceButton = styled.button<{ theme: DefaultTheme }>`
  flex: 1;
  padding: 8px;
  background: transparent;
  color: ${({ theme }) => theme.colors.greyDark};
  border: 1px solid ${({ theme }) => theme.colors.whiteBorder};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.hover};
  }
`;