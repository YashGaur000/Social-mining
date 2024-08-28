import styled from "styled-components";

export const MainPopUpScreen = styled.div`
  background: linear-gradient(180deg, #18264c 0%, #1f305f 100%);
  width: 460px;
  height: 290px;
  padding: 30px;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 998;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media only screen and (max-width: 580px){
  width: 360px;
  height: 290px;
  
  }
`;

export const PopUpScreenTitle = styled.div`
  //  border:2px solid royalblue;
  font-family: Kanit;
  font-size: 24px;
  font-weight: 300;
  line-height: 35.88px;
  // text-align: center;
  color: #fff;
`;

export const PopUpScreenWrapper = styled.div`
  // border:3px solid pink;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SocialMediaIcon = styled.img`
`;

export const PopScreenText = styled.h4`
  font-family: Kanit;
  font-size: 16px;
  font-weight: 300;
  line-height: 23.92px;
  text-align: left;
  color: #fff;
  padding: 5px;
`;


export const ConnectionButtonWrapper = styled.div``;

export const ConnectionButton = styled.button`
  background: linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%);
  width: 100px;
  height: 29px;
  top: 360px;
  left: 730px;
  gap: 0px;
  border-radius: 8px;
  opacity: 0px;
  border: none;
  color: #fff;
  padding: 5px;
  position:relative;

  &:: after{
    content:'';
    position:absolute;
    
  }
`;


export const PopUpScreenCard = styled.div`
display:flex;

`

export const PopUpScreenContainer = styled.div`
// border:2px solid red;
width:100%;
height:100vh;
background-color: rgba(0 , 0 , 0, 0.8);
z-index:999;
position:fixed;
left:0;
top:0;

`