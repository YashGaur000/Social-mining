import styled from "styled-components";
import { DefaultTheme } from "../../../styles/Theme";

export const BoardWrapper = styled.div<{ theme: DefaultTheme}>`

`;

export const SocialLogoDiv = styled.div<{ theme: DefaultTheme}>`
    position: absolute
    z-index: 2;
    margin-left: -100px;
    margin-top: 100px;
`;

export const AirdropBox = styled.div<{ theme: DefaultTheme}>`
    display: flex;
    gap: 150px;
    margin-bottom: 40px;
    
`;

export const AirdropInfoBox = styled.div<{ theme: DefaultTheme}>`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`;

export const AirdropInfo = styled.div<{ theme: DefaultTheme}>`
    font-size: 24px;
    font-family: ${({ theme }) => theme.fonts.main};
    margin-bottom: 12px;
`;

export const AirdropInfoSub = styled.div<{ theme: DefaultTheme}>`
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.main};
`;

export const RankandPointBoxWrapper = styled.div<{ theme: DefaultTheme}>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
`;

export const RankandPointBox = styled.div<{ theme: DefaultTheme}>`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`;

// export const RankandPointValueBox = styled.div<{ theme: DefaultTheme}>`
//     display: flex;
//     justify-content: space-between;
//     flex-direction: column;
//     gap: 30px;
// `;

export const RankandPointValueBox = styled.div`
  height: 300px; // Adjust this value as needed
  overflow-y: auto;
  padding-right: 45px; // Add some padding for the scrollbar
  
  // Optional: Customize the scrollbar
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #0f1d2d;;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #1cede3;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #13a8a0;
  }
`;

export const Medal = styled.div<{ theme: DefaultTheme}>`

`;

// export const ParticipantBox = styled.div<{ theme: DefaultTheme
//     Displaydirection?: string;
//     Margin?: string;
// }>`
// margin: ${({ Margin }) => Margin};
//     // display: flex;
//       display: flex;
//   align-items: center;
//   padding: 5px 0;
    
// `;

// export const Name = styled.div<{ theme: DefaultTheme
//     Displaydirection?: string;
// }>`
// margin-left: 30px;    
// margin-right: 80%;
//      display: flex;
//   align-items: center;
// `;

// export const EarnedPoints = styled.div<{ theme: DefaultTheme
//     Displaydirection?: string;
// }>`
    
// `;

// export const RankBox = styled.div<{ theme: DefaultTheme
//     Displaydirection?: string;
// }>`
//     display: flex;
//     flex-direction: ${({ Displaydirection }) => Displaydirection};
//     gap: 30px;
// `;

export const ParticipantBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  font-size: 20px;
`;

export const RankBox = styled.div`
  width: 30px;
//   text-align: center;
`;

export const Name = styled.div`
  flex: 1;
  margin-left: -400px;
`;

export const EarnedPoints = styled.div`
  margin-left: auto;
`;

export const Rankers = styled.div<{ theme: DefaultTheme;
    Fontsize?: string;
}>`
    font-size: ${({Fontsize}) => Fontsize};
    font-family: ${({ theme }) => theme.fonts.main};
`;

export const PointBox = styled.div<{ theme: DefaultTheme
    Displaydirection?: string;
}>`
    display: flex;
   flex-direction: ${({ Displaydirection }) => Displaydirection};
    gap: 30px;
`;

export const Points = styled.div<{ theme: DefaultTheme;
    Fontsize?: string;
}>`
    margin-right: 40px;
    font-size: ${({Fontsize}) => Fontsize};
    font-family: ${({ theme }) => theme.fonts.main};
`;
