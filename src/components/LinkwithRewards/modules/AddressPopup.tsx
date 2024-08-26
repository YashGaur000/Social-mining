import React from 'react';
import { InputField, InputFieldBox, LinkAddressBox, PopupHeader } from '../styles/AddressPopup.style';
import { Card } from '../../common/Card';
import { GlobalButton } from '../../common/Buttons/GlobalButton';

const AddressPopup: React.FC = () => {
    return(

        <Card margin='350px'>
            <PopupHeader>
                Link Your Wallet for Rewards
            </PopupHeader>
            <InputFieldBox>
                <InputField
                    type='text'
                    placeholder='Enter your wallet address to receive your rewards'
                />
            </InputFieldBox>
            <LinkAddressBox>
                <GlobalButton><strong> Link Address</strong>
                   
                </GlobalButton>
            </LinkAddressBox>
        </Card>
    );
};

export default AddressPopup;