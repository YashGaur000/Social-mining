import token from "../../../assets/TenexToken.svg";
import twitter from "../../../assets/twitter.svg";
import Image from "../../../assets/image.svg";
import TokenTitle from "../../../assets/logo.svg";

import { useNavigate } from "react-router-dom";
import { ImageContainer, Banner, SignUpDetails, SignUpTitle, SignUpText, SignUpButton, SignUpToken, SignUpTokens, LogoToken, SignUpWrapper } from "../styles/SignUp.styles";


const SignUp = () => {
  const navigate = useNavigate();
  const handleTwitterSignIn = () => {
    navigate("/dashboard");
  };
  return (
    <>
     <LogoToken src={TokenTitle}></LogoToken>
      <SignUpWrapper>
     
      <SignUpDetails>
        <div>
          <SignUpTitle>Become a TENEX</SignUpTitle>
          <SignUpText>Join our mission to spread TenEx Message</SignUpText>
          <SignUpButton onClick={handleTwitterSignIn}>
            <img src={twitter} />
            Sigh In Twitter
          </SignUpButton>
          <SignUpToken>
        <SignUpTokens src={token} alt="" />
      </SignUpToken>
        </div>
      </SignUpDetails>
      <ImageContainer>
        <Banner src={Image} alt="" />
      </ImageContainer>
      </SignUpWrapper>

      
    </>
  );
};

export default SignUp;
