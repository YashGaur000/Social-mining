import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from '../../hooks/useAccount';
import { Container, FlexContainer } from './style';
import { SignUpButtonWallet } from '../SignUp/styles/SignUp.styles';
import { GlobalButton } from '../common/Buttons/GlobalButton';

// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '../../store/store';
// import { connectWallet } from '../../store/slices/ConnectWalletSlice';

interface ChainProps {
  hasIcon: boolean;
  iconBackground: string;
  iconUrl?: string;
  name?: string;
  unsupported: boolean;
}

interface ConnectWalletProps {
  text?: string;
  width?: string | number;
  height?: string | number;
  walletImg?: string;
}

export const ConnectWallet: React.FC<ConnectWalletProps> = ({
  text,
  width,
  height,
  walletImg,
}) => {
  const { address } = useAccount();

  return (
    <ConnectButton.Custom>
      {({
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // const walletAddress = useSelector((state:RootState) => state.wallet.walletAddress);
        // const dispatch:AppDispatch = useDispatch();
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          address &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated');

        return (
          <Container ready={ready.toString()}>
            {(() => {
              if (!connected) {
                return (
                  <SignUpButtonWallet
                    onClick={openConnectModal}
                    style={{ height: height, width: width }}
                  >
                    <img src={walletImg} alt="" />
                    {text}
                  </SignUpButtonWallet>
                );
              }

              if ((chain as ChainProps)?.unsupported) {
                return (
                  <GlobalButton onClick={openChainModal} type="button">
                    Wrong network
                  </GlobalButton>
                );
              }

              return (
                <FlexContainer>
                  <SignUpButtonWallet
                    onClick={openAccountModal}
                    style={{ height: height, width: width }}
                  >
                    <img src={walletImg} alt="" />
                    Connected
                  </SignUpButtonWallet>
                </FlexContainer>
              );
            })()}
          </Container>
        );
      }}
    </ConnectButton.Custom>
  );
};
