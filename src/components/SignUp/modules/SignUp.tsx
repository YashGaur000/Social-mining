import token from "../../../assets/TenexToken.svg";
import twitter from "../../../assets/twitter.svg";
import image from "../../../assets/banner.svg";
import tokenTitle from "../../../assets/logo.svg";

import { useNavigate } from "react-router-dom";
import {
  ImageContainer,
  Banner,
  SignUpDetails,
  SignUpTitle,
  SignUpText,
  SignUpButton,
  SignUpToken,
  SignUpTokens,
  LogoToken,
  SignUpWrapper,
  SignUpDetailsWrapper,
} from "../styles/SignUp.styles";

const SignUp = () => {
  const navigate = useNavigate();
  const handleTwitterSignIn = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <LogoToken src={tokenTitle}></LogoToken>

      <SignUpWrapper>
        <SignUpDetails>
          <SignUpDetailsWrapper>
            <SignUpTitle>Become a TENEX</SignUpTitle>

            <SignUpText>Join our mission to spread TenEx Message</SignUpText>

            <SignUpButton onClick={handleTwitterSignIn}>
              <img src={twitter} />
              Sign In Twitter
            </SignUpButton>
          </SignUpDetailsWrapper>
        </SignUpDetails>

        <ImageContainer>
          <Banner src={image} alt="" />
        </ImageContainer>
        <SignUpToken>
        <SignUpTokens src={token} alt="" />
      </SignUpToken>
      </SignUpWrapper>
      
    </>
  );
};

export default SignUp;
