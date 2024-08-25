import styled from "styled-components";
import { DefaultTheme } from "../../../styles/Theme";

export const TaskBoxFullWrapper = styled.div<{ theme: DefaultTheme}>`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (max-width: 1200px) {
    padding: 15px;
  }

  @media (max-width: 1030px) {
    padding: 10px;
  }

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

export const TaskBoxWrapper = styled.div<{ theme: DefaultTheme}>`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TaskBox = styled.div<{ theme: DefaultTheme}>`
  display: flex;
  flex-direction: column;
  gap: 40px;
  font-family: ${({ theme }) => theme.fonts.main};

  @media (max-width: 1200px) {
    gap: 30px;
  }

  @media (max-width: 1030px) {
    gap: 25px;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

export const TitleBox = styled.div<{ theme: DefaultTheme}>`
  display: flex;
  align-items: center;
  font-size: 24px;

  @media (max-width: 1200px) {
    font-size: 22px;
  }

  @media (max-width: 1030px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const SocialLogo = styled.img<{ 
  Position?: string;
  theme: DefaultTheme;
  margin?: string;
  width?: string;
  height?: string;
  Zindex?: string;
}>`
  z-index: ${({ Zindex }) => Zindex};
  positon: ${({ Position }) => Position};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => (margin ? margin : '0px')};
`;

export const LetsGoButton = styled.div<{ 
  margin?: string; 
  theme: DefaultTheme}>`
  display: flex;
  margin: ${({ margin }) => (margin ? margin : '0px')};  
  width: 130px;

  @media (max-width: 768px) {
    margin: 10px 0 0 0;
    align-self: flex-end;
  }
`;

export const ListBox = styled.div<{ theme: DefaultTheme}>`
  font-size: 20px;
  line-height: 29.9px;
  font-family: ${({ theme }) => theme.fonts.main};

  @media (max-width: 1200px) {
    font-size: 18px;
    line-height: 28px;
  }

  @media (max-width: 1030px) {
    font-size: 16px;
    line-height: 26px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

export const ListItem = styled.li<{ 
  theme: DefaultTheme;
  alignitems?: string;
}>`
  display: flex;
  align-items: ${({ alignitems }) => (alignitems ? alignitems : 'center' )};
  gap: 10px;
  margin-bottom: 10px;

  @media (max-width: 1200px) {
    gap: 8px;
    margin-bottom: 8px;
  }

  @media (max-width: 1030px) {
    gap: 6px;
    margin-bottom: 6px;
  }

  @media (max-width: 768px) {
    gap: 5px;
    margin-bottom: 5px;
  }
`;

export const Score = styled.p`
  font-size: 20px;
  margin-top: 100px;

  @media (max-width: 1200px) {
    font-size: 18px;
    margin-top: 40px;
  }

  @media (max-width: 1030px) {
    font-size: 16px;
    margin-top: 30px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    margin-top: 20px;
  }
`;