import React from 'react';
import { AirdropBox, AirdropInfo, AirdropInfoBox, AirdropInfoSub, BoardWrapper, PointBox, Points, RankandPointBox, RankandPointBoxWrapper, RankandPointValueBox, RankBox, Rankers, SocialLogoDiv } from '../styles/Leaderboard.style';
import { Card } from '../../common/Card';

const Leaderboard: React.FC = () => {

    const players = [
        'Tenex',
        'Tenex',
        'Tenex',
        'Tenex',
        'Tenex',
        'Tenex'
    ];

    const PlayersPoints = [
        '123',
        '345',
        '342',
        '876',
        '576',
        '899'
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
            <Card>
                <RankandPointBoxWrapper>
                    <RankandPointBox>
                        <RankBox >
                            <Rankers Fontsize='24px'>
                                Rankers
                            </Rankers>
                        </RankBox>
                        <PointBox >
                            <Points Fontsize='24px'>
                                Earned Points
                            </Points>
                        </PointBox>
                    </RankandPointBox>
                    <RankandPointValueBox>
                        <RankBox Displaydirection='column'>
                            {players.map((player) => (
                                <Rankers key={player} Fontsize='20px'>
                                    {player}
                                </Rankers>
                            ))}
                        </RankBox>
                        <PointBox Displaydirection='column'>
                            {PlayersPoints.map((Point) => (
                                <Points key={Point} Fontsize='20px'>{Point}</Points>
                            ))}
                        </PointBox>

                    </RankandPointValueBox>
                </RankandPointBoxWrapper>
            </Card>
        </BoardWrapper>
    );
};

export default Leaderboard;