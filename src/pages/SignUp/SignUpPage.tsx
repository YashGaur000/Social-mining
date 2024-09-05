import React from 'react';
import { DefaultTheme } from '../../styles/Theme';
import styled from 'styled-components';



const SignUpPageContainer = styled.div<{ theme: DefaultTheme}>`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  
    color: ${({ theme }) => theme.colors.text};
  
    @media (max-width: 1024px) {
        display: inline;
        text-align: -webkit-center;
    }
`;

const SignUpPage: React.FC = () => {
    return(
      <SignUpPageContainer>
        <SignUpPage/>
      </SignUpPageContainer>
        
    );
};

export default SignUpPage;