import styled from "styled-components";

export const Main1container = styled.section`
  display: flex;
  align-items: center;
  margin-bottom:60px;
`;

export const LogoWrapper = styled.div`
  @media only screen and (max-width: 580px) {
    margin: 40px 0px 0px 0px;
  }
`;

export const LogoImage = styled.img`
  position:absolute;
  top:40px;
  left:60px;
  width: 88px;
  height: 36px;
`;
