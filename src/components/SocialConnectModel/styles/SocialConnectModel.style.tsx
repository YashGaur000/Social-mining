import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const DashBoardConnectionCards = styled.div<{ display?: string }>`
  width: 100%;
  display: flex;
  gap: 70px;
  margin-left: 24px;

  @media only screen and (max-width: 900px) {
    gap: 50px;
    margin-left: 10px;
  }

  @media only screen and (max-width: 780px) {
    width: 100%;
    height: 100vh;
    gap: 20px;
    flex-direction: column;
    display: ${({ display }) => display ?? 'flex'};
    margin-top: 20px;
    margin-left: 2px;
  }
`;

export const DashBoardConnectionCard = styled.div`
  background: linear-gradient(180deg, #18264c 0%, #1f305f 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 102px;
  border-radius: 16px;
  position: relative;

  @media only screen and (max-width: 780px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    gap: 8px;
  }

  @media only screen and (max-width: 580px) {
    flex-direction: row;
    width: 100%;
    gap: 8px;
    align-items: center;
  }
`;

export const SocialConnectModelImage = styled.img`
  display: none;

  @media only screen and (max-width: 780px) {
    display: block;
    position: absolute;
    left: -10px;
    width: 38px;
  }

  @media only screen and (max-width: 580px) {
    display: block;
    position: absolute;
    left: -10px;
    width: 38px;
  }
`;

export const DashBoardConnectionText = styled.p<{ theme: DefaultTheme }>`
  display: flex;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 16px;
  font-weight: 300;
  line-height: 35.88px;
  color: ${({ theme }) => theme.colors.whiteBorder};
`;

export const DashBoardConnectionButton = styled.button<{ theme: DefaultTheme }>`
  width: 130px;
  height: 30px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 14px;
  font-weight: 350;
  line-height: 20.93px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors.swapIconBackground},
    ${({ theme }) => theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  gap: 5px;

  &:focus,
  active {
    background: linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%);
  }

  @media only screen and (max-width: 580px) {
    width: 100px;
  }
`;

export const DashBoardButtonsWrapper = styled.label`
  cursor: pointer;
  line-height: 12px;
`;

export const LoginTickImage = styled.img`
  width: 12px;
  height: 12px;
  margin-left: 4px;
`;

export const DashBoardConnectionImage = styled.img`
  width: 14px;
  height: 14px;
`;
