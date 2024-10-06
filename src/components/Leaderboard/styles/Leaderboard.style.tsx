import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const BoardWrapper = styled.div<{
  theme: DefaultTheme;
  margin?: string;
}>`
  position: relative;
  z-index: 1;
  margin: auto;
  margin: ${({ margin }) => margin} ?? '40px 0px 0px 0px';

  width: 60%;
  @media (max-width: 1000px) {
    padding: 10px;
    width: 80%;
  }
  @media (max-width: 768px) {
    padding: 10px;
    width: 90%;
  }
  @media (max-width: 600px) {
    padding: 0px;
    width: 100%;
  }
  @media (max-width: 500px) {
    padding: 0px;
    width: 100%;
  }
`;

export const SocialLogoDiv = styled.div<{ theme: DefaultTheme }>`
  position: absolute;
  z-index: 2;
  margin-left: -100px;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-left: -50px;
    margin-top: 50px;
  }
`;

export const AirdropBox = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 640px) {
    display: none;
  }
`;
export const AirdropBoxSmallSize = styled.div`
  display: none;
  gap: 40px;
  margin: auto;
  justify-content: center;
  align-items: center;

  margin-bottom: 15px;
  @media (max-width: 640px) {
    display: flex;
  }
`;
export const RankWithNameWrapper = styled.div`
  display: flex;
`;
export const AirdropTitle = styled.label<{ theme: DefaultTheme }>`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background: ${({ theme }) => theme.colors.title};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  @media (max-width: 450px) {
    font-size: 16px;
  }
`;

export const AirdropInfoBox = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
  }
`;

export const AirdropInfo = styled.div<{ theme: DefaultTheme }>`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.main};
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
export const ParticipantTitleSmallscreen = styled.p<{ theme: DefaultTheme }>`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.main};
  margin-bottom: 20px;
  display: none;
  text-align: left;
  color: ${({ theme }) => theme.colors.whiteBorder};
  @media (max-width: 640px) {
    font-size: 16px;
    display: block;
  }
  @media (max-width: 450px) {
    font-size: 12px;
    display: block;
  }
`;

export const AirdropInfoSub = styled.div<{ theme: DefaultTheme }>`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.whiteBorder};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const RankandPointFullBoxWrapper = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: center;

  margin-top: 10px;
`;

export const RankandPointBoxWrapper = styled.div<{
  theme: DefaultTheme;
  padding?: string;
  margin?: string;
  flex?: string;
  alignitems?: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  align-items: ${({ alignitems }) => alignitems};
  padding: ${({ padding }) => (padding ? padding : '20px')};
  margin: ${({ margin }) => margin};
  flex: ${({ flex }) => flex};

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const RankandPointBox = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0px 30px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const RankandPointValueBox = styled.div<{ theme: DefaultTheme }>`
  height: 300px;
  overflow-y: auto;
  padding-right: 45px;
  display: flex;
  flex-direction: column;

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

  @media (max-width: 600px) {
    padding-right: 20px;
  }
`;

export const UserRankandPointValueBox = styled.div<{ theme: DefaultTheme }>`
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
    // height: 200px;
    // padding-right: 20px;
  }
`;

export const Medal = styled.div<{ theme: DefaultTheme }>`
  @media (max-width: 768px) {
    // Add responsive styles for smaller screens
  }
`;

export const ParticipantBox = styled.div<{ margin?: string; padding?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: ${({ padding }) => padding ?? '10px 0'};
  font-size: 20px;
  margin: ${({ margin }) => margin};
`;

export const UserRankCard = styled.div<{ theme: DefaultTheme }>`
  border: 1px solid transparent;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.card},
    ${({ theme }) => theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  padding: 20px 30px;
  margin: 0px 20px;
  display: flex;
  @media (max-width: 768px) {
    margin: 0;
    padding: 20px 20px;
  }
`;
export const RankBox = styled.div<{
  theme: DefaultTheme;
  display?: string;
  flex?: string;
}>`
  display: ${({ display }) => display};
  flex: ${({ flex }) => flex};
`;

export const Name = styled.div<{
  theme: DefaultTheme;
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

export const EarnedPoints = styled.div<{
  theme: DefaultTheme;
  display?: string;
  flex?: string;
  margin?: string;
}>`
  display: ${({ display }) => display};
  margin: ${({ margin }) => (margin ? margin : '0px 0px 0px auto')};
  flex: ${({ flex }) => flex};
`;

export const Rankers = styled.div<{ theme: DefaultTheme; Fontsize?: string }>`
  font-size: ${({ Fontsize }) => Fontsize};
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  @media (max-width: 768px) {
    font-size: ${({ Fontsize }) =>
      Fontsize ? `calc(${Fontsize} * 0.8)` : '16px'};
  }
  @media (max-width: 450px) {
    font-size: 14px;
  }
`;

export const PointBox = styled.div<{
  theme: DefaultTheme;
  Displaydirection?: string;
}>`
  display: flex;
  flex-direction: ${({ Displaydirection }) => Displaydirection};
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const Points = styled.div<{ theme: DefaultTheme; Fontsize?: string }>`
  margin-right: 40px;
  font-size: ${({ Fontsize }) => Fontsize};
  font-family: ${({ theme }) => theme.fonts.main};

  @media (max-width: 768px) {
    font-size: ${({ Fontsize }) =>
      Fontsize ? `calc(${Fontsize} * 0.8)` : '14px'};
    margin-right: 20px;
  }
  @media (max-width: 450px) {
    font-size: 14px;
  }
`;
