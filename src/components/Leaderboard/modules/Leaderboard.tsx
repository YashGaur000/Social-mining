import React from 'react';
import { AirdropBox, AirdropInfo, AirdropInfoBox, AirdropInfoSub, BoardWrapper, EarnedPoints, Name, ParticipantBox, PointBox, Points, RankandPointBox, RankandPointBoxWrapper, RankandPointValueBox, RankBox, Rankers} from '../styles/Leaderboard.style';
import Medal from '../../../assets/medal1.svg';
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
        <BoardWrapper>
            <AirdropBox>
                <AirdropInfoBox>
                    <AirdropInfo>
                        01/09/2024
                    </AirdropInfo>
                    <AirdropInfoSub>
                        Airdrop Date
                    </AirdropInfoSub>
                </AirdropInfoBox>
                <AirdropInfoBox>
                    <AirdropInfo>
                        $1,000,000
                    </AirdropInfo>
                    <AirdropInfoSub>
                        Airdrop Amount
                    </AirdropInfoSub>
                </AirdropInfoBox>
                <AirdropInfoBox>
                    <AirdropInfo>
                        14 days 10 hours
                    </AirdropInfo>
                    <AirdropInfoSub>
                        Time Left
                    </AirdropInfoSub>
                </AirdropInfoBox>
            </AirdropBox>
            <Card width='90%'>
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
                    {/* <RankandPointValueBox>
                        {Runnerups.map((Runnerup, index) => (
                            <ParticipantBox key={index}>
                            {index < 3 && (
                                <SocialLogo height="30px" width="30px" src={Medal} />
                            )}
                            <Name>
                                {index < 3 ? Runnerup : `${index + 1} ${Runnerup}`}
                            </Name>
                            <EarnedPoints>{RunnerupsPoints[index]}</EarnedPoints>
                            </ParticipantBox>
                        ))}
                     {Players.map((Player, index) => (
                        <ParticipantBox Margin='0px 0px 0px 10px' key={index}>
                            {`${index + 4}`}
                            <Name>
                            {`${Player}`}
                            </Name>
                            <EarnedPoints>{PlayersPoints[index]}</EarnedPoints>
                        </ParticipantBox>
                        ))}
                        </RankandPointValueBox> */}

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
            <Score>Rewards are paid at the end of each month based on each user&apos;s accrued points</Score>
        </BoardWrapper>
    );
};

export default Leaderboard;