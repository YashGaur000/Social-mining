import React, { useState } from 'react';
import { CardBox, CardWrapper } from '../../common/Card';
import { GlobalButton } from '../../common/Buttons/GlobalButton';
import Roundcheck from '../../../assets/roundcheck.svg';
import TwitterLogo from '../../../assets/twitter.svg';
import Reddit from '../../../assets/reddit.svg';
import Telegram from '../../../assets/telegram.svg';
import Discord from '../../../assets/discord.svg';
import Article from '../../../assets/article.svg';
import Play from '../../../assets/play.svg';
import Binance from '../../../assets/binance.svg';
import SideDesign from '../../../assets/sidedesign.svg';
import Bigtenex from '../../../assets/bigtenexbg.svg';
import {
  LetsGoButton,
  List,
  ListBox,
  ListItem,
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
import { MiddleLogo } from '../../DashBoard/styles/DashBoard.styles';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import viewMore from '../../../assets/moreIcone.svg';
import viewless from '../../../assets/lessIcone.svg';

const TaskList: React.FC = () => {
  // const navigate = useNavigate()

  const [expandedCards, setExpandedCards] = useState<{
    [key: string]: boolean;
  }>({
    twitter: false,
    discord: false,
    telegram: false,
    reddit: false,
    exchange: false,
    article: false,
    video: false,
  });

  // const [expand, setExpand] = useState(false);

  const toggleExpand = (cardKey: string) => {
    //  setExpand(true);
    setExpandedCards((prev) => ({
      ...prev,
      [cardKey]: !prev[cardKey],
    }));
  };

  const handleDiscordRedirect = async () => {
    try {
      console.log('1-->', window.location);
      const discordOAuthUrl = import.meta.env.VITE_DISCORD_OAUTH;

      if (!discordOAuthUrl) {
        console.error('Discord OAuth URL not found in environment variables.');
        return;
      }
      window.location.href = discordOAuthUrl;

      //navigate(discordOAuthUrl)

      console.log('2--', window.location);

      const fragment = new URLSearchParams(window.location.hash.slice(1));
      const [code] = [fragment.get('code')];
      console.log('code---->', code);

      console.log(discordOAuthUrl);

      // const response = await axios.get("http://localhost:3000");
      // console.log("===================>", response.data);
    } catch (err) {
      console.log(
        '-----------------discordOauthURL not connected-----------------',
        err
      );
    }
    // if (discordOAuthUrl) {
    //   window.location.href = discordOAuthUrl;
    // } else {
    //   console.error('Discord OAuth URL not found in environment variables.');
    // }
  };

  const handleRedditRedirect = () => {
    const redditOAuthUrl = import.meta.env.VITE_REDDIT_OAUTH;
    {
      /* <SocialLogo src={Bigtenex} Position='fixed' margin='70px 0px 0px 560px'/> */
    }
    if (redditOAuthUrl) {
      window.location.href = redditOAuthUrl;
    } else {
      console.error('Reddit OAuth URL not found in environment variables.');
    }
  };

  return (
    <TaskBoxFullWrapper>
      <TaskBox>
        <MiddleLogo Zindex="2" Top="26vh" Left="50%" src={Bigtenex} alt="#" />
        <Score Fontsize="20px" Lineheight="29.9px">
          Complete the following task and earn $TENEX
        </Score>
        <CardWrapper height="fit-content">
          <SocialLogoBox>
            <SocialLogo
              height="262px"
              src={SideDesign}
              alt="sidedesign"
              Zindex="2"
              expand={expandedCards.twitter}
              cardType="twitter"
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
                  src={TwitterLogo}
                  alt="Reddit Logo"
                />
                <ScoreHeading Fontsize="24px" Lineheight="35.88px">
                  Twitter Engagement:
                </ScoreHeading>
              </TitleBox1>
              <LetsGoButton margin="10px 40px 0px auto">
                <GlobalButton>Engage Now</GlobalButton>
              </LetsGoButton>
            </TitleBox>
            <ListBox>
              <List>
                <ListItem>
                  <SocialCheckLogo
                    height="20px"
                    width="20px"
                    src={Roundcheck}
                    alt="roundcheck Logo"
                  />
                  {/* <Score Fontsize='20px' Lineheight='29.9px'>Like, Retweet or reply to a <u>@TenEx_Official</u> tweets.</Score> */}
                  <Score Fontsize="20px" Lineheight="29.9px">
                    Like, Retweet or reply to a <u>@TenEx_Official</u> tweets.
                  </Score>
                </ListItem>

                <ListItem hideOnMobile={!expandedCards.twitter}>
                  <SocialCheckLogo
                    height="20px"
                    width="20px"
                    src={Roundcheck}
                    alt="roundcheck Logo"
                  />{' '}
                  <Score Fontsize="20px" Lineheight="29.9px">
                    Tag @TenEx_Official, $TENEX in your tweets.
                  </Score>
                </ListItem>

                <ListItem hideOnMobile={!expandedCards.twitter}>
                  <SocialCheckLogo
                    height="20px"
                    width="20px"
                    src={Roundcheck}
                    alt="roundcheck Logo"
                  />{' '}
                  <Score Fontsize="20px" Lineheight="29.9px">
                    Mention TENEX in your tweets without tagging.
                  </Score>
                </ListItem>
                <ListItem hideOnMobile={!expandedCards.twitter}>
                  <Score Fontsize="20px" Lineheight="29.9px">
                    Score 5 points by completing this task
                  </Score>
                </ListItem>
              </List>
              <ViewMoreButton onClick={() => toggleExpand('twitter')}>
                {expandedCards.twitter ? (
                  <>
                    View Less..
                    <img src={viewless} />{' '}
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

        <CardWrapper>
          <SocialLogoBox>
            <SocialLogo
              height="222px"
              src={SideDesign}
              alt="sidedesign"
              Zindex="2"
              expand={expandedCards.discord}
              cardType="discord"
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
                  src={Discord}
                  alt="Reddit Logo"
                />
                <ScoreHeading Fontsize="24px" Lineheight="35.88px">
                  Discord Participation:
                </ScoreHeading>
              </TitleBox1>
              <LetsGoButton margin="10px 30px 0px auto">
                <GlobalButton onClick={handleDiscordRedirect}>
                  Participate
                </GlobalButton>
              </LetsGoButton>
            </TitleBox>
            <ListBox>
              <List>
                <ListItem>
                  <SocialCheckLogo
                    height="20px"
                    width="20px"
                    src={Roundcheck}
                    alt="roundcheck Logo"
                  />
                  <Score Fontsize="20px" Lineheight="29.9px">
                    Join our Discord community and engage in discussions.
                  </Score>
                </ListItem>
                <ListItem hideOnMobile={!expandedCards.discord}>
                  <SocialCheckLogo
                    height="20px"
                    width="20px"
                    src={Roundcheck}
                    alt="roundcheck Logo"
                  />{' '}
                  <Score Fontsize="20px" Lineheight="29.9px">
                    Offer support and answer questions for additional rewards.
                  </Score>
                </ListItem>
                <ListItem hideOnMobile={!expandedCards.discord}>
                  <Score Fontsize="20px" Lineheight="29.9px">
                    Score 10 points by completing this task
                  </Score>
                </ListItem>

                <ViewMoreButton onClick={() => toggleExpand('discord')}>
                  {expandedCards.discord ? (
                    <>
                      View Less..
                      <img src={viewless} />{' '}
                    </>
                  ) : (
                    <>
                      View More.. <img src={viewMore} />
                    </>
                  )}
                </ViewMoreButton>
              </List>
            </ListBox>
          </CardBox>
        </CardWrapper>
        <CardWrapper>
          <SocialLogoBox>
            <SocialLogo
              height="222px"
              src={SideDesign}
              alt="sidedesign"
              Zindex="2"
              expand={expandedCards.telegram}
              cardType="telegram"
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
                  src={Telegram}
                  alt="Reddit Logo"
                />
                <ScoreHeading Fontsize="24px" Lineheight="35.88px">
                  Telegram Contribution:
                </ScoreHeading>
              </TitleBox1>
              <LetsGoButton margin="10px 40px 0px auto">
                <GlobalButton>Contribute</GlobalButton>
              </LetsGoButton>
            </TitleBox>
            <ListBox>
              <List>
                <ListItem>
                  <SocialCheckLogo
                    height="20px"
                    width="20px"
                    src={Roundcheck}
                    alt="roundcheck Logo"
                  />
                  <Score Fontsize="20px" Lineheight="29.9px">
                    Join our Discord community and engage in discussions.
                  </Score>
                </ListItem>
                <ListItem hideOnMobile={!expandedCards.telegram}>
                  <SocialCheckLogo
                    height="20px"
                    width="20px"
                    src={Roundcheck}
                    alt="roundcheck Logo"
                  />{' '}
                  <Score Fontsize="20px" Lineheight="29.9px">
                    Offer support and answer questions for additional rewards.
                  </Score>
                </ListItem>
                <ListItem hideOnMobile={!expandedCards.telegram}>
                  <Score Fontsize="20px" Lineheight="29.9px">
                    Score 10 points by completing this task
                  </Score>
                </ListItem>
              </List>
              <ViewMoreButton onClick={() => toggleExpand('telegram')}>
                {expandedCards.telegram ? (
                  <>
                    View Less..
                    <img src={viewless} />{' '}
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
        <CardWrapper>
          <SocialLogoBox>
            <SocialLogo
              height="221px"
              src={SideDesign}
              alt="sidedesign"
              Zindex="2"
              expand={expandedCards.reddit}
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
                  src={Reddit}
                  alt="Reddit Logo"
                />
                <ScoreHeading Fontsize="24px" Lineheight="35.88px">
                  Reddit Contribution:
                </ScoreHeading>
              </TitleBox1>
              <LetsGoButton margin="10px 40px 0px auto">
                <GlobalButton onClick={handleRedditRedirect}>
                  Contribute
                </GlobalButton>
              </LetsGoButton>
            </TitleBox>
            <ListBox>
              <List>
                <ListItem>
                  <SocialCheckLogo
                    height="20px"
                    width="20px"
                    src={Roundcheck}
                    alt="roundcheck Logo"
                  />
                  <Score Fontsize="20px" Lineheight="29.9px">
                    Create or comment on posts in r/TENEX.
                  </Score>
                </ListItem>
                <ListItem hideOnMobile={!expandedCards.reddit}>
                  <SocialCheckLogo
                    height="20px"
                    width="20px"
                    src={Roundcheck}
                    alt="roundcheck Logo"
                  />{' '}
                  <Score Fontsize="20px" Lineheight="29.9px">
                    Mention TENEX or $TENEX in other subreddits.
                  </Score>
                </ListItem>
                <ListItem hideOnMobile={!expandedCards.reddit}>
                  <Score Fontsize="20px" Lineheight="29.9px">
                    Score 5 points by completing this task
                  </Score>
                </ListItem>
              </List>
              <ViewMoreButton onClick={() => toggleExpand('reddit')}>
                {expandedCards.reddit ? (
                  <>
                    View Less..
                    <img src={viewless} />{' '}
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
        <CardWrapper>
          <SocialLogoBox>
            <SocialLogo
              height="182px"
              src={SideDesign}
              alt="sidedesign"
              Zindex="2"
              expand={expandedCards.exchange}
              cardType="exchange"
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
                  src={Binance}
                  alt="Reddit Logo"
                />
                <ScoreHeading Fontsize="24px" Lineheight="35.88px">
                  Exchange Activity:
                </ScoreHeading>
              </TitleBox1>
              <LetsGoButton margin="10px 40px 0px auto">
                <GlobalButton>Swap</GlobalButton>
              </LetsGoButton>
            </TitleBox>
            <ListBox>
              <List>
                <ListItem>
                  <SocialCheckLogo
                    height="20px"
                    width="20px"
                    src={Roundcheck}
                    alt="roundcheck Logo"
                  />
                  <Score Fontsize="20px" Lineheight="29.9px">
                    Connect Exchange using a read-only API key.
                  </Score>
                </ListItem>
                <ListItem hideOnMobile={!expandedCards.exchange}>
                  <Score Fontsize="20px" Lineheight="29.9px">
                    Score points by trading $TENEX
                  </Score>
                </ListItem>
              </List>
              <ViewMoreButton onClick={() => toggleExpand('exchange')}>
                {expandedCards.exchange ? (
                  <>
                    View Less..
                    <img src={viewless} />{' '}
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
        <CardWrapper>
          <SocialLogoBox>
            <SocialLogo
              height="222px"
              src={SideDesign}
              alt="sidedesign"
              Zindex="2"
              expand={expandedCards.article}
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
                  src={Article}
                  alt="Reddit Logo"
                />
                <ScoreHeading Fontsize="24px" Lineheight="35.88px">
                  Write an article about TENEX
                </ScoreHeading>
              </TitleBox1>
              <LetsGoButton margin="10px 40px 0px auto">
                <GlobalButton>Upload</GlobalButton>
              </LetsGoButton>
            </TitleBox>
            <ListBox>
              <List>
                <ListItem>
                  <SocialCheckLogo
                    height="20px"
                    width="20px"
                    src={Roundcheck}
                    alt="roundcheck Logo"
                  />
                  <Score Fontsize="20px" Lineheight="29.9px">
                    Write and submit articles about TENEX.
                  </Score>
                </ListItem>
                <ListItem hideOnMobile={!expandedCards.article}>
                  <SocialCheckLogo
                    height="20px"
                    width="20px"
                    src={Roundcheck}
                    alt="roundcheck Logo"
                  />{' '}
                  <Score Fontsize="20px" Lineheight="29.9px">
                    Earn points based on the quality and depth of your article.
                  </Score>
                </ListItem>
                <ListItem hideOnMobile={!expandedCards.article}>
                  <Score Fontsize="20px" Lineheight="29.9px">
                    Score 20 points by completing this task
                  </Score>
                </ListItem>
              </List>
              <ViewMoreButton onClick={() => toggleExpand('article')}>
                {expandedCards.article ? (
                  <>
                    View Less..
                    <img src={viewless} />{' '}
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
        <CardWrapper>
          <SocialLogoBox>
            <SocialLogo
              height="220px"
              src={SideDesign}
              alt="sidedesign"
              Zindex="2"
              expand={expandedCards.video}
              cardType="vedio"
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
                  src={Play}
                  alt="Reddit Logo"
                />
                <ScoreHeading Fontsize="24px" Lineheight="35.88px">
                  Create a video about TENEX
                </ScoreHeading>
              </TitleBox1>
              <LetsGoButton margin="10px 40px 0px auto">
                <GlobalButton>Upload</GlobalButton>
              </LetsGoButton>
            </TitleBox>
            <ListBox>
              <List>
                <ListItem>
                  <SocialCheckLogo
                    height="20px"
                    width="20px"
                    src={Roundcheck}
                    alt="roundcheck Logo"
                  />
                  <Score Fontsize="20px" Lineheight="25.9px">
                    Capture an engaging video about TENEX to share on your
                    social media platforms.
                  </Score>
                </ListItem>
                <ListItem hideOnMobile={!expandedCards.video}>
                  <SocialCheckLogo
                    height="20px"
                    width="20px"
                    src={Roundcheck}
                    alt="roundcheck Logo"
                  />{' '}
                  <Score Fontsize="20px" Lineheight="29.9px">
                    After reaching 100 views, send us the link of your video to
                    claim your points.
                  </Score>
                </ListItem>
                <ListItem hideOnMobile={!expandedCards.video}>
                  <Score Fontsize="20px" Lineheight="29.9px">
                    More views equal more points! Earn up to 100 points per
                    video depending on its reach.
                  </Score>
                </ListItem>
              </List>
              <ViewMoreButton onClick={() => toggleExpand('video')}>
                {expandedCards.video ? (
                  <>
                    View Less..
                    <img src={viewless} />{' '}
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
      </TaskBox>
      {/* </TaskBoxWrapper> */}
      <Score Margin="100px 0px 0px 0px">
        Rewards are paid at the end of each month based on each user&apos;s
        accrued points
      </Score>
    </TaskBoxFullWrapper>
  );
};

export default TaskList;

// import React from 'react';
// import { CardBox, CardWrapper } from '../../common/Card';
// import { GlobalButton } from '../../common/Buttons/GlobalButton';
// import Roundcheck from '../../../assets/roundcheck.svg';
// import SideDesign from '../../../assets/sidedesign.svg';
// import Bigtenex from '../../../assets/bigtenexbg.svg';
// import { LetsGoButton, List, ListBox, ListItem, Score, SocialLogo, SocialLogoBox, TaskBox, TaskBoxFullWrapper, TitleBox } from '../styles/TaskList.style';
// import { MiddleLogo } from '../../DashBoard/styles/DashBoard.styles';

// type Task = {
//   logo: string;
//   title: string;
//   actions: string[];
//   points: number;
//   onClick?: () => void;
// };

// const tasks: Task[] = [
//   {
//     logo: '../../..',
//     title: 'Twitter Engagement:',
//     actions: [
//       'Like, Retweet or reply to a @TenEx_Official tweet.',
//       'Tag @TenEx_Official, $TENEX in your tweets.',
//       'Mention TENEX in your tweets without tagging.',
//     ],
//     points: 5,
//   },
//   {
//     logo: '../../../assets/discord.svg',
//     title: 'Discord Participation:',
//     actions: [
//       'Join our Discord community and engage in discussions.',
//       'Offer support and answer questions for additional rewards.',
//     ],
//     points: 10,
//     onClick: () => {
//       const discordOAuthUrl = import.meta.env.VITE_DISCORD_OAUTH;
//       if (discordOAuthUrl) {
//         window.location.href = discordOAuthUrl;
//       } else {
//         console.error('Discord OAuth URL not found.');
//       }
//     },
//   },
//   {
//     logo: '../../../assets/telegram.svg',
//     title: 'Telegram Contribution:',
//     actions: [
//       'Join our Telegram community and engage in discussions.',
//       'Offer support and answer questions for additional rewards.',
//     ],
//     points: 10,
//   },
//   {
//     logo: '../../../assets/reddit.svg',
//     title: 'Reddit Contribution:',
//     actions: [
//       'Create or comment on posts in r/TENEX.',
//       'Mention TENEX or $TENEX in other subreddits.',
//     ],
//     points: 5,
//     onClick: () => {
//       const redditOAuthUrl = import.meta.env.VITE_REDDIT_OAUTH;
//       if (redditOAuthUrl) {
//         window.location.href = redditOAuthUrl;
//       } else {
//         console.error('Reddit OAuth URL not found.');
//       }
//     },
//   },
//   // Add other tasks similarly...
// ];

// const TaskItem: React.FC<Task> = ({ logo, title, actions, points, onClick }) => (
//   <CardWrapper>
//     <SocialLogoBox>
//       <SocialLogo height="240px" src={SideDesign} alt="sidedesign" Zindex="2" />
//     </SocialLogoBox>
//     <CardBox margin="0px 0px 0px -25px">
//       <TitleBox>
//         <SocialLogo height="36px" width="36px" margin="0px 15px 0px 30px" src={logo} alt="task logo" />
//         <Score Fontsize="24px" Lineheight="35.88px">{title}</Score>
//         <LetsGoButton margin="10px 40px 0px auto">
//           <GlobalButton onClick={onClick}>
//             Lets Go
//           </GlobalButton>
//         </LetsGoButton>
//       </TitleBox>
//       <ListBox>
//         <List>
//           {actions.map((action, index) => (
//             <ListItem key={index}>
//               <SocialLogo height="20px" width="20px" src={Roundcheck} alt="check logo" />
//               <Score Fontsize="20px" Lineheight="29.9px">{action}</Score>
//             </ListItem>
//           ))}
//           <ListItem>
//             <Score Fontsize="20px" Lineheight="29.9px">Score {points} points by completing this task</Score>
//           </ListItem>
//         </List>
//       </ListBox>
//     </CardBox>
//   </CardWrapper>
// );

// const TaskList: React.FC = () => {
//   return (
//     <TaskBoxFullWrapper>
//       <TaskBox>
//         <MiddleLogo Zindex="2" Top="26vh" Left="50%" src={Bigtenex} alt="#" />
//         <Score Fontsize="20px" Lineheight="29.9px">Complete the following task and earn $TENEX</Score>
//         {tasks.map((task, index) => (
//           <TaskItem key={index} {...task} />
//         ))}
//       </TaskBox>
//       <Score Margin="100px 0px 0px 0px">Rewards are paid at the end of each month based on each user's accrued points</Score>
//     </TaskBoxFullWrapper>
//   );
// };

// export default TaskList;
