import React from 'react';
import { DefaultTheme } from '../../styles/Theme';
import styled from 'styled-components';
import AddressPopup from '../../components/LinkwithRewards/modules/AddressPopup';


const LinkWalletContainer = styled.div<{ theme: DefaultTheme}>`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    // gap: 20px;
    // padding: 40px;
    color: ${({ theme }) => theme.colors.text};
    height: 150vh;
    @media (max-width: 1024px) {
        display: inline;
        text-align: -webkit-center;
    }
`;

const LinkWalletPage: React.FC = () => {
    return(
        <LinkWalletContainer>
            <AddressPopup/>
        </LinkWalletContainer>
    );
};

export default LinkWalletPage;