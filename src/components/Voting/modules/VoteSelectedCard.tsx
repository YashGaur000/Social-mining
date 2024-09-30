import { GlobalButton } from '../../common';
import {
  TokenItemData,
  TokenItemImage,
  TokenItemWithAdressWrapper,
  TokenNameWrapper,
} from '../../modal/styles/TokenSelectModal.style';

import {
  SelectCardContainer,
  SelectedDataWrapper,
} from '../styles/VoteSelectedCard.style';
import { Title } from '../styles/VotingPoolBar.style';
import TenexLogo from '../../../assets/Tenex.png';
import { LockDescriptonTitle } from '../../ManageVeTenex/Styles/ManageVetenex.style';
import React, { useState } from 'react';
import { DashboardNavigation } from '../../Dashboard/Index/styles/DashBoard.styled';
import PopupScreen from '../../common/PopupScreen';
import VoteSelectModel from './VoteSelectModel';
import { PopupWrapper } from '../../Liquidity/LiquidityHomePage/styles/LiquidityHeroSection.style';
import VottingPowerModel from './VottingPowerModel';
import { LiquidityPoolNewType } from '../../../graphql/types/LiquidityPoolNew';
import { Nft } from '../../../types/VotingEscrow';

interface VoteSelectedCardProps {
  countSelectedItem: number;
  VoteSelectPoolData: LiquidityPoolNewType[];
  nftData: Nft[];
}
const VoteSelectedCard: React.FC<VoteSelectedCardProps> = ({
  countSelectedItem,
  VoteSelectPoolData,
  nftData,
}) => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isModelOpen, setModelOpen] = useState(false);
  const [selectedNftData, setSelectedNftData] = useState<Nft>(nftData[0]);
  function handleModel(option: string) {
    setModelOpen(option === 'ChangeLock');
    setPopupVisible(true);
  }

  function handleModelHide() {
    setPopupVisible(false);
  }
  const handleSelectedNft = (selectedNft: Nft) => {
    console.log(selectedNft);

    setSelectedNftData(selectedNft);
    setPopupVisible(false);
  };

  return (
    <>
      <SelectCardContainer>
        <TokenItemWithAdressWrapper>
          <TokenItemImage
            src={TenexLogo}
            width={36}
            height={36}
            alt={'wrong'}
          />
          <TokenNameWrapper>
            <SelectedDataWrapper gap={8}>
              <TokenItemData>
                Lock #{selectedNftData?.tokenId.toString()}
              </TokenItemData>
              <DashboardNavigation
                fontSize={14}
                onClick={() => handleModel('ChangeLock')}
              >
                Change lock
              </DashboardNavigation>
            </SelectedDataWrapper>
            <LockDescriptonTitle fontSize={12}>
              {selectedNftData?.metadata.attributes[2].value} VELO locked until{' '}
              {selectedNftData?.metadata.attributes[0].value}
            </LockDescriptonTitle>
          </TokenNameWrapper>
        </TokenItemWithAdressWrapper>
        <SelectedDataWrapper>
          <Title fontSize="16px">{countSelectedItem} pools selected</Title>
          <GlobalButton
            margin="0px"
            height="40px"
            width="82px"
            onClick={() => handleModel('Vote')}
          >
            Vote
          </GlobalButton>
        </SelectedDataWrapper>
      </SelectCardContainer>

      <PopupScreen
        isvisible={isPopupVisible}
        onClose={() => {
          setPopupVisible(false);
        }}
        height="540px"
        width="80%"
        padding="0px"
        scroll="none"
      >
        <PopupWrapper onClick={handleModelHide}></PopupWrapper>
        {isModelOpen ? (
          <VoteSelectModel
            handleSelectedNft={handleSelectedNft}
            nftData={nftData}
          />
        ) : (
          <VottingPowerModel
            VoteSelectPoolData={VoteSelectPoolData}
            selectedNftData={selectedNftData}
          />
        )}
      </PopupScreen>
    </>
  );
};

export default VoteSelectedCard;
