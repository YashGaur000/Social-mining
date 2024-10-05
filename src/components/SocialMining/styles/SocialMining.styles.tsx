import styled from "styled-components";

export const Main1container = styled.section<{
  margin?: string;
}>`
  display:flex;
  align-items:center;
  width:100%;
  
`;


export const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media only screen and (max-width: 780px) {
    display: block;
  }
`;

export const LogoWrapper = styled.div`
position:relative;
 width: 88px;
  height: 36px;
    
`;
export const LogoImage = styled.img`
  display:block;
  position:absolute;
 

   @media only screen and (max-width: 780px) {
    right:12px;
    width:75px;
    height:30px;
  }
`;


