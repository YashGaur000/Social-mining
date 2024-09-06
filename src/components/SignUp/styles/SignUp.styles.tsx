import styled from "styled-components";
import { DefaultTheme } from "../../../styles/Theme";

export const SignUpWrapper = styled.div`
  width: 100vw;
  height: 90vh;
  
  
`;

export const ImageContainer = styled.div`
  width:40%;
  display:flex;
  
  
`;

export const Banner = styled.img`
  width: 40%;
  height: 100%;
  position: absolute;
  top: 10px;
  right: 1px;

  
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

export const SignUpDetailsWrapper = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:180px ;

`

export const SignUpDetails = styled.div`
  width:50%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;



`;

export const SignUpTitle = styled.h1<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 3rem;
  font-weight: 300;
  display: flex;
  line-height: 71.76px;
  width: 362px;
  height: 72px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 3rem;
  font-weight: 300;
  display: flex;
  line-height: 71.76px;
  }

 
`;

export const SignUpText = styled.p<{ theme: DefaultTheme }>`
  width: 440px;
  height: 36px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1.5rem;
  font-weight: 250;
  line-height: 35.88px;
  text-align: center;

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
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 29.9px;
  text-align: center;
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: center;

`;

export const SignUpToken = styled.div`
  
 
`;

export const SignUpTokens = styled.img`
  width: 283px;
  height: 204px;
  margin:15px 0px 0px 320px ;

`;
