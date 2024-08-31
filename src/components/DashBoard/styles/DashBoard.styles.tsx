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

export const DashBoardCard = styled.div`
 
background:linear-gradient(188.32deg, #47FF99 -7.09%, #3EACFC 99.48%);
  
  width: 100%;
  height: 80px;
  border-radius: 24px;
  padding: 8px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  position: relative;

  z-index:2;
  
  
   &::after{
   content:'';
   position:absolute;
   
   
   z-index:-1;
   background: linear-gradient(180deg, #18264c 0%, #1f305f 100%);
   width:100%;
   height:80px;
   border-radius:24px;
   padding:0px 0px 0px 6px;
   
   
   
   }

  @media only screen and (max-width: 580px) {
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
  }
`;

export const DashBoardCards = styled.div`
 
  width:100%;
  margin: 50px 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;

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
font-size: 20px;
font-weight: 300;
line-height: 29.9px;
text-align: center;
color: ${({ theme }) => theme.colors.whiteBorder};
margin:30px;


`