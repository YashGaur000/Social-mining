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
  // margin: 10px 40px 10px 40px;

  @media (max-width: 768px) {
    margin: 10px 20px;
  }
`;

export const InputField = styled.input<{ theme: DefaultTheme}>`
  background: transparent;
  height: 38px;
  width: 80%;
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

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: #1a2742;
  border-radius: 20px;
  padding: 30px 40px;
  width: 30%;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const ModalTitle = styled.p<{ theme: DefaultTheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 35.88px;
  color: ${({ theme }) => theme.colors.whiteBorder};
  margin-bottom: 20px;
  text-align: left;
`;

export const Input = styled.input<{theme : DefaultTheme}>`
  width: 100%;
  padding: 15px 15px;
  border: 1px solid #8b98b4;
  border-radius: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.titleColor};
  background-color: transparent;
  margin-bottom: 10px;
  outline: none;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.titleColor};
  }
`;