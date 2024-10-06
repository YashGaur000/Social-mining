import React, { useState } from 'react';
import {
  CardContainer,
  InviteWrapper,
  InviteTitle,
} from '../styles/Invites.style';
import { Card, CardBox, CardWrapper } from '../../common/Card';
import {
  LetsGoButton,
  Score,
  SocialLogo,
  SocialLogoBox,
  TitleBox,
} from '../../TaskList/styles/TaskList.style';
import { GlobalButton } from '../../common/Buttons/GlobalButton';
import {
  BoardWrapper,
  EarnedPoints,
  Name,
  ParticipantBox,
  PointBox,
  Points,
  RankandPointBox,
  RankandPointBoxWrapper,
  RankandPointValueBox,
  RankBox,
  Rankers,
} from '../../Leaderboard/styles/Leaderboard.style';
import ReferralSideDesign from '../../../assets/referralsidedesign.svg';
import Bigtenex from '../../../assets/bigtenexbg.svg';
import { MiddleLogo } from '../../DashBoard/styles/DashBoard.styles';
import tenexbglogo from '../../../assets/tenexbglogo.svg';
import tenexbglogo2 from '../../../assets/tenexbglogo2.svg';
import axios from 'axios';
// import axios from "axios";

const Invite: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);
  console.log(setIsCopied);

  const players = [
    'Tenex',
    'Tenex',
    'Tenex',
    'Tenex',
    'Tenex',
    'Tenex',
    'Tenex',
    'Tenex',
    'Tenex',
    'Tenex',
    'Tenex',
  ];

  const playersPoints = [
    '34523',
    '34543',
    '23455',
    '45644',
    '34534',
    '34523',
    '34543',
    '23455',
    '45644',
    '34534',
    '64544',
  ];

  const handleGenerateReferralLink = async () => {
    try {
      const discordId = localStorage.getItem('userId');

      const response = await axios.post(
        'http://localhost:3000/api/users/referral',
        { discordId }
      );
      console.log(response.data.email);
    } catch (error) {
      console.log(error);
    }
  };

  // const copyToClipboard = async () => {
  //   const link = import.meta.env.VITE_REFERRAL;

  //   if (!link) {
  //     console.error('Referral link is not defined');
  //     return;
  //   }

  //   try {
  //     await navigator.clipboard.writeText(link);
  //     setIsCopied(true);
  //     setTimeout(() => {
  //       setIsCopied(false);
  //     }, 2000);
  //   } catch (err) {
  //     console.error('Failed to copy: ', err);
  //   }
  // };

  return (
    <InviteWrapper>
      <MiddleLogo src={tenexbglogo} Top="80vh" Left="40vh" />
      <MiddleLogo src={tenexbglogo2} Top="65vh" Left="150vh" />
      <CardContainer margin="40px 0px ">
        <CardWrapper>
          <SocialLogoBox>
            <SocialLogo
              margin="0px -30px 0px 0px"
              height="100px"
              src={ReferralSideDesign}
              alt="Side Design"
              Zindex="2"
            />
          </SocialLogoBox>
          <CardBox>
            <TitleBox>
              <InviteTitle>
                When they join, both you and your friend will receive 10 points
                each!
              </InviteTitle>
              <LetsGoButton>
                <GlobalButton onClick={handleGenerateReferralLink}>
                  Invite
                </GlobalButton>
                {/* <GlobalButton onClick={handleClick}>
                  connect
                </GlobalButton> */}
              </LetsGoButton>
              {isCopied && (
                <Score Margin="10px 0 0 50px" color="green">
                  Link copied to clipboard!
                </Score>
              )}
            </TitleBox>
          </CardBox>
        </CardWrapper>
      </CardContainer>
      <BoardWrapper margin="0px">
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
      </BoardWrapper>
      <Score Margin="20px 0px 0px 0px" textalign="center">
        Rewards are paid at the end of each month based on each user&apos;s
        accrued points
      </Score>
    </InviteWrapper>
  );
};

export default Invite;
