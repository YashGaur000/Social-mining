import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  AirdropBox,
  AirdropInfo,
  AirdropInfoBox,
  AirdropInfoSub,
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
} from "../styles/Leaderboard.style";
import Medal from "../../../assets/medal1.svg";
import Bigtenex from "../../../assets/bigtenexbg.svg";
import tenexbglogo from "../../../assets/tenexbglogo.svg";
import tenexbglogo2 from "../../../assets/tenexbglogo2.svg";
import { Card } from "../../common/Card";
import { Score, SocialLogo } from "../../TaskList/styles/TaskList.style";
import { MiddleLogo } from "../../DashBoard/styles/DashBoard.styles";

interface Player {
  userName: string;
  points: number;
}


const Leaderboard: React.FC = () => {
  
  const [players, setPlayers] = useState<Player[]>([]);
 
  const [leaderboard, setLeaderboard] = useState<{ userName: string; points: number }[]>([]);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/leaderboard',{
          withCredentials: true, 
        });
        
  
        
   let result=response.data.data;
       console.log(result);
        setLeaderboard(result);
      
       
      } catch (error) {
        const errorMessage = (error as any).response?.data || error; 
        console.error('Error fetching leaderboard data:', errorMessage);
      }
    };
  
    fetchLeaderboardData();
  }, []);
  
  

  return (
    <BoardWrapper>
      <SocialLogo
        src={Bigtenex}
        Position="absolute"
        margin="185px 0px 0px -250px"
        Zindex="-1"
      />
      <MiddleLogo src={tenexbglogo} Top="53vh" Left="40vh" />
      <MiddleLogo src={tenexbglogo2} Top="65vh" Left="150vh" />

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
              {leaderboard.map((player, index) => (
                <ParticipantBox key={index}>
                  <RankBox>
                    <Score>
                      {index < 3 ? (
                        <SocialLogo height="36px" width="36px" src={Medal} />
                      ) : (
                        `${index + 1}`
                      )}
                    </Score>
                  </RankBox>
                  <Name>
                    <Score>{player.userName}</Score>
                  </Name>
                  <EarnedPoints>
                    <Score>{player.points}</Score>
                  </EarnedPoints>
                </ParticipantBox>
              ))}
            </RankandPointValueBox>
          </RankandPointBoxWrapper>
        </Card>
      </RankandPointFullBoxWrapper>
      <Score Margin="80px 0px 0px -50px" textalign="center">
        Rewards are paid at the end of each month based on each user's
        accrued points.
      </Score>
    </BoardWrapper>
  );
};

export default Leaderboard;
