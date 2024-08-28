import React from 'react';
import { Card, CardWrapper } from '../../common/Card';
import { GlobalButton } from '../../common/Buttons/GlobalButton';
import Roundcheck from '../../../assets/roundcheck.svg';
import TwitterLogo from '../../../assets/twitter.svg';
import Reddit from '../../../assets/reddit.svg';
import Discord from '../../../assets/discord.svg';
import Article from '../../../assets/article.svg';
import Play from '../../../assets/play.svg';
import Binance from '../../../assets/binance.svg';
import { LetsGoButton, List, ListBox, ListItem, Score, SocialLogo, TaskBox, TaskBoxFullWrapper, TaskBoxWrapper, TitleBox } from '../styles/TaskList.style';


const TaskList: React.FC = () => {
  return(
    <TaskBoxFullWrapper>
      <TaskBoxWrapper>
        <TaskBox>
          <CardWrapper>
            <Card>
              <TitleBox>
                <SocialLogo height='36px' width='36' margin='0px 15px 0px 10px' src={TwitterLogo} alt="twitter Logo" />
                Twitter Engagement:
                <LetsGoButton margin='-10px 0px 0px auto'>
                  <GlobalButton>
                    Lets Go
                  </GlobalButton>
                </LetsGoButton>
              </TitleBox>
              <ListBox>
                <List>
                  <ListItem>
                    <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" /> Like, Retweet or reply to a @TenEx_Official tweets.
                  </ListItem>
                  <ListItem>
                    <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" /> Tag @TenEx_Official, $TENEX in your tweets.
                  </ListItem>
                  <ListItem>
                    <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" /> Mention TENEX in your tweets without tagging.
                  </ListItem>
                  <ListItem>
                    Score 5 points by completing this task
                  </ListItem>
                </List>
              </ListBox>
            </Card>
            </CardWrapper>
            <CardWrapper>
          <Card>
            <TitleBox>
              <SocialLogo height='36px' width='36' margin='0px 15px 0px 10px' src={Reddit} alt="Reddit Logo" />
              Reddit Contribution:
              <LetsGoButton margin='-10px 0px 0px auto'>
                <GlobalButton>
                  Lets Go
                </GlobalButton>
              </LetsGoButton>
            </TitleBox>
            <ListBox>
              <List>
                <ListItem>
                  <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" /> Create or comment on posts in r/TENEX.
                </ListItem>
                <ListItem>
                  <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" /> Mention TENEX or $TENEX in other subreddits.
                </ListItem>
                <ListItem>
                  Score 5 points by completing this task
                </ListItem>
              </List>
            </ListBox>
          </Card>
          </CardWrapper>
          <CardWrapper>
          <Card>
            <TitleBox>
              <SocialLogo height='36px' width='36' margin='0px 13px 0px 5px' src={Discord} alt="Discord Logo" />
              Discord Participation:
              <LetsGoButton margin='-10px 0px 0px auto'>
                <GlobalButton>
                  Lets Go
                </GlobalButton>
              </LetsGoButton>
            </TitleBox>
            <ListBox>
              <List>
                <ListItem>
                  <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" /> Join our discord community and engage in discussions.
                </ListItem>
                <ListItem>
                  <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" /> Offer support and answer questions for additional rewards.
                </ListItem>
                <ListItem>
                  Score 5 points by completing this task
                </ListItem>
              </List>
            </ListBox>
          </Card>  
          </CardWrapper>
          <CardWrapper>
          <Card>
            <TitleBox>
              <SocialLogo height='36px' width='36' margin='0px 15px 0px 10px' src={Binance} alt="Binance Logo" />
              Binance Activity:
              <LetsGoButton margin='-10px 0px 0px auto'>
                <GlobalButton>
                  Lets Go
                </GlobalButton>
              </LetsGoButton>
            </TitleBox>
            <ListBox>
              <List>
                <ListItem>
                  <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" /> Connect Binance using a read-only API key.
                </ListItem>
                <ListItem>
                  Score 5 points by completing this task
                </ListItem>
              </List>
            </ListBox>
          </Card>  
          </CardWrapper>
          <CardWrapper>
          <Card>
            <TitleBox>
              <SocialLogo height='36px' width='36' margin='0px 10px 0px 10px' src={Article} alt="Article Logo" />
              Write an article about TENEX:
              <LetsGoButton margin='-10px 0px 0px auto'>
                <GlobalButton>
                  Lets Go
                </GlobalButton>
              </LetsGoButton>
            </TitleBox>
            <ListBox>
              <List>
                <ListItem>
                  <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" /> Write and submit articles about TENEX.
                </ListItem>
                <ListItem>
                  <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" /> Earn points based on the quality and depth of your article.
                </ListItem>
                <ListItem>
                  Score 20 points by completing this task
                </ListItem>
              </List>
            </ListBox>
          </Card>
          </CardWrapper>
          <CardWrapper>
          <Card>
            <TitleBox>
              <SocialLogo height='36px' width='36' margin='0px 15px 0px 10px' src={Play} alt="Play Logo" />
              Create a video about TENEX:
              <LetsGoButton margin='-10px 0px 0px auto'>
                <GlobalButton>
                  Lets Go
                </GlobalButton>
              </LetsGoButton>
            </TitleBox>
            <ListBox>
              <List>
                <ListItem>
                  <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" />
                  Create your own video about TENEX and submit a link to it. The TENEX team will then review
                  your video and assign points to you based on its quality.
                </ListItem>
                <ListItem>
                  <SocialLogo height='20px' width='20px' src={Roundcheck} alt="roundcheck Logo" />You can earn up to <strong>40 points</strong> for a video.
                </ListItem>
              </List>
            </ListBox>
          </Card>  
          </CardWrapper>
        </TaskBox>
      </TaskBoxWrapper>
      <Score>Rewards are paid at the end of each month based on each user&apos;s accrued points</Score>
    </TaskBoxFullWrapper>

  );
};

export default TaskList;
