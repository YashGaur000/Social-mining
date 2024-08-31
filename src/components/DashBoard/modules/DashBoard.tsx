// DashBoard.tsx
import {
  DashBoardCard,
  DashBoardButton,
  DashBoardCards,
  DashBoardFooterText,
  DashBoardText,
} from "../styles/DashBoard.styles";
import { useState } from "react";
import AddressPopup from "../../LinkwithRewards/modules/AddressPopup";
import PopUP from "../../PopUp/modules/PopUp";
import { useNavigate } from "react-router-dom";

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
    navigate('/dashboard/Tasks');
  };

  const handleLeaderboardClick = () => {
    navigate('/dashboard/Leaderboard');
  };

  return (
    <>
      {isPopUpVisible && <PopUP onClose={handleClosePopUp} />}
      <AddressPopup isOpen={isAddressPopupOpen} onClose={toggleAddressPopup} />
      <DashBoardCards>
        <DashBoardCard>
          <DashBoardText>
            Link Your Social Media to Start Mining Rewards
          </DashBoardText>
          <DashBoardButton onClick={handleConnectClick}>
            Connect
          </DashBoardButton>
        </DashBoardCard>
        <DashBoardCard>
          <DashBoardText>
            Browse the Task List, Complete Challenges, and Earn Rewards!
          </DashBoardText>
          <DashBoardButton onClick={handleTasksClick}>
            View Tasks
          </DashBoardButton>
        </DashBoardCard>
        <DashBoardCard>
          <DashBoardText>View Top Contributors in the Community</DashBoardText>
          <DashBoardButton onClick={handleLeaderboardClick}>
            View
          </DashBoardButton>
        </DashBoardCard>
        <DashBoardCard>
          <DashBoardText>
            Link Your Wallet to Receive Your Social Mining Rewards
          </DashBoardText>
          <DashBoardButton onClick={handleGetRewardsClick}>
            Get Rewards
          </DashBoardButton>
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
