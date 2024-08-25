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
    gap: 120px;
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

export const RankandPointValueBox = styled.div<{ theme: DefaultTheme}>`
    display: flex;
    justify-content: space-between;
`;

export const RankBox = styled.div<{ theme: DefaultTheme
    Displaydirection?: string;
}>`
    display: flex;
    flex-direction: ${({ Displaydirection }) => Displaydirection};
    gap: 30px;
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
    font-size: ${({Fontsize}) => Fontsize};
    font-family: ${({ theme }) => theme.fonts.main};
`;
