import React from "react";
import {
//   AirdropBox,
//   AirdropInfo,
//   AirdropInfoBox,
//   AirdropInfoSub,
  BoardWrapper,
  EarnedPoints,
  Name,
  ParticipantBox,
  PointBox,
  Points,
  RankandPointBox,
  RankandPointBoxWrapper,
  RankandPointFullBoxWrapper,
  RankandPointValueBox,
  RankBox,
  Rankers,
} from "../../Referral/styles/Invites.style";
import Bigtenex from "../../../assets/bigtenexbg.svg";
import tenexbglogo from "../../../assets/tenexbglogo.svg";
import tenexbglogo2 from "../../../assets/tenexbglogo2.svg";
import { Card, CardBox, CardWrapper } from "../../common/Card";
import { LetsGoButton, List, ListBox, ListItem, Score, SocialLogo, SocialLogoBox, TitleBox } from "../../TaskList/styles/TaskList.style";
import { MiddleLogo } from "../../DashBoard/styles/DashBoard.styles";
import { GlobalButton } from "../../common/Buttons/GlobalButton";
import SideDesign from '../../../assets/sidedesign.svg';
import Roundcheck from '../../../assets/roundcheck.svg';
import TwitterLogo from '../../../assets/twitter.svg';

const Invite: React.FC = () => {

  const Players = [
    "Tenex",
    "Tenex",
    "Tenex",
    "Tenex",
    "Tenex",
    "Tenex",
    "Tenex",
    "Tenex",
    "Tenex",
    "Tenex",
    "Tenex",
  ];

  const PlayersPoints = [
    "34523",
    "34543",
    "23455",
    "45644",
    "34534",
    "34523",
    "34543",
    "23455",
    "45644",
    "34534",
    "64544",
  ];

  return (
    <BoardWrapper>
        <CardWrapper>
          
                       <SocialLogoBox>
                     <SocialLogo height='275px' src={SideDesign} alt='sidedesign' Zindex='2'/>
                     </SocialLogoBox>
                     <CardBox margin='0px 0px 0px -25px'>
                       <TitleBox>
                         <SocialLogo height='36px' width='36' margin='0px 15px 0px 30px' src={TwitterLogo} alt="Reddit Logo" />
                         <Score Fontsize='24px' Lineheight='35.88px'>Twitter Engagement:</Score>
                         <LetsGoButton margin='10px 40px 0px auto'>
                           <GlobalButton>
                            Lets Go
                           </GlobalButton>
                         </LetsGoButton>
                       </TitleBox>
                       <ListBox>
                         <List>
                           <ListItem>
                             <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" />
                             {/* <Score Fontsize='20px' Lineheight='29.9px'>Like, Retweet or reply to a <u>@TenEx_Official</u> tweets.</Score> */}
                             <Score Fontsize='20px' Lineheight='29.9px'>Like, Retweet or reply to a <u>@TenEx_Official</u> tweets.</Score>
                           </ListItem>
                           <ListItem>
                             <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" /> <Score Fontsize='20px' Lineheight='29.9px'>Tag @TenEx_Official, $TENEX in your tweets.</Score>
                           </ListItem>
                           <ListItem>
                             <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" /> <Score Fontsize='20px' Lineheight='29.9px'>Mention TENEX in your tweets without tagging.</Score>
                           </ListItem>
                           <ListItem>
                             <Score Fontsize='20px' Lineheight='29.9px'>Score 5 points by completing this task</Score>
                           </ListItem> 
                         </List>
                       </ListBox>
                     </CardBox>
                     </CardWrapper>
      <SocialLogo
        src={Bigtenex}
        Position="absolute"
        margin="185px 0px 0px -250px"
        Zindex="-1"
      />
      <MiddleLogo src={tenexbglogo} Top="53vh" Left="40vh" />
      <MiddleLogo src={tenexbglogo2} Top="65vh" Left="150vh" />
      <RankandPointFullBoxWrapper>
      <Card
        width="90%"
        background="linear-gradient(180deg, rgba(24, 38, 76, .2) 0%, rgba(31, 48, 95, .4) 100%)"
        Borderradius="24px"
        Padding="30px 50px 40px 50px"
      >
        <RankandPointBoxWrapper>
          <RankandPointBox>
            <RankBox>
              <Rankers Fontsize="24px">List of your friends (20)</Rankers>
            </RankBox>
            <PointBox>
              <Points Fontsize="24px">Earned Points</Points>
            </PointBox>
          </RankandPointBox>
          <RankandPointValueBox>
            {Players.map((Player, index) => (
              <ParticipantBox key={index}>
                <RankBox><Score>
                  {(`${index + 1}`)}
                  </Score>
                </RankBox>
                <Name><Score>{Player}</Score></Name>
                <EarnedPoints><Score>{PlayersPoints[index]}</Score></EarnedPoints>
              </ParticipantBox>
            ))}
          </RankandPointValueBox>
        </RankandPointBoxWrapper>
      </Card>
      </RankandPointFullBoxWrapper>
      <Score Margin="80px 0px 0px -50px" textalign="center">
        Rewards are paid at the end of each month based on each user&apos;s
        accrued points
      </Score>
      
    </BoardWrapper>
  );
};

export default Invite;
