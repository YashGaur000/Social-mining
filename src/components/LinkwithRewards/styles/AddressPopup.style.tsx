import styled from "styled-components";
import { DefaultTheme } from "../../../styles/Theme";


export const PopupWrapper = styled.div<{ theme: DefaultTheme}>`
    display: flex;
    flex-direction: column;
`;

export const PopupHeader = styled.div<{ theme: DefaultTheme}>`
    font-size: 24px;
    text-align: left;
`;

export const InputFieldBox = styled.div<{ theme: DefaultTheme}>`
    
`;

export const InputField = styled.input<{ theme: DefaultTheme}>`
    background: transparent;
    height: 38px;
    width: 380px;
    border: transparent;
`;

export const LinkAddressBox = styled.div<{ theme: DefaultTheme}>`
    font-family: ${({ theme }) => theme.fonts.main};
`;
