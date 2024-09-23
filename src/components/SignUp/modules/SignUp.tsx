import token from "../../../assets/TenexToken.svg";
import twitter from "../../../assets/twitter.svg";
import image from "../../../assets/banner.svg";
import tokenTitle from "../../../assets/logo.svg";
import { ConnectWallet } from "../../ConnectWallet"

import {
  ImageContainer,
  Banner,
  SignUpDetails,
  SignUpTitle,
  SignUpText,
  SignUpToken,
  SignUpTokens,
  LogoToken,
  SignUpWrapper,
  SignUpDetailsWrapper,
  TwitterImage,
  SignUpButtonWrapper,
  SignUpTitleAndTextWrapper,
  SignUpButtonTwitter,
} from "../styles/SignUp.styles";

const SignUp = () => {
  

 

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
                <ConnectWallet text={"Sign Up With Wallet"} />
              <SignUpButtonTwitter>
                <TwitterImage src={twitter} />
                Sign In Twitter
              </SignUpButtonTwitter>
            </SignUpButtonWrapper>
            <SignUpToken>
              <SignUpTokens src={token} alt="" />
            </SignUpToken>
          </SignUpDetailsWrapper>
        </SignUpDetails>

        <ImageContainer>
          <Banner src={image} alt="" />
        </ImageContainer>
      </SignUpWrapper>
    </>
  );
};

export default SignUp;
