import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const SignUpWrapper = styled.div`
  width: 100%;
  height: 90vh;
`;

export const ImageContainer = styled.div`
  width: 40%;
  display: flex;
`;

export const TwitterImage = styled.img``;

export const WalletImage = styled.img``;

export const Banner = styled.img`
  width: 40%;
  height: 98%;
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

  @media only screen and (max-width: 780px) {
    top: 40px;
    left: 20px;
  }
`;

export const SignUpDetailsWrapper = styled.div`
  gap: 6px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 580px) {
    margin-top: 60px;
  }
`;

export const SignUpDetails = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 780px) {
    width: 100%;
  }
`;

export const SignUpTitleAndTextWrapper = styled.div`
  @media only screen and (max-width: 780px) {
  }
`;

export const SignUpTitle = styled.h1<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 3rem;
  font-weight: 300;
  display: flex;
  line-height: 71.76px;
  width: 392px;
  height: 72px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-family: ${({ theme }) => theme.fonts.main};
  display: flex;
  line-height: 71.76px;

  @media only screen and (max-width: 1280px) {
    font-size: 2.5rem;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 580px) {
    width: 352px;
    height: 52px;
    align-items: center;
    justify-content: center;
    font-size: 2.4rem;
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

  @media only screen and (max-width: 780px) {
    width: 380px;
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 580px) {
    width: 380px;
    font-size: 1.1rem;
  }
`;

export const SignUpButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const SignUpButtonWallet = styled.button<{
  theme: DefaultTheme;
  width?: string;
  height?: string;
  margin?: string;
}>`
  background: linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%);
  border: none;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  border-radius: 12px;
  opacity: 0px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  font-weight: 400;
  line-height: 29.9px;
  text-align: center;
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: center;

  @media only screen and (max-width: 740px) {
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 56px;
  }

  @media only screen and (max-width: 580px) {
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 56px;
  }
`;
export const SignUpButtonTwitter = styled.button<{ theme: DefaultTheme }>`
  background: linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%);
  border: none;
  width: 224px;
  height: 56px;
  border-radius: 12px;
  opacity: 0px;

  color: ${({ theme }) => theme.colors.whiteBorder};
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors.swapIconBackground},
    ${({ theme }) => theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  font-weight: 400;
  line-height: 29.9px;
  text-align: center;
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: center;

  @media only screen and (max-width: 780px) {
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 56px;
  }

  @media only screen and (max-width: 580px) {
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 56px;
  }
`;

export const SignUpToken = styled.div`
  display: none;
  @media only screen and (max-width: 640px) {
    display: block;
  }
`;

export const SignUpTokens = styled.img`
  @media only screen and (max-width: 640px) {
    width: 240px;
    margin-top: 20px;
  }
`;
