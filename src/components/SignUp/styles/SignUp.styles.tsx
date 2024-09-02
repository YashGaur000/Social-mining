import styled from "styled-components";
import { DefaultTheme } from "../../../styles/Theme";

export const SignUpWrapper = styled.div`

  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageContainer = styled.div``;

export const Banner = styled.img`
 
  width: 560px;
  height: 648px;
  float: right;

  @media only screen and (max-width: 1200px) {
    width: 550px;
    height: 600px;
  }

  @media only screen and (max-width: 780px) {
    width: 500px;
    height: 550px;
  }

  @media only screen and (max-width: 580px) {
    display: none;
  }
`;

export const LogoToken = styled.img`
  width: 88px;
  height: 36px;
  position: absolute;
  top: 40px;
  left: 60px;
`;

export const SignUpDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: 190px;
  margin-left:100px;

  @media only screen and (max-width: 580px) {
    margin: auto;
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
`;

export const SignUpButton = styled.button<{ theme: DefaultTheme }>`
  background: linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%);
  border: none;
  width: 100%;
  height: 54px;
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-family: ${({ theme }) => theme.fonts.main};
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
