import React from 'react';
import { GlobalButton } from '../../common/Buttons/GlobalButton';
import { Backdrop, Input, ModalContainer, ModalTitle } from '../styles/AddressPopup.style';

interface WalletPopupProps {
  isOpen?: boolean; 
  onClose?: () => void;
};

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
