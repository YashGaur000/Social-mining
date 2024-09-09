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
  TwitterImage,
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
              <TwitterImage src={twitter} />
              Sign In Twitter
            </SignUpButton>
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
