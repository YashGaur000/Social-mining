import styled from "styled-components";
import { DefaultTheme } from "../../../styles/Theme";

export const BoardWrapper = styled.div<{ theme: DefaultTheme }>`
  position: relative;
  z-index: 1;
  margin-top: 40px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const SocialLogoDiv = styled.div<{ theme: DefaultTheme}>`
  position: absolute;
  z-index: 2;
  margin-left: -100px;
  margin-top: 100px;
  
  @media (max-width: 768px) {
    margin-left: -50px;
    margin-top: 50px;
  }
`;

export const AirdropBox = styled.div<{ theme: DefaultTheme}>`
  display: flex;
  gap: 80px;
  margin-bottom: 40px;
  // margin-top: -40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const AirdropInfoBox = styled.div<{ theme: DefaultTheme}>`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const AirdropInfo = styled.div<{ theme: DefaultTheme}>`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.main};
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const AirdropInfoSub = styled.div<{ theme: DefaultTheme}>`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.main};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const RankandPointFullBoxWrapper = styled.div<{ theme: DefaultTheme
}>`
  display: flex;
  margin: 0px 0px 0px 80px;
`;

export const RankandPointBoxWrapper = styled.div<{ theme: DefaultTheme
  padding?: string;
  margin?: string;
  flex?: string;
  alignitems?: string;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({ alignitems }) => alignitems };
  padding: ${({ padding }) => padding ? padding : '20px'};
  margin: ${({ margin }) => margin };
  flex: ${({ flex }) => flex};

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const RankandPointBox = styled.div<{ theme: DefaultTheme}>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;


  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const RankandPointValueBox = styled.div<{ theme: DefaultTheme}>`
  height: 300px;
  overflow-y: auto;
  padding-right: 45px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #0f1d2d;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.buttonBackground};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.whiteBorder};
  }

  @media (max-width: 768px) {
    height: 200px;
    padding-right: 20px;
  }
`;

export const UserRankandPointValueBox = styled.div<{ theme: DefaultTheme}>`
  // height: 300px;
  // overflow-y: auto;
  // padding-right: 45px;
  


  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #0f1d2d;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.buttonBackground};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.whiteBorder};
  }

  @media (max-width: 768px) {
    height: 200px;
    padding-right: 20px;
  }
`;

export const Medal = styled.div<{ theme: DefaultTheme}>`
  @media (max-width: 768px) {
    // Add responsive styles for smaller screens
  }
`;

export const ParticipantBox = styled.div<{ margin?: string; 
  padding?: string;
}>`
  display: flex;
  align-items: center;
  padding: ${({ padding }) => padding ? padding : "10px 0"};
  font-size: 20px;
  margin: ${({ margin }) => margin };

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 16px;
  }
`;

export const RankBox = styled.div<{ theme : DefaultTheme
  display?: string;
  flex?: string;
}>`
  width: 100px;

  display: ${({ display }) => display};
  flex: ${({ flex }) => flex};

  @media (max-width: 768px) {
    width: 20px;
  }
`;

export const Name = styled.div<{ theme :  DefaultTheme
  display?: string;
  flex?: string;
  margin?: string;
}>`
  display: ${({ display }) => display};
  // flex: 1;
  flex: ${({ flex }) => flex};
  text-align: left;
  padding: 0px 0px 0px 20px;
  margin: ${({ margin }) => margin};

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const EarnedPoints = styled.div<{ theme : DefaultTheme
  display?: string;
  flex?: string;
  margin?: string;
}>`
  display: ${({ display }) => display};     
  margin: ${({ margin }) => margin ? margin :'0px 0px 0px auto'};
  flex: ${({ flex }) => flex};

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Rankers = styled.div<{ theme: DefaultTheme; Fontsize?: string;}>`
  font-size: ${({ Fontsize }) => Fontsize};
  font-family: ${({ theme }) => theme.fonts.main};

  @media (max-width: 768px) {
    font-size: ${({ Fontsize }) => Fontsize ? `calc(${Fontsize} * 0.8)` : '16px'};
  }
`;

export const PointBox = styled.div<{ theme: DefaultTheme; Displaydirection?: string;}>`
  display: flex;
  flex-direction: ${({ Displaydirection }) => Displaydirection};
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const Points = styled.div<{ theme: DefaultTheme; Fontsize?: string;}>`
  margin-right: 40px;
  font-size: ${({ Fontsize }) => Fontsize};
  font-family: ${({ theme }) => theme.fonts.main};

  @media (max-width: 768px) {
    font-size: ${({ Fontsize }) => Fontsize ? `calc(${Fontsize} * 0.8)` : '14px'};
    margin-right: 20px;
  }
`;

