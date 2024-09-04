import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from '../../hooks/useAccount';
import { ChainButton, GlobalButton } from '../common';
import { Container, FlexContainer, IconContainer } from './style';

//import { getPoolInfo } from '../../graphql';

interface ChainProps {
  hasIcon: boolean;
  iconBackground: string;
  iconUrl?: string;
  name?: string;
  unsupported: boolean;
}

export const ConnectWallet = () => {
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
                  <GlobalButton padding="10px 20px" onClick={openConnectModal}>
                    Connect Wallet
                  </GlobalButton>
                );
              }

              if ((chain as ChainProps)?.unsupported) {
                return (
                  <GlobalButton
                    padding="10px 20px"
                    onClick={openChainModal}
                    type="button"
                  >
                    Wrong network
                  </GlobalButton>
                );
              }

              return (
                <FlexContainer>
                  <ChainButton
                    onClick={openChainModal}
                    width="74"
                    height="40"
                    padding="11px 20px"
                  >
                    {(chain as ChainProps).hasIcon && (
                      <IconContainer
                        background={(chain as ChainProps).iconBackground}
                      >
                        {(chain as ChainProps).iconUrl && (
                          <img
                            alt={(chain as ChainProps).name ?? ''}
                            src={(chain as ChainProps).iconUrl}
                            style={{ width: 30, height: 30 }}
                          />
                        )}
                      </IconContainer>
                    )}
                  </ChainButton>

                  <ChainButton
                    onClick={openAccountModal}
                    width="fit-content"
                    height="40"
                    padding="12px 20px"
                  >
                    {address.substring(0, 6)}...
                  </ChainButton>
                </FlexContainer>
              );
            })()}
          </Container>
        );
      }}
    </ConnectButton.Custom>
  );
};
