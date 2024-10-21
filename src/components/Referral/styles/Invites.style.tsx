import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const InviteWrapper = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;

  width: 95%;
`;

export const CardContainer = styled.div<{
  theme: DefaultTheme;
  margin?: string;
  padding?: string;
  width?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width ?? 'auto'};
  margin: ${({ margin }) => margin ?? '0px'};
  padding: ${({ padding }) => padding ?? '0px'};
`;

export const InviteTitle = styled.p<{ theme: DefaultTheme }>`
  font-size: 20px;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const CopyPopup = styled.div<{ theme: DefaultTheme }>`
  width: 115px;
  height: 29px;
  position: absolute;
  top: -25px;
  right: -30px;
  transform: translateX(-50%);
  background: linear-gradient(180deg, #273762 0%, #2a3e75 100%);
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors.swapIconBackground},
    ${({ theme }) => theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`;
