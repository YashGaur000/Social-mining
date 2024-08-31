// AddressPopup.tsx
import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { GlobalButton } from '../../common/Buttons/GlobalButton';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: #1a2742;
  border-radius: 20px;
  padding: 30px 40px;
  width: 30%;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const ModalTitle = styled.p<{ theme: DefaultTheme }>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 24px;
  line-height: 35.88px;
  color: #ffffff;
  margin-bottom: 20px;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #8b98b4;
  border-radius: 10px;
  font-size: 1rem;
  color: #ffffff;
  background-color: #2c3e5b;
  margin-bottom: 20px;
  outline: none;
  
  &::placeholder {
    color: #b0bec5;
  }
`;

interface WalletPopupProps {
  isOpen: boolean; 
  onClose: () => void;
}

const AddressPopup: React.FC<WalletPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Backdrop onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalTitle>Link Your Wallet for Rewards</ModalTitle>
        <Input type="text" placeholder="Enter your wallet address to receive your rewards." />
        <GlobalButton>
        Link Address
        </GlobalButton>
      </ModalContainer>
    </Backdrop>
  );
};

export default AddressPopup;
