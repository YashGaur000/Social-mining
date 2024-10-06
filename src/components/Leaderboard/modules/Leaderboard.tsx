import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  AirdropBox,
  AirdropBoxSmallSize,
  AirdropInfo,
  AirdropInfoBox,
  AirdropInfoSub,
  AirdropTitle,
  BoardWrapper,
  EarnedPoints,
  Name,
  ParticipantBox,
  ParticipantTitleSmallscreen,
  PointBox,
  Points,
  RankandPointBox,
  RankandPointBoxWrapper,
  RankandPointFullBoxWrapper,
  RankandPointValueBox,
  RankBox,
  Rankers,
  RankWithNameWrapper,
  UserRankCard,
} from '../styles/Leaderboard.style';
import Medal from '../../../assets/medal1.svg';
import Bigtenex from '../../../assets/bigtenexbg.svg';
// import tenexbglogo from "../../../assets/tenexbglogo.svg";
// import tenexbglogo2 from "../../../assets/tenexbglogo2.svg";
import { Card } from '../../common/Card';

interface Player {
  userName: string;
  points: number;
}

import {
  Score,
  SocialLogo,
  CardIndexwrapper,
} from '../../TaskList/styles/TaskList.style';
// import { MiddleLogo } from "../../DashBoard/styles/DashBoard.styles";
// import { StyledButton } from "../../common/Buttons/GradientButton";

const Leaderboard: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/leaderboard',
          {
            withCredentials: true,
          }
        );

        const result = response.data.data;
        console.log(result);
        setPlayers(result);
      } catch (error) {
        //const errorMessage = error.response?.data || error;
        console.error('Error fetching leaderboard data' + error);
      }
    };

    void fetchLeaderboardData();
  }, []);

  return (
    <BoardWrapper margin="40px 0px 0px 0px">
      {/* <SocialLogo src={tenexbglogo} Position='absolute' margin='370px 0px 0px -600px'/>
            <SocialLogo src={tenexbglogo2} Position='absolute' margin='480px 0px 0px 400px'/> */}
      <SocialLogo
        src={Bigtenex}
        Position="absolute"
        margin="185px 0px 0px -250px"
        Zindex="-1"
      />
      {/* <MiddleLogo src={tenexbglogo} Top="53vh" Left="40vh" />
      <MiddleLogo src={tenexbglogo2} Top="65vh" Left="150vh" /> */}
      {/* <MiddleLogo Opacity='0.12px' src={Bigtenex} Top='34vh' Left='48%' Zindex='-1'/> */}
      <AirdropBox>
        <Card width="260px">
          <AirdropInfoBox>
            <AirdropInfo>01/09/2024</AirdropInfo>
            <AirdropInfoSub>Airdrop Date</AirdropInfoSub>
          </AirdropInfoBox>
        </Card>
        <Card width="260px">
          <AirdropInfoBox>
            <AirdropInfo>$1,000,000</AirdropInfo>
            <AirdropInfoSub>Airdrop Amount</AirdropInfoSub>
          </AirdropInfoBox>
        </Card>
        <Card width="260px">
          <AirdropInfoBox>
            <AirdropInfo>100</AirdropInfo>
            <AirdropInfoSub>Participants</AirdropInfoSub>
          </AirdropInfoBox>
        </Card>
      </AirdropBox>

      <AirdropBoxSmallSize>
        <AirdropTitle>Airdrop Amount</AirdropTitle>
        <AirdropTitle>$1,000,000</AirdropTitle>
      </AirdropBoxSmallSize>
      <ParticipantTitleSmallscreen>
        Total number of Participants (100)
      </ParticipantTitleSmallscreen>
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
                <Rankers Fontsize="24px">Ranking</Rankers>
              </RankBox>
              <PointBox>
                <Points Fontsize="24px">Earned Points</Points>
              </PointBox>
            </RankandPointBox>
            <RankandPointValueBox>
              {players.map((Player, index) => (
                <ParticipantBox key={index}>
                  <RankWithNameWrapper>
                    <RankBox>
                      <Score>
                        {index < 3 ? (
                          <SocialLogo height="36px" width="36px" src={Medal} />
                        ) : (
                          // `${index + 1}`
                          <CardIndexwrapper> {index + 1}</CardIndexwrapper>
                        )}
                      </Score>
                    </RankBox>

                    <Name>
                      <Score>{Player.userName}</Score>
                    </Name>
                  </RankWithNameWrapper>
                  <EarnedPoints>
                    <Score>{Player.points}</Score>
                  </EarnedPoints>
                </ParticipantBox>
              ))}
            </RankandPointValueBox>
          </RankandPointBoxWrapper>
          {/* <RankandPointBoxWrapper padding='0px' alignitems='left'> */}

          {/* <UserRankandPointValueBox> */}
          <UserRankCard>
            <ParticipantBox padding="0px">
              <RankWithNameWrapper>
                <RankBox display="flex">
                  <Score>99</Score>
                </RankBox>
                <Name display="flex" margin="0px 0px 0px 0px">
                  <Score Fontsize="20px">Bonker</Score>
                </Name>
              </RankWithNameWrapper>

              <Score Margin="0px 20px 0px 0px ">340</Score>
            </ParticipantBox>
          </UserRankCard>
          {/* </UserRankandPointValueBox> */}

          {/* </RankandPointBoxWrapper> */}
        </Card>
      </RankandPointFullBoxWrapper>
      <Score Margin="30px" textalign="center">
        Rewards are paid at 01/09/2024 based on each user’s accrued points
      </Score>
    </BoardWrapper>
  );
};

export default Leaderboard;
