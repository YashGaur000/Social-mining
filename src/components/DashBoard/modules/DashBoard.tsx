// DashBoard.tsx
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
} from "../styles/DashBoard.styles";
import { useState } from "react";
import AddressPopup from "../../LinkwithRewards/modules/AddressPopup";
import PopUP from "../../PopUp/modules/PopUp";
import { useNavigate } from "react-router-dom";
import sideborder from "../../../assets/sideborder.svg";
import middleLogo from '../../../assets/middleLogo.svg'
const DashBoard: React.FC = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState<boolean>(false);
  const [isAddressPopupOpen, setAddressPopupOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleConnectClick = () => {
    setIsPopUpVisible(true);
  };

  const handleClosePopUp = () => {
    setIsPopUpVisible(false);
  };

  const handleGetRewardsClick = () => {
    setAddressPopupOpen(true);
  };

  const toggleAddressPopup = () => {
    setAddressPopupOpen(false);
  };

  const handleTasksClick = () => {
    navigate("/dashboard/Tasks");
  };

  const handleLeaderboardClick = () => {
    navigate("/dashboard/Leaderboard");
  };

  return (
    <>
      {isPopUpVisible && <PopUP onClose={handleClosePopUp} />}
      <AddressPopup isOpen={isAddressPopupOpen} onClose={toggleAddressPopup} />
      <DashBoardCards>
        <MiddleLogo Opacity="0.12px" Top="26vh" Width="35vw" Height="30vw" Left="48%"  src={middleLogo} alt="" />
        <DashBoardCard>
          <SideImageWrapper>
            <SideImage src={sideborder} alt="sideImage" />
          </SideImageWrapper>
          <DashBoardWrapper>
            <DashBoardText>
            Link your social Media to start mining
            </DashBoardText>
            <DashBoardButton onClick={handleConnectClick}>
              Connect
            </DashBoardButton>
          </DashBoardWrapper>
        </DashBoardCard>

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
            <DashBoardText>
            Link your wallet to claim $TENEX
            </DashBoardText>
            <DashBoardButton onClick={handleGetRewardsClick}>
              Get Rewards
            </DashBoardButton>
          </DashBoardWrapper>
        </DashBoardCard>

        <DashBoardFooterText>
        Airdrops will be distributed at the end of each month based on each user’s accured points
        </DashBoardFooterText>
      </DashBoardCards>
    </>
  );
};

export default DashBoard;
