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
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { setAuthState } from '../../../store/slices/AuthSlice';
import { DecodedToken } from '../../SignUp/modules/SignUp';
import * as JWT from 'jwt-decode';
interface SocialConnectModelProps {
  display?: string;
}
const SocialConnectModel: React.FC<SocialConnectModelProps> = ({ display }) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isConnect, setConnect] = useState<boolean>(false);
  const [flag, setflag] = useState<boolean>(false);
  const { loginType, isAuthenticated, walletAddress, userName, userId } =
    useSelector((state: RootState) => state.auth);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const status = params.get('status');
    const token = params.get('token');

    if (status === 'success') {
      if (token) {
        try {
          const decoded = JWT.jwtDecode<DecodedToken>(token);
          console.log(decoded);

          const userId: string = decoded.userId;
          const userName: string = decoded.userName;

          dispatch(setAuthState({ userId: userId, userName: userName }));
        } catch (error) {
          console.error('Invalid token', error);
          toast.error('Invalid token');
        }
      }

      setLoading(false);
    } else if (status === 'failure') {
      setLoading(false);
      toast.error('Authentication Failed');
    }
  }, [flag]);

  useEffect(() => {
    if (userName && userId) {
      const abc = userName.includes(userId);
      setConnect(!abc);
    }
  }, []);
  const handleTwitterLogin = async () => {
    if (isAuthenticated && loginType !== 'twitter' && !isConnect) {
      try {
        setLoading(true);
        const response = await axios.post(
          'http://localhost:3000/api/users/login',
          { Address: walletAddress },
          { withCredentials: true }
        );
        const data = response.data;
        if (data.authorizationUrl) {
          window.location.href = data.authorizationUrl;
          setflag(true);
        }
      } catch (error) {
        console.error('Failed to initiate Twitter login:', error);
      }
    }
  };

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

  const handleTelegramConnect = async () => {
    setLoading(true);
    const botUsername = 'socialmining13_bot';
    const redirectUrl = 'http://localhost:3000/auth/users/telegram/redirect';

    // Telegram deep link format
    const telegramUrl = `https://t.me/${botUsername}?start=auth_${encodeURIComponent(redirectUrl)}`;

    // Redirect the user to Telegram to authenticate
    window.location.href = telegramUrl;
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
          <DashBoardConnectionButton onClick={handleTwitterLogin}>
            <DashBoardButtonsWrapper>
              <DashBoardConnectionImage src={twitter} />
            </DashBoardButtonsWrapper>
            <DashBoardButtonsWrapper>
              {isLoading
                ? 'Loading...'
                : isConnect || loginType == 'twitter'
                  ? 'Connected'
                  : 'connect'}
            </DashBoardButtonsWrapper>
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
            <DashBoardButtonsWrapper>Connect</DashBoardButtonsWrapper>
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
            <DashBoardButtonsWrapper>Connect</DashBoardButtonsWrapper>
          </DashBoardConnectionButton>
        </DashBoardConnectionCard>

        <DashBoardConnectionCard>
          <SocialConnectModelImage src={sideborder} alt="" />
          <DashBoardConnectionText>Connect with Reddit</DashBoardConnectionText>
          <DashBoardConnectionButton onClick={handleRedditRedirect}>
            <DashBoardButtonsWrapper>
              <DashBoardConnectionImage src={reddit} />
            </DashBoardButtonsWrapper>
            <DashBoardButtonsWrapper>Connect</DashBoardButtonsWrapper>
          </DashBoardConnectionButton>
        </DashBoardConnectionCard>
      </DashBoardConnectionCards>
    </>
  );
};

export default SocialConnectModel;
