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
          <div>
            <SideImage src={sideborder} alt="sideImage" />
          </div>
          <DashBoardWrapper>
            <DashBoardText>
              Link Your Social Media to Start Mining Rewards
            </DashBoardText>
            <DashBoardButton onClick={handleConnectClick}>
              Connect
            </DashBoardButton>
          </DashBoardWrapper>
        </DashBoardCard>

        <DashBoardCard>
          <div>
            <SideImage src={sideborder} alt="sideImage" />
          </div>
          <DashBoardWrapper>
            <DashBoardText>
              Browse the Task List, Complete Challenges, and Earn Rewards!
            </DashBoardText>
            <DashBoardButton onClick={handleTasksClick}>
              View Tasks
            </DashBoardButton>
          </DashBoardWrapper>
        </DashBoardCard>

        <DashBoardCard>
          <div>
            <SideImage src={sideborder} alt="sideImage" />
          </div>
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
          <div>
            <SideImage src={sideborder} alt="sideImage" />
          </div>
          <DashBoardWrapper>
            <DashBoardText>
              Link Your Wallet to Receive Your Social Mining Rewards
            </DashBoardText>
            <DashBoardButton onClick={handleGetRewardsClick}>
              Get Rewards
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
