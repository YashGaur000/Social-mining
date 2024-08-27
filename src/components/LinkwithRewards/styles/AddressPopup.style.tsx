import styled from "styled-components";
import { DefaultTheme } from "../../../styles/Theme";


export const PopupWrapper = styled.div<{ theme: DefaultTheme}>`
    display: flex;
    flex-direction: column;
    padidng: 20px;
`;

export const PopupHeader = styled.div<{ theme: DefaultTheme}>`
    font-size: 24px;
    text-align: left;
    color: ${({ theme }) => theme.colors.whiteBorder};
    margin: 40px 40px 10px 40px;
`;

export const InputFieldBox = styled.div<{ theme: DefaultTheme}>`
    // margin-top: 15px;
    // margin-bottom: 15px;
    margin: 10px 40px 10px 40px;
`;

export const InputField = styled.input<{ theme: DefaultTheme}>`
    background: transparent;
    height: 38px;
    width: 380px;
    border: 2px solid #B8B8B8CC;
    border-radius: 8px;
    padding: 10px;
`;

export const LinkAddressBox = styled.div<{ theme: DefaultTheme}>`
    font-family: ${({ theme }) => theme.fonts.main};
    margin: 10px 40px 10px 40px;
`;
