import React from 'react';
import { DefaultTheme } from '../../styles/Theme';
import styled from 'styled-components';
import TaskList from '../../components/TaskList/modules/TaskList';

const TaskListContainer = styled.div<{ theme: DefaultTheme}>`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    padding: 40px;
    color: ${({ theme }) => theme.colors.text};
    height: 150vh;
    @media (max-width: 1024px) {
        display: inline;
        text-align: -webkit-center;
    }
`;

const TaskListPage: React.FC = () => {
    return(
        <TaskListContainer>
            <TaskList/>
        </TaskListContainer>
    );
};

export default TaskListPage;