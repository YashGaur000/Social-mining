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
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

// interface SignUpprops{
//   code: string;
// }

const SignUp: React.FC = () => {


  useEffect(() => {

    const params = new URLSearchParams(location.search);
    const authCode = params.get('code');
    console.log(location.search,authCode); 
    if (authCode) {
      sendCodeToBackend(authCode);
    }

  },[])

  const sendCodeToBackend = async (code: string) => {
    try {
      const response = await axios.post('http://localhost:3000/api/users/register', { code });
      
      console.log("DiscordResponseData****",response.data); // Handle response from the backend
      localStorage.setItem("userId",response.data.data);
    } catch (error) {
      console.error('Error sending code to backend:', error);
    }
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
