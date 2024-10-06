import styled from "styled-components";
import { DefaultTheme } from "../../../styles/Theme";

export const InviteWrapper = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;

  width:95%;
`;

export const CardContainer = styled.div<{ theme: DefaultTheme
  margin?: string;
  padding?:string;
  width?:string;
 }>`
  display: flex;
  justify-content: center;
 align-items:center;
  width:${({width})=>width??"auto"};
  margin: ${({ margin }) => margin??"0px" };
  padding:${({padding})=>padding ??"0px"};
 
`;

export const InviteTitle=styled.p<{ theme: DefaultTheme }>`
  font-size:20px;
  @media (max-width: 1024px){
   font-size:16px;
  }
  @media (max-width: 768px){
    font-size:14px;
  }

  @media (max-width: 600px){
    font-size:12px;
  }
`