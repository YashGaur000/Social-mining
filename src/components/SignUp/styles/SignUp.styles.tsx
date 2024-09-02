import styled from "styled-components";
import { DefaultTheme } from "../../../styles/Theme";

export const SignUpWrapper = styled.div`
// border:2px solid red;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
float:right;

`;

export const Banner = styled.img`
width: 580px;
height: 628px;


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

 margin-left:100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 190px;
  @media only screen and (max-width: 580px) {
    display:flex;
    justify-content:center;
  }
`;

export const SignUpTitle = styled.h1<{ theme: DefaultTheme }>`
  width: 302px;
  height: 62px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 38px;
  font-weight: 300;
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
  width: 370px;
  height: 36px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 20px;
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

  border-radius: 12px 0px 0px 0px;
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
  width: 253px;
  height: 214px;
  top: 30px;
  left: 80px;

  @media only screen and (max-width: 580px) {
    position: absolute;
    width: 200px;
    height: 170px;
    
  }
`;
