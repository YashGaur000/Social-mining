import styled from "styled-components";

export const Main1container = styled.section<{
  margin?: string;
}>`
  display: flex;
  align-items: center;
  // margin: ${({ margin }) => margin ? margin : "0px 120px 80px 0px"};

`;

export const LogoWrapper = styled.div`

  @media only screen and (max-width: 580px) {
    margin: 40px 0px 0px 0px;
  }
`;

export const LogoImage = styled.img`
  display:block;
  margin-left:28px;
  width: 88px;
  height: 36px;
`;
