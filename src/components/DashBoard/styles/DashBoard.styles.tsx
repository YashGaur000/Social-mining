import styled from "styled-components";
import { DefaultTheme } from "../../../styles/Theme";

export const MainContaier = styled.div<{ theme: DefaultTheme}>`
 
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const Heading = styled.p<{ theme: DefaultTheme}>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 36px;
  font-weight: 300;
  line-height: 53.82px;
  color: ${({ theme }) => theme.colors.whiteBorder};

 
 
`;

export const SideImage = styled.img`
width: 32px;
height: 84px;

`;

export const DashBoardWrapper = styled.div`
width:100%;
height:84px;
display:flex;
align-items:center;
justify-content:space-between;
`

export const DashBoardCard = styled.div`
  width: 100%;
  height: 84px;
  border-radius: 24px;
  padding: 8px;
  display: flex;
  align-items: center;
  border-radius:24px;
 


  @media only screen and (max-width: 580px) {
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
  }
`;

export const MiddleLogo = styled.img`
position:fixed;
width: 35vw;
height: 30vw;
top: 26vh;
left: 56%;
transform: translateX(-50%);
opacity: 0.12px;

`

export const DashBoardCards = styled.div`
  width:100%;
  height:80vh;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin:1px 100px 1px 100px;

 @media only screen and (max-width: 580px){
   width:100%;
   margin: 50px 10px 202px 10px;
   }
`;

export const DashBoardText = styled.p<{ theme: DefaultTheme}>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 24px;
  font-weight: 300;
  line-height: 35.88px;
  text-align: left;
  padding:50px;
  color:${({ theme }) => theme.colors.whiteBorder};

  @media only screen and (max-width:780px) {
    font-size:1.2em;
    line-height:28px;
  }
  @media only screen and (max-width:580px) {
    font-size:1.2em;
    line-height:28px;
  }
`;

export const DashBoardButton = styled.button<{ theme: DefaultTheme}>`
  width: 129px;
  height: 40px;
  padding: 10px 20px;
  border-radius: 12px;
  opacity: 1; 
  color: ${({ theme }) => theme.colors.whiteBorder};
  background: linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%);
  border: none;
  font-family:${({ theme }) => theme.fonts.main};
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
    width:auto;
    font-size: 14px; 
    padding:8px 16px;
  
  }
`;

export const DashBoardFooterText = styled.p<{ theme: DefaultTheme}>`
font-family: ${({ theme }) => theme.fonts.main};
font-size: 18px;
font-weight: 300;
line-height: 29.9px;
text-align: center;
color: ${({ theme }) => theme.colors.whiteBorder};
margin:10px;


`