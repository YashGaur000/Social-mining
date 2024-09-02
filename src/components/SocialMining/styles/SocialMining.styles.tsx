import styled, { DefaultTheme } from "styled-components";

export const Main1container = styled.section<{ 
  theme: DefaultTheme;
  Marginbottom?: string;
}>`
  
  margin-top:40px;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-botton: ${({ Marginbottom }) => Marginbottom };
`;

export const LogoWrapper = styled.div`

  @media only screen and (max-width: 580px) {
    margin: 40px 0px 0px 0px;
  }
`;

export const LogoImage = styled.img`

  width: 88px;
  height: 36px;

`;
