import React from "react";
import { 
  CardContainer, 
  InviteWrapper 
} from "../styles/Invites.style";
import { 
  Card, 
  CardBox, 
  CardWrapper 
} from "../../common/Card";
import { 
  LetsGoButton, 
  Score, 
  SocialLogo, 
  SocialLogoBox, 
  TitleBox 
} from "../../TaskList/styles/TaskList.style";
import { 
  GlobalButton 
} from "../../common/Buttons/GlobalButton";
import { 
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
  Rankers 
} from "../../Leaderboard/styles/Leaderboard.style";
import ReferralSideDesign from '../../../assets/referralsidedesign.svg';
import Bigtenex from "../../../assets/bigtenexbg.svg";
import { MiddleLogo } from "../../DashBoard/styles/DashBoard.styles";
import tenexbglogo from "../../../assets/tenexbglogo.svg";
import tenexbglogo2 from "../../../assets/tenexbglogo2.svg";

const Invite: React.FC = () => {
  const players = [
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

  const playersPoints = [
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
    <InviteWrapper>
       
  <MiddleLogo src={tenexbglogo} Top="53vh" Left="40vh" />
  <MiddleLogo src={tenexbglogo2} Top="65vh" Left="150vh" />
      <CardContainer margin="100px 0px 100px 0px">
        <CardWrapper>
          <SocialLogoBox>
            <SocialLogo margin="0px -30px 0px 0px" height="100px" src={ReferralSideDesign} alt="Side Design" Zindex="2" />
          </SocialLogoBox>
          <CardBox>
            <TitleBox>
              <Score Fontsize="24px" Lineheight="35.88px" Margin="0px 0px 0px 50px">
                When they join, both you and your friend will receive 10 points each!
              </Score>
              <LetsGoButton margin="8px 50px 0px 800px">
                <GlobalButton>
                  Invite
                </GlobalButton>
              </LetsGoButton>
            </TitleBox>
          </CardBox>
        </CardWrapper>
      </CardContainer>
      <CardContainer margin="0px 0px 0px 0px">
        {/* <RankandPointFullBoxWrapper> */}
        <SocialLogo
    src={Bigtenex}
    Position="absolute"
    margin="15px 0px 0px -10px"
    Zindex="1"
  />
          <Card
            width="40%"
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
                {players.map((player, index) => (
                  <ParticipantBox key={index}>
                    <RankBox>
                      <Score>{index + 1}</Score>
                    </RankBox>
                    <Name>
                      <Score>{player}</Score>
                    </Name>
                    <EarnedPoints>
                      <Score>{playersPoints[index]}</Score>
                    </EarnedPoints>
                  </ParticipantBox>
                ))}
              </RankandPointValueBox>
            </RankandPointBoxWrapper>
          </Card>
        {/* </RankandPointFullBoxWrapper> */}
      </CardContainer>
      <Score Margin="20px 0px 0px 0px" textalign="center">
        Rewards are paid at the end of each month based on each user&apos;s
        accrued points
      </Score>
    </InviteWrapper>
  );
};

export default Invite;
