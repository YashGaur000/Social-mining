import styled from "styled-components";
import { DefaultTheme } from "../../../styles/Theme";

export const DashBoardConnectionCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media only screen and (max-width: 580px) {
    flex-wrap:wrap;
    
    
  }
  
`;

export const DashBoardConnectionCard = styled.div`
 background: linear-gradient(180deg, #18264C 0%, #1F305F 100%);
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 width:20%;
height: 102px;
border-radius: 16px;
opacity: 0.4px;

`;


export const DashBoardConnectionText = styled.p< {theme:DefaultTheme}>`
  
  display: flex;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 16px;
  font-weight: 300;
  line-height: 35.88px;
  color: ${({ theme }) => theme.colors.whiteBorder};
`;

export const DashBoardConnectionButton = styled.button<{theme:DefaultTheme}>`
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
 background: ${({theme}) => theme.colors.swapIconBackground},
    ${({ theme }) =>  theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  gap: 5px;

  &:focus,
  active {
    background: linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%);
  }

`;

 export const DashBoardButtonsWrapper = styled.label`
 cursor:pointer;
 line-height: 12px;
 `


export const LoginTickImage = styled.img`
width:12px;
height:12px;
margin-left:4px;

`;



export const DashBoardConnectionImage = styled.img`
  width: 14px;
  height: 14px;
 
`;


export const MainContaier = styled.div<{ theme: DefaultTheme }>`
  width: 100vw;
  text-align: center;
  display: flex;
  justify-content: center;
`;


export const Heading = styled.p<{ theme: DefaultTheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 36px;
  font-weight: 300;
  line-height: 53.82px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  margin-right: 7%;

    @media only screen and (max-width: 580px) {
 
    display:flex;
    align-items:center;
    
    
    
  }
`;

export const SideImageWrapper = styled.div`
display:flex;

`;

export const SideImage = styled.img`
  width: 32px;
  height: 80px;
`;

export const DashBoardWrapper = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DashBoardCard = styled.div`
  background: linear-gradient(180deg, #18264C 0%, #1F305F 100%);
qq
  width: 100%;
  height: 84px;
  border-radius: 24px;
  padding-right:8px;
  display: flex;
  align-items: center;
  border-radius: 24px;

  @media only screen and (max-width: 580px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MiddleLogo = styled.img<{
  theme: DefaultTheme;
  Left?: string;
  Zindex?: string;
  Width?: string;
  Height?: string;
  Top?: string;
  Opacity?: string;
}>`
  position: fixed;
  width: ${({ Width }) => Width};
  height: ${({ Height }) => Height};
  top: ${({ Top }) => Top};
  left: ${({ Left }) => Left};
  transform: translateX(-40%);
  opacity: ${({ Opacity }) => Opacity};
  z-index: ${({ Zindex }) => Zindex};

  
`;

export const DashBoardCards = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 40px 100px 1px 100px;

  @media only screen and (max-width: 580px) {
    width: 100%;
    margin: 50px 20px 0px 20px;
  }
`;

export const DashBoardText = styled.p<{ theme: DefaultTheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 24px;
  font-weight: 300;
  line-height: 35.88px;
  text-align: left;
  padding: 50px;
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
`;
