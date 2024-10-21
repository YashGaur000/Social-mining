import React, { useState, useEffect } from 'react';
import { CardBox, CardWrapper } from '../../common/Card';
import { GlobalButton } from '../../common/Buttons/GlobalButton';
import Roundcheck from '../../../assets/roundcheck.svg';

import SideDesign from '../../../assets/sidedesign.svg';
import Bigtenex from '../../../assets/bigtenexbg.svg';
import {
  LetsGoButton,
  List,
  ListBox,
  ListItem,
  ListTitleHeading,
  Score,
  ScoreHeading,
  SocialCheckLogo,
  SocialLogo,
  SocialLogoBox,
  SocialLogoHeading,
  TaskBox,
  TaskBoxFullWrapper,
  TitleBox,
  TitleBox1,
  ViewMoreButton,
} from '../styles/TaskList.style';
import {
  MiddleLogo,
  MobileScreenHeader,
} from '../../DashBoard/styles/DashBoard.styles';
import viewMore from '../../../assets/moreIcone.svg';
import viewless from '../../../assets/lessIcone.svg';

import tasksData from '../../../task.json';
import theme from '../../../styles/Theme';

interface Task {
  platform: string;
  icon: string;
  title: string;
  buttonText: string;
  tasks: { description: string; expanded?: boolean }[];
  points: string;
}

const TaskList: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<{
    [key: string]: boolean;
  }>({});
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    setTasks(tasksData);
    const initialExpandedState = tasksData.reduce(
      (acc: { [key: string]: boolean }, task: Task) => {
        acc[task.platform] = false;
        return acc;
      },
      {} as { [key: string]: boolean }
    );
    setExpandedCards(initialExpandedState);
  }, []);

  const toggleExpand = (cardKey: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardKey]: !prev[cardKey],
    }));
  };

  const handleInviteLink = (invite: string) => {
    console.log('invite', invite);
    if (invite == 'discord') {
      window.location.href = 'https://discord.gg/s6RxFFWv';
    } else if (invite == 'reddit') {
      window.location.href = 'https://www.reddit.com/r/archlinux/';
    }
  };

  return (
    <TaskBoxFullWrapper>
      <TaskBox>
        <MiddleLogo Zindex="2" Top="26vh" Left="50%" src={Bigtenex} alt="#" />
        <ListTitleHeading Fontsize="20px" Lineheight="29.9px">
          Complete the following task and earn $TENEX
        </ListTitleHeading>
        <MobileScreenHeader>List of Task</MobileScreenHeader>
        {tasks.map((task) => (
          <CardWrapper key={task.platform}>
            <SocialLogoBox>
              <SocialLogo
                src={SideDesign}
                alt="sidedesign"
                Zindex="2"
                expand={expandedCards[task.platform]}
                cardType={task.platform}
                platform={task.platform}
                theme={theme}
              />
            </SocialLogoBox>

            <CardBox margin="0px 0px 0px -25px" height="fit-content">
              <TitleBox>
                <TitleBox1>
                  <SocialLogoHeading
                    height="36px"
                    width="36"
                    margin="0px 15px 0px 30px"
                    mobileMargin="0px 0px 0px 10px"
                    src={task.icon}
                    alt={``}
                  />
                  <ScoreHeading Fontsize="24px" Lineheight="35.88px">
                    {task.title}:
                  </ScoreHeading>
                </TitleBox1>
                <LetsGoButton
                  margin="10px 40px 0px auto"
                  onClick={() => {
                    handleInviteLink(task.platform);
                  }}
                >
                  <GlobalButton>{task.buttonText}</GlobalButton>
                </LetsGoButton>
              </TitleBox>
              <ListBox>
                <List>
                  {task.tasks.map((item, index) => (
                    <ListItem
                      key={index}
                      hideOnMobile={
                        !expandedCards[task.platform] && index !== 0
                      }
                    >
                      <SocialCheckLogo
                        height="20px"
                        width="20px"
                        src={Roundcheck}
                        alt="roundcheck Logo"
                      />
                      <Score Fontsize="20px" Lineheight="29.9px">
                        {item.description}
                      </Score>
                    </ListItem>
                  ))}
                  <ListItem hideOnMobile={!expandedCards[task.platform]}>
                    <Score Fontsize="20px" Lineheight="29.9px">
                      {task.points}
                    </Score>
                  </ListItem>
                </List>

                <ViewMoreButton onClick={() => toggleExpand(task.platform)}>
                  {expandedCards[task.platform] ? (
                    <>
                      View Less..
                      <img src={viewless} />
                    </>
                  ) : (
                    <>
                      View More.. <img src={viewMore} />
                    </>
                  )}
                </ViewMoreButton>
              </ListBox>
            </CardBox>
          </CardWrapper>
        ))}
      </TaskBox>
    </TaskBoxFullWrapper>
  );
};

export default TaskList;
