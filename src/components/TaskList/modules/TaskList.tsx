import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  background-color: #10203f;
  padding: 40px;
  border-radius: 10px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const Header = styled.h1`
  color: #ffffff;
  text-align: center;
  margin-bottom: 30px;
`;

const TaskCard = styled.div`
  background-color: #162b4b;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TaskContent = styled.div`
  color: #ffffff;
`;

const TaskTitle = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const TasksList = styled.ul`
  list-style: none;
  padding-left: 20px;
  margin: 0;
`;

const TaskItem = styled.li`
  margin-bottom: 5px;
  &:before {
    content: '✔';
    margin-right: 8px;
    color: #5dd5ff;
  }
`;

const Reward = styled.p`
  font-size: 0.9rem;
  margin-top: 10px;
  color: #5dd5ff;
`;

const Button = styled.button`
  background-color: #02beff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #009bdc;
  }
`;

const TaskList: React.FC = () => {
  return (
    <Container>
      <Header>List of Social Mining Tasks</Header>

      <TaskCard>
        <TaskContent>
          <TaskTitle>Twitter Engagement:</TaskTitle>
          <TasksList>
            <TaskItem>Like, Retweet or reply to a @TenEx_Official tweets.</TaskItem>
            <TaskItem>Tag @TenEx_Official, $TENEX in your tweets.</TaskItem>
            <TaskItem>Mention TENEX in your tweets without tagging.</TaskItem>
          </TasksList>
          <Reward>Reward: Earn points for each completed action.</Reward>
        </TaskContent>
        <Button>Let's Go</Button>
      </TaskCard>

      <TaskCard>
        <TaskContent>
          <TaskTitle>Reddit Contribution:</TaskTitle>
          <TasksList>
            <TaskItem>Create or comment on posts in r/TENEX.</TaskItem>
            <TaskItem>Mention TENEX or $TENEX in other subreddits.</TaskItem>
          </TasksList>
          <Reward>Reward: Earn points for meaningful interactions.</Reward>
        </TaskContent>
        <Button>Let's Go</Button>
      </TaskCard>

      <TaskCard>
        <TaskContent>
          <TaskTitle>Discord Participation:</TaskTitle>
          <TasksList>
            <TaskItem>Join our Discord community and engage in discussions.</TaskItem>
            <TaskItem>Offer support and answer questions for additional rewards.</TaskItem>
          </TasksList>
          <Reward>Reward: Points based on the quality of engagement.</Reward>
        </TaskContent>
        <Button>Let's Go</Button>
      </TaskCard>
    </Container>
  );
};

export default TaskList;
