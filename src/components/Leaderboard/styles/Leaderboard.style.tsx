import styled from "styled-components";
import { DefaultTheme } from "../../../styles/Theme";



// export const BackgroundImages = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   z-index: -1;
//   pointer-events: none;

//   &::before,
//   &::after {
//     content: '';
//     position: absolute;
//     width: 100px;
//     height: 100px;
//     background-image: url('social-mining\src\assets\bigtenexbg.svg');
//     background-repeat: no-repeat;
//     background-size: contain;
//   }

//   &::before {
//     top: 10%;
//     left: 5%;
//   }

//   &::after {
//     bottom: 10%;
//     right: 5%;
//   }

//   & > div::before,
//   & > div::after {
//     content: '';
//     position: absolute;
//     width: 100px;
//     height: 100px;
//     background-image: url('/path/to/your/image.svg');
//     background-repeat: no-repeat;
//     background-size: contain;
//   }

//   & > div::before {
//     top: 10%;
//     right: 5%;
//   }

//   & > div::after {
//     bottom: 10%;
//     left: 5%;
//   }
// `;


export const BoardWrapper = styled.div<{ theme: DefaultTheme }>`
  position: relative;
  z-index: 1;
  

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

export const RankandPointBoxWrapper = styled.div<{ theme: DefaultTheme}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

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

export const ParticipantBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  font-size: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 16px;
  }
`;

export const RankBox = styled.div<{ theme : DefaultTheme
  display?: string;
  flex?: string;
}>`
  width: 30px;
  display: ${({ display }) => display};
  flex: ${({ flex }) => flex};

  @media (max-width: 768px) {
    width: 20px;
  }
`;

export const Name = styled.div<{ theme :  DefaultTheme
  display?: string;
  flex?: string;
}>`
  display: ${({ display }) => display};
  // flex: 1;
  flex: ${({ flex }) => flex};
  text-align: left;
  padding: 0px 0px 0px 20px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const EarnedPoints = styled.div<{ theme : DefaultTheme
  display?: string;
  flex?: string;
}>`
  display: ${({ display }) => display};     
  margin-left: auto;
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

