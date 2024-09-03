import {
  PopUpConnectionButton,
  ConnectionButtonWrapper,
  MainPopUpScreen,
  PopScreenText,
  PopUpScreenCard,
  PopUpScreenContainer,
  PopUpScreenTitle,
  PopUpScreenWrapper,
  SocialMediaIcon,
} from "../styles/PopUp.styles";

import twitter from "../../../assets/twitter.svg"
import reddit from "../../../assets/reddit.svg"
import discord from "../../../assets/discord.svg"
import telegram from "../../../assets/telegram.svg"




interface PopUPProps {
  onClose: () => void;
}

const PopUP: React.FC<PopUPProps> = ({ onClose }) => {

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };



  return (
    <PopUpScreenContainer onClick={handleOverlayClick}>
      <MainPopUpScreen>
        <PopUpScreenTitle>Link you accounts</PopUpScreenTitle>
        <PopUpScreenWrapper>
          <PopUpScreenCard>
            <SocialMediaIcon src={twitter} alt="Image of Twitter" />
            <PopScreenText>Connect with Twitter</PopScreenText>
          </PopUpScreenCard>
          <ConnectionButtonWrapper>
            <PopUpConnectionButton>connect</PopUpConnectionButton>
          </ConnectionButtonWrapper>
        </PopUpScreenWrapper>
        
        <PopUpScreenWrapper>
          <PopUpScreenCard>
            <SocialMediaIcon src={discord} alt="Discord Image" />
            <PopScreenText>Connect with Discord</PopScreenText>
          </PopUpScreenCard>
          <ConnectionButtonWrapper>
            <PopUpConnectionButton>Connect</PopUpConnectionButton>
          </ConnectionButtonWrapper>
        </PopUpScreenWrapper>
        <PopUpScreenWrapper>
          <PopUpScreenCard>
            <SocialMediaIcon src={telegram} alt="Telegram Image" />
            <PopScreenText>Connect with Telegram</PopScreenText>
          </PopUpScreenCard>
          <ConnectionButtonWrapper>
            <PopUpConnectionButton>Connect</PopUpConnectionButton>
          </ConnectionButtonWrapper>
        </PopUpScreenWrapper>
        <PopUpScreenWrapper>
          <PopUpScreenCard>
            <SocialMediaIcon src={reddit} alt="Reddit Image" />
            <PopScreenText>Connect with Reddit</PopScreenText>
          </PopUpScreenCard>
          <ConnectionButtonWrapper>
            <PopUpConnectionButton>Connect</PopUpConnectionButton>
          </ConnectionButtonWrapper>
        </PopUpScreenWrapper>
      </MainPopUpScreen>
    </PopUpScreenContainer>
  );
};

export default PopUP;
