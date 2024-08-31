import styled from "styled-components";
import { DefaultTheme } from "../../../styles/Theme";

export const SignUpWrapper = styled.div`
 `;

export const ImageContainer = styled.div`
 
`;

export const Banner = styled.img`
  width:600px;
  height:650px;
  Position:absolute;
  top:20px;
  left:760px;


  @media only screen and (max-width: 1200px) {
    width: 80%;
  }

  @media only screen and (max-width: 600px) {
    width: 70%;
  }

  @media only screen and (max-width: 580px) {
    display: none;
  }
`;

export const LogoToken = styled.img`
  display:block;
  margin-top:-200px;
`;
export const SignUpDetails = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 190px;
  margin-top: 150px;
`;

export const SignUpTitle = styled.h1<{ theme: DefaultTheme}>`
  width: 302px;
  height: 62px;
  color:${({ theme }) => theme.colors.whiteBorder};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 38px;
  font-weight: 300;
  line-height: 71.76px;
`;

export const SignUpText = styled.p<{ theme: DefaultTheme}>`
  width: 370px;
  height: 36px;
  color:${({ theme }) => theme.colors.whiteBorder};
  font-family:${({ theme }) => theme.fonts.main};
  font-size: 20px;
  font-weight: 250;
  line-height: 35.88px;
  text-align: center;
`;

export const SignUpButton = styled.button<{ theme: DefaultTheme}>`
  background: linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%);
  border: none;
  width: 100%;
  height: 54px;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-family:${({ theme }) => theme.fonts.main};
  font-size: 20px;
  font-weight: 400;
  line-height: 29.9px;
  text-align: center;
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: center;
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

  @media only screen and (max-width: 480px) {
    position: absolute;
    width: 283px;
    height: 244px;
    top: 50px;
    left: 10px;
  }
`;
