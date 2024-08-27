import styled from "styled-components";
import { DefaultTheme } from "../../../styles/Theme";

export const PopupWrapper = styled.div<{ theme: DefaultTheme}>`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const PopupHeader = styled.div<{ theme: DefaultTheme}>`
  font-size: 24px;
  text-align: left;
  color: ${({ theme }) => theme.colors.whiteBorder};
  margin: 40px 40px 10px 40px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin: 20px 20px 10px 20px;
  }
`;

export const InputFieldBox = styled.div<{ theme: DefaultTheme}>`
  margin: 10px 40px 10px 40px;

  @media (max-width: 768px) {
    margin: 10px 20px;
  }
`;

export const InputField = styled.input<{ theme: DefaultTheme}>`
  background: transparent;
  height: 38px;
  width: 380px;
  border: 2px solid #B8B8B8CC;
  border-radius: 8px;
  padding: 10px;

  @media (max-width: 768px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

export const LinkAddressBox = styled.div<{ theme: DefaultTheme}>`
  font-family: ${({ theme }) => theme.fonts.main};
  margin: 10px 40px 10px 40px;

  @media (max-width: 768px) {
    margin: 10px 20px;
  }
`;
