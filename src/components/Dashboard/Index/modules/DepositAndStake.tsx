import {
  DashBoardParagraph,
  DepositeStakedData,
  DepositeStakedHeading,
  DepositMainContainer,
  PoolContainer,
  PoolContainerData,
  Stable,
  StakedContainer,
  TotalPoolData,
  UnstackedContainer,
  UnstackedData,
  UnstackedData1,
  UnstackedHeading,
  USDTData,
  USDTHeading,
  WalletContainer,
} from '../styles/DepositAndStake.styled';
import { DashboardNavigation } from '../styles/DashBoard.styled';
import { ImageContainer } from '../../../ManageVeTenex/Styles/ManageVetenex.style';
import InformationIcon from '../../../../assets/Tips.svg';
import { UnderLineStyle } from '../../../ManageVeTenex/Styles/Relay.style';
import {
  GroupImgContains,
  IMG1Contains,
  IMG2Contains,
  Imgstyle,
} from '../../../Liquidity/LiquidityHomePage/styles/LiquidityTable.style';
import { useAccount } from '../../../../hooks/useAccount';
import { useUserPosition } from '../../../../hooks/useUserPosition';
import { LoadingSpinner } from '../../../common/Loader';
import React from 'react';
import { useTokenBalances } from '../../../../hooks/useTokenBalance';
import { ERC20_TEST_TOKEN_LIST } from '../../../../constants/tokens/testnetTokens';
import { Address } from 'viem';
import { getTokenLogo } from '../../../../utils/getTokenLogo';
import { useNavigate } from 'react-router-dom';

const DepositAndStake: React.FC = () => {
  const { address } = useAccount();
  const { data: userPools, isError } = useUserPosition(address!);
  const { balances } = useTokenBalances(ERC20_TEST_TOKEN_LIST, address!);
  const navigate = useNavigate();

  const handleDepositeButton = (
    token0: string,
    token1: string,
    isStable: boolean,
    lp: string
  ) => {
    const queryParams = new URLSearchParams(location.search);

    const typeValue = isStable ? '0' : '1';

    queryParams.set('token1', token0);
    queryParams.set('token2', token1);
    queryParams.set('type', typeValue);
    queryParams.set('exists', true.toString()); //@Todo need to handle properly and check routes of both manage and create new pool

    queryParams.set('id', lp);

    navigate({
      pathname: '/liquidity/manage',
      search: `?${queryParams.toString()}`,
    });
  };

  const handleStake = (lp: string) => {
    const queryParams = new URLSearchParams(location.search);

    queryParams.set('pool', lp);

    navigate({
      pathname: '/stake',
      search: `?${queryParams.toString()}`,
    });
  };

  return (
    <>
      {isError && <p>Error in Fetching....</p>}
      {userPools && userPools.length == 0 && <LoadingSpinner />}
      {userPools && userPools.length > 0 && !isError ? (
        userPools.map((userPool, index) => (
          <React.Fragment key={index}>
            <DepositMainContainer>
              <PoolContainer>
                <PoolContainerData>
                  <GroupImgContains>
                    <IMG1Contains top={5} left={0}>
                      <Imgstyle src={getTokenLogo(userPool.token0.symbol)} />
                    </IMG1Contains>
                    <IMG2Contains top={5} left={26}>
                      <Imgstyle src={getTokenLogo(userPool.token1.symbol)} />
                    </IMG2Contains>
                  </GroupImgContains>
                  <TotalPoolData>
                    <DashBoardParagraph>Pool Total</DashBoardParagraph>
                    <DashBoardParagraph>
                      {userPool.reserve0} {userPool.token0.symbol}
                    </DashBoardParagraph>
                    <DashBoardParagraph>
                      {userPool.reserve1} {userPool.token1.symbol}
                    </DashBoardParagraph>
                  </TotalPoolData>
                </PoolContainerData>
                <PoolContainerData>
                  <USDTHeading>
                    {userPool.token0.symbol}-{userPool.token1.symbol}
                  </USDTHeading>
                  <USDTData>
                    <Stable>{userPool.isStable ? 'Stable' : 'Volatile'}</Stable>
                    <DashBoardParagraph>
                      {userPool.isStable ? '0.05' : '0.3'} %
                    </DashBoardParagraph>
                    <DashBoardParagraph>
                      <ImageContainer
                        width="16px"
                        height="18px"
                        src={InformationIcon}
                      />
                    </DashBoardParagraph>
                  </USDTData>
                </PoolContainerData>
              </PoolContainer>
              <UnstackedContainer>
                <UnstackedHeading>Unstaked</UnstackedHeading>
                <UnstackedData>
                  <DashBoardParagraph>
                    4.999 {userPool.token0.symbol}
                  </DashBoardParagraph>
                  <DashBoardParagraph>
                    0.003 {userPool.token1.symbol}
                  </DashBoardParagraph>
                </UnstackedData>
                <UnstackedData1>
                  <UnderLineStyle>Withdraw</UnderLineStyle>
                  <DashboardNavigation onClick={() => handleStake(userPool.lp)}>
                    Stake
                  </DashboardNavigation>
                </UnstackedData1>
              </UnstackedContainer>
              <StakedContainer>
                <DepositeStakedHeading>
                  <DashBoardParagraph>Staked</DashBoardParagraph>
                </DepositeStakedHeading>
                <DepositeStakedData>
                  <DashBoardParagraph>
                    0.00 {userPool.token0.symbol}
                  </DashBoardParagraph>
                  <DashBoardParagraph>
                    0.00 {userPool.token1.symbol}
                  </DashBoardParagraph>
                </DepositeStakedData>
              </StakedContainer>
              <WalletContainer>
                <DepositeStakedHeading>In Wallet</DepositeStakedHeading>
                <DepositeStakedData>
                  <DashBoardParagraph>
                    {balances[userPool.token0.id as Address]?.toString()}{' '}
                    {userPool.token0.symbol}
                  </DashBoardParagraph>
                  <DashBoardParagraph>
                    {balances[userPool.token1.id as Address]?.toString()}{' '}
                    {userPool.token1.symbol}
                  </DashBoardParagraph>
                </DepositeStakedData>
                <DashboardNavigation
                  onClick={() =>
                    handleDepositeButton(
                      userPool.token0.id,
                      userPool.token1.id,
                      userPool.isStable,
                      userPool.lp
                    )
                  }
                >
                  Deposit
                </DashboardNavigation>
              </WalletContainer>
            </DepositMainContainer>
          </React.Fragment>
        ))
      ) : (
        <p>No data available.</p>
      )}
    </>
  );
};

export default DepositAndStake;
