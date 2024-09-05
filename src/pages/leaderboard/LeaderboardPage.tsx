import React from 'react';
import { DefaultTheme } from '../../styles/Theme';
import styled from 'styled-components';
import Leaderboard from '../../components/Leaderboard/modules/Leaderboard';


const LeaderboardContainer = styled.div<{ theme: DefaultTheme}>`
    display: flex;
    justify-content: center;
    // align-items: flex-start;
    // gap: 20px;
    // padding: 40px;
    color: ${({ theme }) => theme.colors.text};
    // height: 100vh;
    @media (max-width: 1024px) {
        display: inline;
        text-align: -webkit-center;
    }
`;

const LeaderboardPage: React.FC = () => {
    return(
        <LeaderboardContainer>
            <Leaderboard/>
        </LeaderboardContainer>
    );
};

export default LeaderboardPage;