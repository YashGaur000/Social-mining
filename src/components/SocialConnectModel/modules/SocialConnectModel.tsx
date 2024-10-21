import {
  DashBoardConnectionCards,
  DashBoardConnectionCard,
  DashBoardConnectionText,
  DashBoardConnectionButton,
  DashBoardButtonsWrapper,
  DashBoardConnectionImage,
  LoginTickImage,
  SocialConnectModelImage,
} from '../styles/SocialConnectModel.style';
import twitter from '../../../assets/twitter.svg';
import discord from '../../../assets/discord.svg';
import telegram from '../../../assets/telegram.svg';
import reddit from '../../../assets/reddit.svg';
import logintick from '../../../assets/logintick.svg';

import sideborder from '../../../assets/sideborder.svg';
import { MobileScreenHeader } from '../../DashBoard/styles/DashBoard.styles';

interface SocialConnectModelProps {
  display?: string;
}
const SocialConnectModel: React.FC<SocialConnectModelProps> = ({ display }) => {
  const handleTwitterLogin = async () => {
    // try {
    //   console.log('clicked');
    //   const response = await axios.post(
    //     'http://localhost:3000/api/users/login',
    //     { Address },
    //     { withCredentials: true }
    //   );
    //   const data = response.data;
    //   if (data.authorizationUrl) {
    //     window.location.href = data.authorizationUrl;
    //   }
    // } catch (error) {
    //   console.error('Failed to initiate Twitter login:', error);
    // }
  };

  // useEffect(() => {
  //   const urlParams = new URLSearchParams(location.search);
  //   const status = urlParams.get('status');

  //   if (status === 'success') {
  //     dispatch(
  //       setAuthState({
  //         isAuthenticated: true,
  //         accessToken: token,
  //         userInfo: null,
  //       })
  //     );
  //     navigate('/dashboard');
  //   } else if (status === 'failure') {
  //     dispatch(clearAuthState());
  //   }
  // }, [location, dispatch, navigate]);

  const handleDiscordRedirect = () => {
    const discordOAuthUrl = import.meta.env.VITE_DISCORD_OAUTH;
    if (discordOAuthUrl) {
      window.location.href = discordOAuthUrl;
    } else {
      console.error('Discord OAuth URL not found in environment variables.');
    }
  };

  const handleRedditRedirect = () => {
    const redditOAuthUrl = import.meta.env.VITE_REDDIT_OAUTH;
    if (redditOAuthUrl) {
      window.location.href = redditOAuthUrl;
    } else {
      console.error('Reddit OAuth URL not found in environment variables.');
    }
  };

  const handleTelegramConnect = () => {
    const telegramOAuthUrl = import.meta.env.VITE_TELEGRAM_OAUTH;
    if (telegramOAuthUrl) {
      window.open(telegramOAuthUrl, '_blank');
    } else {
      console.error('URL not found');
    }
  };

  return (
    <>
      <DashBoardConnectionCards display={display}>
        <MobileScreenHeader>Connect your social accounts</MobileScreenHeader>

        <DashBoardConnectionCard>
          <SocialConnectModelImage src={sideborder} alt="" />
          <DashBoardConnectionText>
            Connect with Twitter
          </DashBoardConnectionText>
          <DashBoardConnectionButton>
            <DashBoardButtonsWrapper onClick={handleTwitterLogin}>
              <DashBoardConnectionImage src={twitter} />
            </DashBoardButtonsWrapper>
            <DashBoardButtonsWrapper>connect</DashBoardButtonsWrapper>
            <DashBoardButtonsWrapper>
              <LoginTickImage height="12px" width="12px" src={logintick} />
            </DashBoardButtonsWrapper>
          </DashBoardConnectionButton>
        </DashBoardConnectionCard>

        <DashBoardConnectionCard>
          <SocialConnectModelImage src={sideborder} alt="" />
          <DashBoardConnectionText>
            Connect with Discord
          </DashBoardConnectionText>
          <DashBoardConnectionButton onClick={handleDiscordRedirect}>
            <DashBoardButtonsWrapper>
              <DashBoardConnectionImage src={discord} />
            </DashBoardButtonsWrapper>
            <DashBoardButtonsWrapper>Participate</DashBoardButtonsWrapper>
          </DashBoardConnectionButton>
        </DashBoardConnectionCard>

        <DashBoardConnectionCard>
          <SocialConnectModelImage src={sideborder} alt="" />
          <DashBoardConnectionText>
            Connect with Telegram
          </DashBoardConnectionText>
          <DashBoardConnectionButton onClick={handleTelegramConnect}>
            <DashBoardButtonsWrapper>
              <DashBoardConnectionImage src={telegram} />
            </DashBoardButtonsWrapper>
            <DashBoardButtonsWrapper>Contribute</DashBoardButtonsWrapper>
          </DashBoardConnectionButton>
        </DashBoardConnectionCard>

        <DashBoardConnectionCard>
          <SocialConnectModelImage src={sideborder} alt="" />
          <DashBoardConnectionText>Connect with Reddit</DashBoardConnectionText>
          <DashBoardConnectionButton onClick={handleRedditRedirect}>
            <DashBoardButtonsWrapper>
              <DashBoardConnectionImage src={reddit} />
            </DashBoardButtonsWrapper>
            <DashBoardButtonsWrapper>Contribute</DashBoardButtonsWrapper>
          </DashBoardConnectionButton>
        </DashBoardConnectionCard>
      </DashBoardConnectionCards>
    </>
  );
};

export default SocialConnectModel;
