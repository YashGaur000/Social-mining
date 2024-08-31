import styled from "styled-components";
import { DefaultTheme } from "../../../styles/Theme";

export const MainPopUpScreen = styled.div`
  background: linear-gradient(180deg, #18264c 0%, #1f305f 100%);
  width: 460px;
  padding: 30px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 998;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media only screen and (max-width: 580px) {
    width: 360px;
  }
`;

export const PopUpScreenTitle = styled.div<{ theme: DefaultTheme}>`
display:flex;
  font-family:  ${({ theme }) => theme.fonts.main};
  font-size: 24px;
  font-weight: 300;
  line-height: 35.88px;
  
  color: ${({ theme }) => theme.colors.whiteBorder};
`;

export const PopUpScreenWrapper = styled.div`
 
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SocialMediaIcon = styled.img``;

export const PopScreenText = styled.h4<{ theme: DefaultTheme}>`
  font-family:  ${({ theme }) => theme.fonts.main};
  font-size: 16px;
  font-weight: 300;
  line-height: 23.92px;
  text-align: left;
  color: ${({ theme }) => theme.colors.whiteBorder};
  padding: 5px;
`;

export const ConnectionButtonWrapper = styled.div``;

export const PopUpConnectionButton = styled.button<{ theme: DefaultTheme}>`
background: linear-gradient(97.67deg, #0F1B3B 2.6%, #232938 94.56%);

  width: 100px;
  height: 29px;
  font-family:  ${({ theme }) => theme.fonts.main};
  font-size: 14px;
  font-weight: 350;
  line-height: 20.93px;
  text-align: center;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  padding: 5px;
  border:none;
  position:relative;
  display:flex;
  justify-content:center;
  align-items:center;

  &:: after {
    content: "";
    position: absolute;
    width:102px;
    height:31px;
    z-index:-1;
    border-radius:10px;
    background: linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%);
   }

   &:focus,active{
    background: linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%);
   }

   &:focus{
    outline: none;
    border: none;
}
`;

export const PopUpScreenCard = styled.div`
  display: flex;
  gap:14px;
`;

export const PopUpScreenContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
`;
