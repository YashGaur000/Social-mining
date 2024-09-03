import React from 'react';
import { AirdropBox, AirdropInfo, AirdropInfoBox, AirdropInfoSub, BackgroundImages, BoardWrapper, EarnedPoints, Name, ParticipantBox, PointBox, Points, RankandPointBox, RankandPointBoxWrapper, RankandPointValueBox, RankBox, Rankers} from '../styles/Leaderboard.style';
import Medal from '../../../assets/medal1.svg';
import Bigtenex from '../../../assets/bigtenexbg.svg';
import tenexbglogo from '../../../assets/tenexbglogo.svg';
import tenexbglogo2 from '../../../assets/tenexbglogo2.svg';
import { Card } from '../../common/Card';
import { Score, SocialLogo } from '../../TaskList/styles/TaskList.style';


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
        <>
        <BackgroundImages>
                <div />
            </BackgroundImages>
        <BoardWrapper>
            <SocialLogo src={Bigtenex} Position='absolute' margin='185px 0px 0px 
            -250px' Zindex='-1'/>
            <SocialLogo src={tenexbglogo} Position='absolute' margin='350px 0px 0px -600px' />
            <SocialLogo src={tenexbglogo2} Position='absolute' margin='450px 0px 0px 400px' />
            <AirdropBox>
                <Card>
                <AirdropInfoBox>
                    <AirdropInfo>
                        01/09/2024
                    </AirdropInfo>
                    <AirdropInfoSub>
                        Airdrop Date
                    </AirdropInfoSub>
                </AirdropInfoBox>
                </Card>
                <Card>
                <AirdropInfoBox>
                    <AirdropInfo>
                        $1,000,000
                    </AirdropInfo>
                    <AirdropInfoSub>
                        Airdrop Amount
                    </AirdropInfoSub>
                </AirdropInfoBox>
                </Card>
                <Card>
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
            <Card width='90%' background='linear-gradient(180deg, rgba(24, 38, 76, .2) 0%, rgba(31, 48, 95, .2) 100%)'>
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
                </RankandPointBoxWrapper>
            </Card>
            <Score Margin='80px 0px 0px -50px' textalign='center'>Rewards are paid at the end of each month based on each user&apos;s accrued points 
            </Score>
        </BoardWrapper>
        </>
    );
};

export default Leaderboard;

