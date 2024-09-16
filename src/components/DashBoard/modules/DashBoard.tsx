import {
  DashBoardCard,
  DashBoardButton,
  DashBoardCards,
  DashBoardFooterText,
  DashBoardText,
  SideImage,
  DashBoardWrapper,
  MiddleLogo,
  SideImageWrapper,
  DashBoardConnectionCards,
  DashBoardConnectionCard,
  DashBoardConnectionText,
  DashBoardConnectionButton,
  DashBoardConnectionImage,
  DashBoardButtonsWrapper,
  LoginTickImage,
} from "../styles/DashBoard.styles";
import { useState } from "react";
import AddressPopup from "../../LinkwithRewards/modules/AddressPopup";
import { useNavigate } from "react-router-dom";
import sideborder from "../../../assets/sideborder.svg";
import middleLogo from "../../../assets/middleLogo.svg";

import twitter from "../../../assets/twitter.svg";
import discord from "../../../assets/discord.svg";
import telegram from "../../../assets/telegram.svg";
import reddit from "../../../assets/reddit.svg";
import logintick from "../../../assets/logintick.svg";

const DashBoard: React.FC = () => {
  const [isAddressPopupOpen, setAddressPopupOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleGetRewardsClick = () => {
    setAddressPopupOpen(true);
  };

  const toggleAddressPopup = () => {
    setAddressPopupOpen(false);
  };

  const handleTasksClick = () => {
    navigate("/dashboard/Tasks");
  };

  const handleInviteClick = () => {
    navigate("/dashboard/Invite");
  };

  const handleLeaderboardClick = () => {
    navigate("/dashboard/Leaderboard");
  };

  const handleDiscordRedirect = () => {
    const discordOAuthUrl = import.meta.env.VITE_DISCORD_OAUTH;
    if (discordOAuthUrl) {
      window.location.href = discordOAuthUrl;
    } else {
      console.error("Discord OAuth URL not found in environment variables.");
    }
  };

  const handleRedditRedirect = () => {
    const redditOAuthUrl = import.meta.env.VITE_REDDIT_OAUTH;
    {
      /* <SocialLogo src={Bigtenex} Position='fixed' margin='70px 0px 0px 560px'/> */
    }
    if (redditOAuthUrl) {
      window.location.href = redditOAuthUrl;
    } else {
      console.error("Reddit OAuth URL not found in environment variables.");
    }
  };

  return (
    <>
      <AddressPopup isOpen={isAddressPopupOpen} onClose={toggleAddressPopup} />
      <DashBoardCards>

        <DashBoardConnectionCards>

          <DashBoardConnectionCard>
            <DashBoardConnectionText>
              Connect with Twitter
            </DashBoardConnectionText>
            <DashBoardConnectionButton>
              <DashBoardButtonsWrapper>
                <DashBoardConnectionImage src={twitter} />
              </DashBoardButtonsWrapper>
              <DashBoardButtonsWrapper>
                 connect
               </DashBoardButtonsWrapper>
              <DashBoardButtonsWrapper>
                <LoginTickImage src={logintick} />
              </DashBoardButtonsWrapper>
            </DashBoardConnectionButton>
          </DashBoardConnectionCard>

          <DashBoardConnectionCard>
            <DashBoardConnectionText>
              Connect with Discord
            </DashBoardConnectionText>
            <DashBoardConnectionButton onClick={handleDiscordRedirect}>
              <DashBoardButtonsWrapper>
                <DashBoardConnectionImage src={discord} />
              </DashBoardButtonsWrapper>
              <DashBoardButtonsWrapper>
                 connect
               </DashBoardButtonsWrapper>
            </DashBoardConnectionButton>
          </DashBoardConnectionCard>


          <DashBoardConnectionCard>
            <DashBoardConnectionText>
              Connect with Telegram
            </DashBoardConnectionText>
            <DashBoardConnectionButton>
              <DashBoardButtonsWrapper>
                <DashBoardConnectionImage src={telegram} />
              </DashBoardButtonsWrapper>
              <DashBoardButtonsWrapper>
                 connect
               </DashBoardButtonsWrapper>
            </DashBoardConnectionButton>
          </DashBoardConnectionCard>

          <DashBoardConnectionCard>
            <DashBoardConnectionText>
              Connect with Reddit
            </DashBoardConnectionText>
            <DashBoardConnectionButton onClick={handleRedditRedirect}>
              <DashBoardButtonsWrapper>
                <DashBoardConnectionImage src={reddit} />
              </DashBoardButtonsWrapper>
              <DashBoardButtonsWrapper>
                 connect
               </DashBoardButtonsWrapper>
            </DashBoardConnectionButton>
          </DashBoardConnectionCard>
          
          
        </DashBoardConnectionCards>
        <MiddleLogo
          Opacity="0.12px"
          Top="26vh"
          Width="35vw"
          Height="30vw"
          Left="48%"
          src={middleLogo}
          alt=""
        />

        <DashBoardCard>
          <SideImageWrapper>
            <SideImage src={sideborder} alt="sideImage" />
          </SideImageWrapper>
          <DashBoardWrapper>
            <DashBoardText>
              Browse the task list, complete challenges, and earn points!
            </DashBoardText>
            <DashBoardButton onClick={handleTasksClick}>
              View Tasks
            </DashBoardButton>
          </DashBoardWrapper>
        </DashBoardCard>

        <DashBoardCard>
          <SideImageWrapper>
            <SideImage src={sideborder} alt="sideImage" />
          </SideImageWrapper>
          <DashBoardWrapper>
            <DashBoardText>
              View Top Contributors in the Community
            </DashBoardText>
            <DashBoardButton onClick={handleLeaderboardClick}>
              View
            </DashBoardButton>
          </DashBoardWrapper>
        </DashBoardCard>

        <DashBoardCard>
          <SideImageWrapper>
            <SideImage src={sideborder} alt="sideImage" />
          </SideImageWrapper>
          <DashBoardWrapper>
            <DashBoardText>Link your wallet to claim $TENEX</DashBoardText>
            <DashBoardButton onClick={handleGetRewardsClick}>
              Get Rewards
            </DashBoardButton>
          </DashBoardWrapper>
        </DashBoardCard>
        <DashBoardCard>
          <SideImageWrapper>
            <SideImage src={sideborder} alt="sideImage" />
          </SideImageWrapper>
          <DashBoardWrapper>
            <DashBoardText>Invite friends and earn points!</DashBoardText>
            <DashBoardButton onClick={handleInviteClick}>
              Invite
            </DashBoardButton>
          </DashBoardWrapper>
        </DashBoardCard>

        <DashBoardFooterText>
          Airdrops will be distributed at the end of each month based on each
          user’s accured points
        </DashBoardFooterText>
      </DashBoardCards>
    </>
  );
};

export default DashBoard;
