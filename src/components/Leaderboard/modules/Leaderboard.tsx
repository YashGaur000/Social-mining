import React from 'react';
import { AirdropBox, AirdropInfo, AirdropInfoBox, AirdropInfoSub, BoardWrapper, EarnedPoints, Name, ParticipantBox, PointBox, Points, RankandPointBox, RankandPointBoxWrapper, RankandPointValueBox, RankBox, Rankers, UserRankandPointValueBox} from '../styles/Leaderboard.style';
import Medal from '../../../assets/medal1.svg';
import Bigtenex from '../../../assets/bigtenexbg.svg';
import tenexbglogo from '../../../assets/tenexbglogo.svg';
import tenexbglogo2 from '../../../assets/tenexbglogo2.svg';
import { Card } from '../../common/Card';
import { Score, SocialLogo } from '../../TaskList/styles/TaskList.style';
import { MiddleLogo } from '../../DashBoard/styles/DashBoard.styles';
import { StyledButton } from '../../common/Buttons/GradientButton';

const Leaderboard: React.FC = () => {

    // const Runnerups = [
    //     'Yash',
    //     'Yash',
    //     'Yash',
    // ];


    const Players = [
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
        'Tenex'
    ];

    // const RunnerupsPoints = [
    //     '999',
    //     '888',
    //     '777',
    // ];


    const PlayersPoints = [
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
        '64544'
    ];

    return (
        <BoardWrapper>
            {/* <SocialLogo src={tenexbglogo} Position='absolute' margin='370px 0px 0px -600px'/>
            <SocialLogo src={tenexbglogo2} Position='absolute' margin='480px 0px 0px 400px'/> */}
            <SocialLogo src={Bigtenex} Position='absolute' margin='185px 0px 0px -250px' Zindex='-1'/>
            <MiddleLogo src={tenexbglogo} Top='53vh' Left='40vh' />
            <MiddleLogo src={tenexbglogo2} Top='65vh' Left='150vh' />
            {/* <MiddleLogo Opacity='0.12px' src={Bigtenex} Top='34vh' Left='48%' Zindex='-1'/> */}
            <AirdropBox>
                <Card width='260px' >
                <AirdropInfoBox>
                    <AirdropInfo>
                        01/09/2024
                    </AirdropInfo>
                    <AirdropInfoSub>
                        Airdrop Date
                    </AirdropInfoSub>
                </AirdropInfoBox>
                </Card>
                <Card width='260px'>
                <AirdropInfoBox>
                    <AirdropInfo>
                        $1,000,000
                    </AirdropInfo>
                    <AirdropInfoSub>
                        Airdrop Amount
                    </AirdropInfoSub>
                </AirdropInfoBox>
                </Card>
                <Card width='260px'>
                <AirdropInfoBox>
                    <AirdropInfo>
                        100
                    </AirdropInfo>
                    <AirdropInfoSub>
                        Participants
                    </AirdropInfoSub>
                </AirdropInfoBox>
                </Card>
            </AirdropBox>
            <Card width='90%' background='linear-gradient(180deg, rgba(24, 38, 76, .2) 0%, rgba(31, 48, 95, .4) 100%)' Borderradius='24px' Padding='30px 50px 40px 50px'>
                <RankandPointBoxWrapper>
                    <RankandPointBox>
                        <RankBox >
                            <Rankers Fontsize='24px'>
                                Ranking
                            </Rankers>
                        </RankBox>
                        <PointBox >
                            <Points Fontsize='24px'>
                                Earned Points
                            </Points>
                        </PointBox>
                    </RankandPointBox>
<RankandPointValueBox>
    {Players.map((Player, index) => (
        <ParticipantBox key={index}>
            <RankBox>
                {index < 3 ? (
                    <SocialLogo height="36px" width="36px" src={Medal} />
                ) : (
                    `${index + 1}`
                )}
            </RankBox>
            <Name>
                {Player}
            </Name>
            <EarnedPoints>{PlayersPoints[index]}</EarnedPoints>
        </ParticipantBox>
    ))}
</RankandPointValueBox>
        <StyledButton width='100%'>
<UserRankandPointValueBox>
        <ParticipantBox>
            <RankBox>
                99
            </RankBox>
            <Name>
                Bonker
            </Name>
            <EarnedPoints>
                340
            </EarnedPoints>
        </ParticipantBox>
</UserRankandPointValueBox>
</StyledButton>
                </RankandPointBoxWrapper>
                
            </Card>
            <Score Margin='80px 0px 0px -50px' textalign='center'>Rewards are paid at the end of each month based on each user&apos;s accrued points</Score>
        </BoardWrapper>
    );
};

export default Leaderboard;

