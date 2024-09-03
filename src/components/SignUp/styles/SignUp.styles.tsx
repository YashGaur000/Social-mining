import styled from "styled-components";
import { DefaultTheme } from "../../../styles/Theme";

export const SignUpWrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
`;

export const Banner = styled.img`
width: 700px;
height:fit-content;
position:absolute;
top:10px;
right:10px;


  @media only screen and (max-width: 1200px) {
    width: 560px;
    height: 748px;
  }

  @media only screen and (max-width: 1100px) {
    width: 400px;
    height: 600px;
  }

  @media only screen and (max-width: 900px) {
    width: 300px;
    height: 500px;
  }

  @media only screen and (max-width: 780px) {
    display: none;
  }
`;
export const LogoTokenWrapper = styled.div`
  position: relative;
`;

export const LogoToken = styled.img`
  width: 88px;
  height: 36px;
  position: absolute;
  top: 40px;
  left: 60px;
`;

export const SignUpDetails = styled.div`
  
  margin-left:150px;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap:10px;
  height: 190px;

  position:absolute;
  top:295px;
  left:108px;
 

  @media only screen and (max-width: 580px) {
    display:flex;
    justify-content:center;
  }
`;

export const SignUpTitle = styled.h1<{ theme: DefaultTheme }>`
  width: 400px;
  height: 72px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 48px;
  font-weight: 300;
  display:flex;
  line-height: 71.76px;
  @media only screen and (max-width: 900px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 780px) {
    font-size: 36px;
  }

   @media only screen and (max-width: 500px) {
    
  }
`;

export const SignUpText = styled.p<{ theme: DefaultTheme }>`
  width: 440px;
  height: 36px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 24px;
  font-weight: 250;
  line-height: 35.88px;
  text-align: center;
  @media only screen and (max-width: 900px) {
    font-size: 14px;
  }
     @media only screen and (max-width: 780px) {
    font-size: 20px;
  }
`;

export const SignUpButton = styled.button<{ theme: DefaultTheme }>`
  background: linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%);
  border: none;
  width: 444px;
  height: 54px;

  border-radius: 12px;
  opacity: 0px;

  border-radius: 12px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 20px;
  font-weight: 400;
  line-height: 29.9px;
  text-align: center;
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: center;

  @media only screen and (max-width: 900px) {
    font-size: 14px;
    width: 300px;
    margin-left: 55px;
  }

  @media only screen and (max-width: 780px) {
    font-size: 14px;
    width: 300px;
    margin-left:0px;
  }
`;

export const SignUpToken = styled.div`
  position: relative;
`;

export const SignUpTokens = styled.img`

  position: absolute;
  width: 350px;
  height: 300px;
  top: 30px;
  left: 80px;

  @media only screen and (max-width: 580px) {
    position: absolute;
    width: 200px;
    height: 170px;
    
  }
`;
