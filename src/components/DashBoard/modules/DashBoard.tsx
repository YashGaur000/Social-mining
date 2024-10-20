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
  MobileScreenHeader,
} from '../styles/DashBoard.styles';
import { useEffect, useState } from 'react';
import AddressPopup from '../../LinkwithRewards/modules/AddressPopup';
import { useNavigate } from 'react-router-dom';
import sideborder from '../../../assets/sideborder.svg';
import middleLogo from '../../../assets/middleLogo.svg';
import { ConnectWallet } from '../../ConnectWallet';
import { useAccount } from '../../../hooks/useAccount';
import SocialConnectModel from '../../SocialConnectModel/modules/SocialConnectModel';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';

const DashBoard: React.FC = () => {
  const [isAddressPopupOpen, setAddressPopupOpen] = useState<boolean>(false);

  const { address } = useAccount();
  const navigate = useNavigate();

  const toggleAddressPopup = () => {
    setAddressPopupOpen(false);
  };

  const handleTasksClick = () => {
    navigate('/dashboard/Tasks');
  };

  const handleInviteClick = () => {
    navigate('/dashboard/Invite');
  };

  const handleLeaderboardClick = () => {
    navigate('/dashboard/Leaderboard');
  };

  useEffect(() => {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const authCode = params.get('code');
    console.log(authCode);
    if (authCode) {
      sendCodeToBackend(authCode);
    }
  }, []);

  const sendCodeToBackend = async (code: string) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/users/connect-discord',
        { code }
      );

      console.log('DiscordResponseData****', response.data); // Handle response from the backend
      localStorage.setItem('userId', response.data.data);
    } catch (error) {
      console.error('Error sending code to backend:', error);
    }
  };

  return (
    <>
      <AddressPopup isOpen={isAddressPopupOpen} onClose={toggleAddressPopup} />
      <Toaster position="top-center" reverseOrder={false} />
      <DashBoardCards>
        <SocialConnectModel display="none" />
        <MiddleLogo
          opacity="0.12px"
          Top="26vh"
          width="35vw"
          height="30vw"
          Left="48%"
          src={middleLogo}
          alt=""
        />

        <MobileScreenHeader>DashBoard</MobileScreenHeader>

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
            <DashBoardText>Connect your wallet to claim $TENEX</DashBoardText>
            <ConnectWallet
              text={address ? 'Disconnected' : 'Connect'}
              page={'dashboard'}
            />
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
          user’s accrued points
        </DashBoardFooterText>
      </DashBoardCards>
    </>
  );
};

export default DashBoard;
