import styled from "styled-components";
import { DefaultTheme } from "../../../styles/Theme";

export const InviteWrapper = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
`;

export const CardContainer = styled.div<{ theme: DefaultTheme
  margin?: string;
 }>`
  display: flex;
  justify-content: center;
  margin: ${({ margin }) => margin };
`;