import styled from "styled-components";

export const MainContaier = styled.div`
  width: 60%;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const Heading = styled.p`
  color: #fff;
  font-family: Kanit;
  font-size: 36px;
  font-weight: 300;
  line-height: 53.82px;
 
 
`;

export const DashBoardCard = styled.div`
  // border: 2px solid crimson;
  background: linear-gradient(180deg, #18264c 0%, #1f305f 100%);
  width: 100%;
  height: 84px;
  border-radius: 24px;
  opacity: 0px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0px;
  margin: auto;
  position: relative;
  box-shadow: -10px 0px 0px rgb(22, 192, 98), -15px 0px 0px rgb(62, 172, 252);



  @media only screen and (max-width: 580px) {
  // border:2px solid blue;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
  }
`;

export const DashBoardCards = styled.div`
  width:100%;
  // border:2px solid white;
  margin: 50px 100px 202px 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;

 @media only screen and (max-width: 580px){
   width:100%;
   margin: 50px 10px 202px 10px;
   }
`;

export const DashBoardText = styled.p`
  font-family: Kanit;
  font-size: 24px;
  font-weight: 300;
  line-height: 35.88px;
  text-align: left;
  color: rgba(255, 255, 255, 1);

  @media only screen and (max-width:780px) {
    font-size:1.2em;
    line-height:28px;
  }
  @media only screen and (max-width:580px) {
    font-size:1.2em;
    line-height:28px;
  }
`;

export const DashBoardButton = styled.button`
  width: 129px;
  height: 40px;
  padding: 10px 20px;
  border-radius: 12px;
  opacity: 1; 
  color: white;
  background: linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%);
  border: none;
  font-family: Kanit;
  font-size: 16px;
  font-weight: 400;
  line-height: 23.92px;
  text-align: center; 
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer; 
  transition: all 0.3s ease; 

  &:hover {
    opacity: 0.9; 
    transform: scale(1.05); 
  }

  @media only screen and (max-width: 580px) {
    width:auto;
    font-size: 14px; 
    padding:8px 16px;
  
  }
`;

export const DashBoardFooterText = styled.p`
font-family: Kanit;
font-size: 20px;
font-weight: 300;
line-height: 29.9px;
text-align: center;
color:#fff;


`