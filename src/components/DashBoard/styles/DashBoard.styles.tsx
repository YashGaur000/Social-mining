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
  margin-right: 4%;

  @media only screen and (max-width: 780px) {
    display: none;
  }
`;

export const SideImageWrapper = styled.div`
  display: flex;
`;

export const SideImage = styled.img`
  width: 32px;
  height: 84px;

  @media only screen and (max-width: 898px) {
    position: absolute;
    height: 100px;
    left: -8px;
    top: -8px;
  }

  @media only screen and (max-width: 780px) {
    position: absolute;
    width: 38px;
    height: 100px;
    left: -8px;
    top: -1px;
  }

  @media only screen and (max-width: 580px) {
    position: absolute;
    height: 100px;
    width: 40px;
    left: -12px;
    top: -1px;
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
    height: 86px;
  }

  @media only screen and (max-width: 580px) {
    width: 100%;
    height: 86px;
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
  position: relative;

  @media only screen and (max-width: 780px) {
    width: 100%;
    height: 100px;
    justify-content: space-between;
  }

  @media only screen and (max-width: 580px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const MobileScreenHeader = styled.h1<{ theme: DefaultTheme }>`
  display: none;

  @media only screen and (max-width: 780px) {
    display: block;
    font-family: ${({ theme }) => theme.fonts.main};
    font-size: 36px;
    font-weight: 300;
    line-height: 53.82px;
    color: ${({ theme }) => theme.colors.whiteBorder};
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
  cursor: default;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

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

  @media only screen and (max-width: 1080px) {
    margin: 40px 80px 50px 0px;
  }

  @media only screen and (max-width: 780px) {
    margin-top: 10px;
  }
`;

export const DashBoardText = styled.p<{ theme: DefaultTheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 35.88px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  display: flex;

  @media only screen and (max-width: 800px) {
    font-size: 1.3rem;
    margin-left: 12px;
  }

  @media only screen and (max-width: 780px) {
    font-size: 1rem;
    margin-left: 22px;
  }

  @media only screen and (max-width: 580px) {
    width: 100%;
    font-size: 14px;
    line-height: 18.12px;
    text-align: start;
    align-items: center;
    margin-left: 6px;
  }
`;

export const DashBoardButton = styled.button<{ theme: DefaultTheme }>`
  padding: 10px 20px;
  margin-right: 20px;
  border-radius: 12px;
  width: 129px;
  height: 40px;
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

  @media only screen and (max-width: 780px) {
    width: 119x;
    font-size: 14px;
    padding: 8px 16px;
    line-height: 14.34px;
    margin-right: 1px;
  }

  @media only screen and (max-width: 580px) {
    padding: 2px 4px;
    max-width: 73px;
    height: 30px;
    font-size: 10px;
    margin-right: 1px;
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

  @media only screen and (max-width: 780px) {
    font-size: 14px;
  }
`;
