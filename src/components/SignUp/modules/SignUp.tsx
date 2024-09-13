import token from "../../../assets/TenexToken.svg";
import twitter from "../../../assets/twitter.svg";
import image from "../../../assets/banner.svg";
import tokenTitle from "../../../assets/logo.svg";
import walletIcon from "../../../assets/walletIcon.svg";

import { useNavigate } from "react-router-dom";
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
  WalletImage,
  SignUpButtonWrapper,
  SignUpTitleAndTextWrapper,
  SignUpButtonWallet,
  SignUpButtonTwitter,
} from "../styles/SignUp.styles";

const SignUp = () => {
  const navigate = useNavigate();
  const handleTwitterSignIn = () => {
    navigate("/dashboard");
  };

  const handleWalletSignIn = () => {
    navigate("/dashboard");
  };

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
              <SignUpButtonWallet onClick={handleWalletSignIn}>
                <WalletImage src={walletIcon} />
                Sign up with Wallet
              </SignUpButtonWallet>

              <SignUpButtonTwitter onClick={handleTwitterSignIn}>
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
