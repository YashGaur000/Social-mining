import React from 'react';
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
import { LetsGoButton, List, ListBox, ListItem, Score, SocialLogo, SocialLogoBox, TaskBox, TaskBoxFullWrapper, TitleBox} from '../styles/TaskList.style';
import { MiddleLogo } from '../../DashBoard/styles/DashBoard.styles';


const TaskList: React.FC = () => {

  const handleDiscordRedirect = () => {
    const discordOAuthUrl = import.meta.env.VITE_DISCORD_OAUTH; 
    if (discordOAuthUrl) {
      window.location.href = discordOAuthUrl; 
    } else {
      console.error('Discord OAuth URL not found in environment variables.');
    }
  };

  return(
    <TaskBoxFullWrapper>
      
        <TaskBox>
        {/* <SocialLogo src={Bigtenex} Position='fixed' margin='70px 0px 0px 560px'/> */}
        <MiddleLogo Zindex='2' Top='26vh' Left='50%' src={Bigtenex} alt='#'/>
          <Score Fontsize='20px' Lineheight='29.9px'>Complete the following task and earn $TENEX</Score>
          <CardWrapper>
          
            <SocialLogoBox>
          <SocialLogo height='275px' src={SideDesign} alt='sidedesign' Zindex='2'/>
          </SocialLogoBox>
          <CardBox margin='0px 0px 0px -25px'>
            <TitleBox>
              <SocialLogo height='36px' width='36' margin='0px 15px 0px 30px' src={TwitterLogo} alt="Reddit Logo" />
              <Score Fontsize='24px' Lineheight='35.88px'>Twitter Engagement:</Score>
              <LetsGoButton margin='10px 40px 0px auto'>
                <GlobalButton>
                  Lets Go
                </GlobalButton>
              </LetsGoButton>
            </TitleBox>
            <ListBox>
              <List>
                <ListItem>
                  <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" />
                  {/* <Score Fontsize='20px' Lineheight='29.9px'>Like, Retweet or reply to a <u>@TenEx_Official</u> tweets.</Score> */}
                  <Score Fontsize='20px' Lineheight='29.9px'>Like, Retweet or reply to a <u>@TenEx_Official</u> tweets.</Score>
                </ListItem>
                <ListItem>
                  <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" /> <Score Fontsize='20px' Lineheight='29.9px'>Tag @TenEx_Official, $TENEX in your tweets.</Score>
                </ListItem>
                <ListItem>
                  <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" /> <Score Fontsize='20px' Lineheight='29.9px'>Mention TENEX in your tweets without tagging.</Score>
                </ListItem>
                <ListItem>
                  <Score Fontsize='20px' Lineheight='29.9px'>Score 5 points by completing this task</Score>
                </ListItem> 
              </List>
            </ListBox>
          </CardBox>
          </CardWrapper>
          <CardWrapper>
            <SocialLogoBox>
          <SocialLogo height='240px' src={SideDesign} alt='sidedesign' Zindex='2'/>
          </SocialLogoBox>
          <CardBox margin='0px 0px 0px -25px'>
            <TitleBox>
              <SocialLogo height='36px' width='36' margin='0px 15px 0px 30px' src={Discord} alt="Reddit Logo" />
              <Score Fontsize='24px' Lineheight='35.88px'>Discord Participation:</Score>
              <LetsGoButton margin='10px 40px 0px auto'>
                <GlobalButton onClick={handleDiscordRedirect}>
                  Lets Go
                </GlobalButton>
              </LetsGoButton>
            </TitleBox>
            <ListBox>
              <List>
                <ListItem>
                  <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" />
                  <Score Fontsize='20px' Lineheight='29.9px'>Join our Discord community and engage in discussions.</Score>
                </ListItem>
                <ListItem>
                  <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" /> <Score Fontsize='20px' Lineheight='29.9px'>Offer support and answer questions for additional rewards.</Score>
                </ListItem>
                <ListItem>
                  <Score Fontsize='20px' Lineheight='29.9px'>Score 10 points by completing this task</Score>
                </ListItem>
              </List>
            </ListBox>
          </CardBox>
          </CardWrapper>
          <CardWrapper>
            <SocialLogoBox>
          <SocialLogo height='240px' src={SideDesign} alt='sidedesign' Zindex='2'/>
          </SocialLogoBox>
          <CardBox margin='0px 0px 0px -25px'>
            <TitleBox>
              <SocialLogo height='36px' width='36' margin='0px 15px 0px 30px' src={Telegram} alt="Reddit Logo" />
              <Score Fontsize='24px' Lineheight='35.88px'>Telegram Contribution:</Score>
              <LetsGoButton margin='10px 40px 0px auto'>
                <GlobalButton>
                  Lets Go
                </GlobalButton>
              </LetsGoButton>
            </TitleBox>
            <ListBox>
              <List>
                <ListItem>
                  <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" />
                  <Score Fontsize='20px' Lineheight='29.9px'>Join our Discord community and engage in discussions.</Score>
                </ListItem>
                <ListItem>
                  <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" /> <Score Fontsize='20px' Lineheight='29.9px'>Offer support and answer questions for additional rewards.</Score>
                </ListItem>
                <ListItem>
                  <Score Fontsize='20px' Lineheight='29.9px'>Score 10 points by completing this task</Score>
                </ListItem>
              </List>
            </ListBox>
          </CardBox>
          </CardWrapper>
          <CardWrapper>
            <SocialLogoBox>
          <SocialLogo height='240px' src={SideDesign} alt='sidedesign' Zindex='2'/>
          </SocialLogoBox>
          <CardBox margin='0px 0px 0px -25px'>
            <TitleBox>
              <SocialLogo height='36px' width='36' margin='0px 15px 0px 30px' src={Reddit} alt="Reddit Logo" />
              <Score Fontsize='24px' Lineheight='35.88px'>Reddit Contribution:</Score>
              <LetsGoButton margin='10px 40px 0px auto'>
                <GlobalButton>
                  Lets Go
                </GlobalButton>
              </LetsGoButton>
            </TitleBox>
            <ListBox>
              <List>
                <ListItem>
                  <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" />
                  <Score Fontsize='20px' Lineheight='29.9px'>Create or comment on posts in r/TENEX.</Score>
                </ListItem>
                <ListItem>
                  <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" /> <Score Fontsize='20px' Lineheight='29.9px'>Mention TENEX or $TENEX in other subreddits.</Score>
                </ListItem>
                <ListItem>
                  <Score Fontsize='20px' Lineheight='29.9px'>Score 5 points by completing this task</Score>
                </ListItem>
              </List>
            </ListBox>
          </CardBox>
          </CardWrapper>
          <CardWrapper>
            <SocialLogoBox>
          <SocialLogo height='210px' src={SideDesign} alt='sidedesign' Zindex='2'/>
          </SocialLogoBox>
          <CardBox margin='0px 0px 0px -25px'>
            <TitleBox>
              <SocialLogo height='36px' width='36' margin='0px 15px 0px 30px' src={Binance} alt="Reddit Logo" />
              <Score Fontsize='24px' Lineheight='35.88px'>Exchange Activity:</Score>
              <LetsGoButton margin='10px 40px 0px auto'>
                <GlobalButton>
                  Lets Go
                </GlobalButton>
              </LetsGoButton>
            </TitleBox>
            <ListBox>
              <List>
                <ListItem>
                  <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" />
                  <Score Fontsize='20px' Lineheight='29.9px'>Connect Exchange using a read-only API key.</Score>
                </ListItem>
                <ListItem>
                  <Score Fontsize='20px' Lineheight='29.9px'>Score points by trading $TENEX</Score>
                </ListItem>
              </List>
            </ListBox>
          </CardBox>
          </CardWrapper>
          <CardWrapper>
            <SocialLogoBox>
          <SocialLogo height='240px' src={SideDesign} alt='sidedesign' Zindex='2'/>
          </SocialLogoBox>
          <CardBox margin='0px 0px 0px -25px'>
            <TitleBox>
              <SocialLogo height='36px' width='36' margin='0px 15px 0px 30px' src={Article} alt="Reddit Logo" />
              <Score Fontsize='24px' Lineheight='35.88px'>Write an article about TENEX</Score>
              <LetsGoButton margin='10px 40px 0px auto'>
                <GlobalButton>
                  Lets Go
                </GlobalButton>
              </LetsGoButton>
            </TitleBox>
            <ListBox>
              <List>
                <ListItem>
                  <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" />
                  <Score Fontsize='20px' Lineheight='29.9px'>Write and submit articles about TENEX.</Score>
                </ListItem>
                <ListItem>
                  <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" /> <Score Fontsize='20px' Lineheight='29.9px'>Earn points based on the quality and depth of your article.</Score>
                </ListItem>
                <ListItem>
                  <Score Fontsize='20px' Lineheight='29.9px'>Score 20 points by completing this task</Score>
                </ListItem>
              </List>
            </ListBox>
          </CardBox>
          </CardWrapper>
          <CardWrapper>
            <SocialLogoBox>
          <SocialLogo height='240px' src={SideDesign} alt='sidedesign' Zindex='2'/>
          </SocialLogoBox>
          <CardBox margin='0px 0px 0px -25px'>
            <TitleBox>
              <SocialLogo height='36px' width='36' margin='0px 15px 0px 30px' src={Play} alt="Reddit Logo" />
              <Score Fontsize='24px' Lineheight='35.88px'>Create a video about TENEX</Score>
              <LetsGoButton margin='10px 40px 0px auto'>
                <GlobalButton>
                  Lets Go
                </GlobalButton>
              </LetsGoButton>
            </TitleBox>
            <ListBox>
              <List>
                <ListItem>
                  <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" />
                  <Score Fontsize='20px' Lineheight='29.9px'>Capture an engaging video about TENEX to share on your social media platforms.</Score>
                </ListItem>
                <ListItem>
                  <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" /> <Score Fontsize='20px' Lineheight='29.9px'>After reaching 100 views, send us the link of your video to claim your points.</Score>
                </ListItem>
                <ListItem>
                  <Score Fontsize='20px' Lineheight='29.9px'>More views equal more points! Earn up to 100 points per video depending on its reach.</Score>
                </ListItem>
              </List>
            </ListBox>
          </CardBox>
          </CardWrapper>
        </TaskBox>
      {/* </TaskBoxWrapper> */}
      <Score Margin='100px 0px 0px 0px'>Rewards are paid at the end of each month based on each user&apos;s accrued points</Score>
    </TaskBoxFullWrapper>

  );
};

export default TaskList;
