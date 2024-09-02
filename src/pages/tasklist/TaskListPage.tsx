import React from 'react';
import { DefaultTheme } from '../../styles/Theme';
import styled from 'styled-components';
import TaskList from '../../components/TaskList/modules/TaskList';

const TaskListContainer = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 1024px) {
    flex-direction: column; 
    align-items: center;    
    padding: 20px;          
    text-align: center;     
  }

  @media (max-width: 768px) {
    padding: 15px;          
    width: 100%;            
  }

  @media (max-width: 480px) {
    padding: 10px;          
    width: 100%;
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