import React, { useEffect, useState } from 'react';
import {
  CardContainer,
  InviteTitle,
  InviteWrapper,
  CopyPopup,
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
import {
  MiddleLogo,
  MobileScreenHeader,
} from '../../DashBoard/styles/DashBoard.styles';
import tenexbglogo from '../../../assets/tenexbglogo.svg';
import tenexbglogo2 from '../../../assets/tenexbglogo2.svg';
import logintick from '../../../assets/logintick.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { LoginTickImage } from '../../SocialConnectModel/styles/SocialConnectModel.style';
import axios from 'axios';

const Invite: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [referredUsers, setReferredUsers] = useState([]);
  const { userId, refralcode } = useSelector((state: RootState) => state.auth);
  console.log(refralcode);

  useEffect(() => {
    const fetchReferredUsers = async () => {
      try {
        const response = await axios.post(
          'http://localhost:3000/api/users/referrals',
          {
            userId,
          }
        );
        const { referredUsers } = response.data;
        setReferredUsers(referredUsers);
      } catch (error) {
        console.error('Error fetching referred users:', error);
      }
    };

    fetchReferredUsers();
  }, [userId]);

  const handleGenerateReferralLink = async () => {
    try {
      const referralLink = `${'http://localhost:5174/'}?referral=${refralcode}`;
      console.log(referralLink);

      if (referralLink) {
        await navigator.clipboard.writeText(referralLink);
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <InviteWrapper>
      <MobileScreenHeader>Invite Friends</MobileScreenHeader>
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
              <LetsGoButton style={{ position: 'relative' }}>
                <GlobalButton onClick={handleGenerateReferralLink}>
                  Invite
                </GlobalButton>
                {/* <GlobalButton onClick={handleClick}>
                  connect
                </GlobalButton> */}
              </LetsGoButton>
              {isCopied && (
                <CopyPopup>
                  <LoginTickImage height="12px" width="12px" src={logintick} />
                  Link copied
                </CopyPopup>
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
                {referredUsers.map((player, index) => (
                  <ParticipantBox key={index}>
                    <RankBox>
                      <Score>{index + 1}</Score>
                    </RankBox>
                    <Name>
                      <Score>{player}</Score>
                    </Name>
                    <EarnedPoints>
                      <Score>{10}</Score>
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
