import token from "../../../assets/TenexToken.svg";
import twitter from "../../../assets/twitter.svg";
import image from "../../../assets/banner.svg";
import tokenTitle from "../../../assets/logo.svg";
import { ConnectWallet } from "../../ConnectWallet"
import walletimg from '../../../assets/walletIcon.svg';

import {
  ImageContainer,
  Banner,
  SignUpDetails,
  SignUpTitle,
  SignUpText,
  LogoToken,
  SignUpWrapper,
  SignUpDetailsWrapper,
  TwitterImage,
  SignUpButtonWrapper,
  SignUpTitleAndTextWrapper,
  SignUpButtonTwitter,
  SignUpToken,
  SignUpTokens,
} from "../styles/SignUp.styles";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  
  const handleTwitter = () =>{
    navigate('/#/dashboard')
  }
 

  return (
    <>
      <LogoToken src={tokenTitle}></LogoToken>

      <SignUpWrapper>

        <SignUpDetails>
          <SignUpDetailsWrapper>
            <SignUpTitleAndTextWrapper>
              <SignUpTitle>Become a TENEX</SignUpTitle>
              <SignUpText>Join our mission to spread TenEx Message</SignUpText>
            </SignUpTitleAndTextWrapper>
            <SignUpButtonWrapper>
                <ConnectWallet text={"Sign Up With Wallet"} walletImg={walletimg}/>
              <SignUpButtonTwitter>
                <TwitterImage src={twitter} onClick={handleTwitter} />
                Sign In Twitter
              </SignUpButtonTwitter>
            </SignUpButtonWrapper>
          </SignUpDetailsWrapper>
          <SignUpToken>
              <SignUpTokens src={token} alt="" />
            </SignUpToken>
        </SignUpDetails>

        <ImageContainer>
          <Banner src={image} alt="" />
        </ImageContainer>

      </SignUpWrapper>
    </>
  );
};

export default SignUp;