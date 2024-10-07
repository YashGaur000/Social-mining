import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const MainContaier = styled.div<{ theme: DefaultTheme }>`
  width: 100vw;
  text-align: center;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 780px) {
  }
`;

export const Heading = styled.p<{ theme: DefaultTheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 36px;
  font-weight: 300;
  line-height: 53.82px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  margin-right: 7%;
  position: relative;

  @media only screen and (max-width: 780px) {
    display: none;
    top: 50px;
  }
`;

export const SideImageWrapper = styled.div`
  display: flex;
`;

export const SideImage = styled.img`
  height: 80px;

  @media only screen and (max-width: 780px) {
    height: 100px;
  }
`;

export const DashBoardWrapper = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 780px) {
    width: 100%;
    height: 74px;
    justify-content: space-between;
  }
`;

export const DashBoardCardsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 24px;

  @media only screen and (max-width: 780px) {
    width: 100%;
  }
`;
export const DashBoardCard = styled.div`
  background: linear-gradient(180deg, #18264c 0%, #1f305f 100%);
  width: 100%;
  height: 84px;
  border-radius: 24px;
  padding-right: 8px;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 780px) {
    width: 100%;
    height: 99px;
    justify-content: space-between;
  }
`;

export const MiddleLogo = styled.img<{
  theme: DefaultTheme;
  Left?: string;
  Zindex?: string;
  width?: string;
  height?: string;
  Top?: string;
  opacity?: string;
}>`
  position: fixed;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  top: ${({ Top }) => Top};
  left: ${({ Left }) => Left};
  transform: translateX(-40%);
  opacity: ${({ opacity }) => opacity};
  z-index: ${({ Zindex }) => Zindex};

  @media only screen and (max-width: 780px) {
    margin: 10px;
    width: 300px;
    height: 400px;
  }
`;

export const DashBoardCards = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 40px 100px 1px 100px;

  @media only screen and (max-width: 780px) {
    margin: 10px;
  }
`;

export const DashBoardText = styled.p<{ theme: DefaultTheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 24px;
  font-weight: 300;
  line-height: 35.88px;

  padding: 10px;
  color: ${({ theme }) => theme.colors.whiteBorder};

  @media only screen and (max-width: 780px) {
    font-size: 1.2em;
    line-height: 28px;
  }
  @media only screen and (max-width: 580px) {
    font-size: 1.2em;
    line-height: 28px;
  }
`;

export const DashBoardButton = styled.button<{ theme: DefaultTheme }>`
  width: 129px;
  height: 40px;
  padding: 10px 20px;
  margin-right: 20px;
  border-radius: 12px;
  opacity: 1;
  color: ${({ theme }) => theme.colors.whiteBorder};
  background: linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%);
  border: none;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 16px;
  font-weight: 400;
  line-height: 23.92px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }

  @media only screen and (max-width: 580px) {
    width: auto;
    font-size: 14px;
    padding: 8px 16px;
  }
`;

export const DashBoardFooterText = styled.p<{ theme: DefaultTheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 18px;
  font-weight: 300;
  line-height: 29.9px;
  text-align: center;
  color: ${({ theme }) => theme.colors.whiteBorder};
  margin-top: 20px;
`;
