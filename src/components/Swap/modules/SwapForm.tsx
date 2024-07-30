import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faWallet } from '@fortawesome/free-solid-svg-icons';
import { useAccount } from '../../../hooks/useAccount';
import SwitchComponent from './SwitchComponent';
import { TOKEN_LIST, TokenInfo } from './../../../constants/tokens';
import BalanceDisplay from './BalanceDisplay';
import TokenSelectModal from '../../modal/TokenSelectModal';
import { GlobalButton } from '../../common';
import {
  Description,
  Input,
  InputWrapper,
  SwapBox,
  SwapBoxWrapper,
  SwitchButton,
  Title,
  TokenSelect,
  TokenSelectAlign,
  TokenSelectAlignSelect,
  WalletButton,
  WalletIcon,
  WalletText,
  WalletWrapper,
} from '../styles/SwapForm.style.';

const SwapForm: React.FC = () => {
  const { address } = useAccount();
  const [isConnected, setIsConnected] = useState(false);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [selectedToken1, setSelectedToken1] = useState<TokenInfo>(
    TOKEN_LIST[0]
  );
  const [selectedToken2, setSelectedToken2] = useState<TokenInfo>(
    TOKEN_LIST[1]
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tokenSelectTarget, setTokenSelectTarget] = useState<
    'token1' | 'token2'
  >('token1');

  useEffect(() => {
    setIsConnected(!!address);
  }, [address]);

  const handleToggleChange = () => {
    if (isConnected) {
      //disconnect();
    } else {
      // logic to open wallet connect modal
    }
    setIsConnected(!isConnected);
  };

  const handleSwap = () => {
    setSelectedToken1(selectedToken2);
    setSelectedToken2(selectedToken1);
    // setInputValue1(''); //to clear the input fields when we click on swap
    // setInputValue2('');
  };

  const handleTokenSelectOpen = (target: 'token1' | 'token2') => {
    setTokenSelectTarget(target);
    setIsModalOpen(true);
  };

  const handleTokenSelect = (token: TokenInfo) => {
    if (tokenSelectTarget === 'token1') {
      setSelectedToken1(token);
    } else {
      setSelectedToken2(token);
    }
  };

  return (
    <SwapBoxWrapper>
      <SwapBox>
        <Title>Swap</Title>
        <Description>
          Our unique engine automatically chooses the best route for your trade
        </Description>
        <WalletWrapper>
          <WalletButton>
            <WalletIcon icon={faWallet} />
            {address && <BalanceDisplay address={address} />}
          </WalletButton>
          <SwitchComponent
            isChecked={isConnected}
            handleToggle={handleToggleChange}
            onText=""
            offText=""
            isDisabled={true}
          />
        </WalletWrapper>
        <InputWrapper>
          <Input
            type="number"
            placeholder="0"
            value={inputValue1}
            onChange={(e) => setInputValue1(e.target.value)}
          />
          <TokenSelect onClick={() => handleTokenSelectOpen('token1')}>
            <TokenSelectAlign>
              <img
                src={selectedToken1.logoURI}
                width={21}
                height={22}
                alt={selectedToken1.logoURI}
              />
            </TokenSelectAlign>
            <TokenSelectAlign>{selectedToken1.symbol}</TokenSelectAlign>
            <TokenSelectAlignSelect>
              <img
                src="src/assets/select.png"
                width={8}
                height={4}
                alt="src/assets/select.png"
              />
            </TokenSelectAlignSelect>
          </TokenSelect>
          <WalletText>Wallet: 0.000 &nbsp;&nbsp; ~$0.00</WalletText>
        </InputWrapper>
        <SwitchButton onClick={handleSwap}>
          <FontAwesomeIcon icon={faExchangeAlt} color="white" />
        </SwitchButton>
        <InputWrapper>
          <Input
            type="number"
            inputMode="numeric"
            placeholder="0"
            value={inputValue2}
            onChange={(e) => setInputValue2(e.target.value)}
          />
          <TokenSelect onClick={() => handleTokenSelectOpen('token2')}>
            <TokenSelectAlign>
              <img
                src={selectedToken2.logoURI}
                width={20}
                height={20}
                alt={selectedToken2.logoURI}
              />
            </TokenSelectAlign>
            <TokenSelectAlign>{selectedToken2.symbol}</TokenSelectAlign>
            <TokenSelectAlign>
              <img
                src="src/assets/select.png"
                width={8}
                height={4}
                alt="src/assets/select.png"
              />
            </TokenSelectAlign>
          </TokenSelect>
          <WalletText>Wallet: 0.000 &nbsp;&nbsp; ~$0.00</WalletText>
        </InputWrapper>
        <TokenSelectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSelect={handleTokenSelect}
        />
        <GlobalButton padding="15px">Swap</GlobalButton>
        <Description>
          TenEx&#39;s Meta Aggregator sources quotes from TenEx pools and Odos
        </Description>
      </SwapBox>
    </SwapBoxWrapper>
  );
};

export default SwapForm;
