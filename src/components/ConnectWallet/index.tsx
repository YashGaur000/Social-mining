import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from '../../hooks/useAccount';
import { Container, FlexContainer } from './style';
import { SignUpButtonWallet } from '../SignUp/styles/SignUp.styles';
import { GlobalButton } from '../common/Buttons/GlobalButton';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
// import { NAVIGATION_TIME } from '../../constants/Delay';
import { DashBoardButton } from '../DashBoard/styles/DashBoard.styles';

interface ChainProps {
  hasIcon: boolean;
  iconBackground: string;
  iconUrl?: string;
  name?: string;
  unsupported: boolean;
}

interface ConnectWalletProps {
  text?: string;
  walletImg?: string;
  page?: string;
}

export const ConnectWallet: React.FC<ConnectWalletProps> = ({
  text,
  walletImg,
  page,
}) => {
  const { address } = useAccount();
  // const navigate = useNavigate();

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
                  <>
                    {page === 'signup' && (
                      <SignUpButtonWallet onClick={openConnectModal}>
                        <img src={walletImg} alt="" />
                        {text}
                      </SignUpButtonWallet>
                    )}

                    {page === 'dashboard' && (
                      <DashBoardButton onClick={openConnectModal}>
                        {text}
                      </DashBoardButton>
                    )}
                  </>
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
                  <>
                    {page === 'signup' && (
                      <SignUpButtonWallet onClick={openAccountModal}>
                        <img src={walletImg} alt="" />
                        Connected
                      </SignUpButtonWallet>
                    )}

                    {page === 'dashboard' && (
                      <DashBoardButton onClick={openAccountModal}>
                        Connected
                      </DashBoardButton>
                    )}
                  </>
                </FlexContainer>
              );
            })()}
          </Container>
        );
      }}
    </ConnectButton.Custom>
  );
};
