import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from '../../hooks/useAccount';
import { Container, FlexContainer } from './style';
import { SignUpButtonWallet } from '../SignUp/styles/SignUp.styles';
import walletImg from '../../assets/walletIcon.svg';
import { GlobalButton } from '../common/Buttons/GlobalButton';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

interface ChainProps {
  hasIcon: boolean;
  iconBackground: string;
  iconUrl?: string;
  name?: string;
  unsupported: boolean;
}

interface ConnectWalletProps {
  text?: string
  width?:string | number
  height?: string | number
  walletImg?:string
}

export const ConnectWallet:React.FC<ConnectWalletProps> = ({text , width , height , walletImg }) => {
  
  const { address } = useAccount();
  const navigate = useNavigate();

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
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          address &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated');

        
        

        
        useEffect(() => {
          if (connected) {
            navigate('/dashboard');
          }
        }, [connected, navigate]);


        return (
          <Container ready={ready.toString()}>
            {(() => {
              if (!connected) {
                return (
                  <SignUpButtonWallet onClick={openConnectModal} style={{ height: height, width: width }}>
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
                  <SignUpButtonWallet onClick={openAccountModal} style={{ height: height, width: width }}>
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
