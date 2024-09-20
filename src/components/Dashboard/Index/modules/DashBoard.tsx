import { useNavigate } from 'react-router-dom';
import QuestionIcon from '../../../../assets/questionmark.svg';

import {
  DashBoardCard,
  DashBoardCardData,
  DashBoardCardData1,
  DashBoardCardWrapper,
  DashboardHeading,
  DashBoardLock,
  DashBoardMainContainer,
  DashboardNavigation,
  DashBoardTitle,
  DashBoardWrapper,
  DashBoardWrapperHeading,
  TipsIcon,
} from '../styles/DashBoard.styled';
import { useState } from 'react';

// import DepositAndStake from "./DepositAndStake";
// import LiquidityRewards from "./LiquidityRewards";
import DashBoardLocks from './DashBoardLocks';
import { GlobalButton } from '../../../common';
import LiquidityToolTips from '../../../Liquidity/LiquidityHomePage/Modules/LiquidityToolTips';
import LockToolTips from '../../../ManageVeTenex/Modules/LockToolTips';
import VotingToolTips from '../../../Voting/modules/VotingToolTips';
import PopupScreen from '../../../common/PopupScreen';
import { PopupWrapper } from '../../../Liquidity/LiquidityHomePage/styles/LiquidityHeroSection.style';
// import LiquidityRewards from './LiquidityRewards';
// import DepositAndStake from './DepositAndStake';

const DashBoard: React.FC = () => {
  const [isLockVisible, setIsLockVisible] = useState(true);

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string>('');
  const Navigate = useNavigate();

  function handleTooltipShow(option: string) {
    setActiveTooltip(option);
    setPopupVisible(true);
  }

  function handleTooltipHide() {
    setPopupVisible(false);
    setActiveTooltip('');
  }

  const closeModal = () => {
    setPopupVisible(false);
    setActiveTooltip('');
  };

  const handleCreatePool = () => {
    Navigate('/liquidity/create');
  };

  const renderTooltipContent = () => {
    switch (activeTooltip) {
      case 'liquidity':
        return <LiquidityToolTips />;
      case 'lock':
        return <LockToolTips />;
      case 'voting':
        return <VotingToolTips />;
      default:
        return null;
    }
    setIsLockVisible(false); //Todo: please remove This line when add Lock functionality
  };
  return (
    <>
      <DashBoardMainContainer>
        <DashBoardWrapper>
          <DashBoardWrapperHeading>
            <DashboardHeading>
              Deposited & Staked Liquidity{' '}
              <TipsIcon
                src={QuestionIcon}
                alt="wrong"
                onMouseEnter={() => handleTooltipShow('liquidity')}
              />
            </DashboardHeading>
            <GlobalButton
              width="165px"
              height="40px"
              margin="0px"
              onClick={handleCreatePool}
            >
              Create Pool
            </GlobalButton>
          </DashBoardWrapperHeading>

          <DashBoardCard>
            <DashBoardCardData>
              To receive emissions{' '}
              <DashboardNavigation onClick={handleCreatePool}>
                {' '}
                deposit and stake{' '}
              </DashboardNavigation>{' '}
              your liquidity first.
            </DashBoardCardData>
          </DashBoardCard>
          {/*Todo: make Dynamic  */}
          {/* <DepositAndStake/>  */}
        </DashBoardWrapper>
        <DashBoardWrapper>
          <DashboardHeading>
            Liquidity Rewards{' '}
            <TipsIcon
              src={QuestionIcon}
              alt="wrong"
              onMouseEnter={() => handleTooltipShow('liquidity')}
            />
          </DashboardHeading>

          <DashBoardCard>
            <DashBoardCardData>
              Start by{' '}
              <DashboardNavigation onClick={handleCreatePool}>
                {' '}
                depositing and staking
              </DashboardNavigation>{' '}
              liquidity.
            </DashBoardCardData>
          </DashBoardCard>
          {/* todo: Make Dynamic */}
          {/* <LiquidityRewards/> */}
        </DashBoardWrapper>

        <DashBoardWrapper>
          <DashboardHeading fontSize="24px">
            Locks{' '}
            <TipsIcon
              src={QuestionIcon}
              alt="wrong"
              onMouseEnter={() => handleTooltipShow('lock')}
            />
          </DashboardHeading>

          <DashBoardLock>
            {isLockVisible ? (
              <DashBoardLocks />
            ) : (
              <DashBoardCard>
                <DashBoardCardData>
                  To receive incentives and fees create a lock and vote with it.
                </DashBoardCardData>
              </DashBoardCard>
            )}

            <DashBoardCard height={88}>
              <DashBoardCardWrapper>
                <DashBoardTitle>Relay Strategies</DashBoardTitle>
                <DashBoardCardData1>
                  Relay automates the process of managing a lock. See available
                  strategies for maximizing your voting power.
                </DashBoardCardData1>
              </DashBoardCardWrapper>
              <GlobalButton width="165px" height="40px" margin="0px">
                Explore Relays
              </GlobalButton>
            </DashBoardCard>
          </DashBoardLock>
        </DashBoardWrapper>

        <DashBoardWrapper>
          <DashboardHeading>
            Voting Rewards{' '}
            <TipsIcon
              src={QuestionIcon}
              alt="wrong"
              onMouseEnter={() => handleTooltipShow('voting')}
            />
          </DashboardHeading>
          <DashBoardCard>
            <DashBoardCardData>No rewards found.</DashBoardCardData>
          </DashBoardCard>
        </DashBoardWrapper>
      </DashBoardMainContainer>

      <PopupScreen
        isvisible={isPopupVisible}
        onClose={closeModal}
        width="500px"
        height="518px"
      >
        <PopupWrapper onMouseLeave={handleTooltipHide}>
          {renderTooltipContent()}
        </PopupWrapper>
      </PopupScreen>
    </>
  );
};

export default DashBoard;
