import token from '../../../assets/TenexToken.svg';
import twitter from '../../../assets/twitter.svg';
import image from '../../../assets/banner.svg';
import tokenTitle from '../../../assets/logo.svg';
import { ConnectWallet } from '../../ConnectWallet';
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
} from '../styles/SignUp.styles';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { useEffect } from 'react';
// import { connectWallet } from '../../../store/slices/ConnectWalletSlice';
import { Toaster } from 'react-hot-toast';

// import { useNavigate } from 'react-router-dom';
import { setReferedBy } from '../../../store/slices/AuthSlice';

// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import { useEffect } from "react";

// interface SignUpprops{
//   code: string;
// }

const SignUp: React.FC = () => {
  // const Navigate = useNavigate();

  // const walletAddress = useSelector(
  //   (state: RootState) => state.wallet.walletAddress
  // );
  const dispatch: AppDispatch = useDispatch();

  // useEffect(() => {

  //   const params = new URLSearchParams(location.search);
  //   const authCode = params.get('code');
  //   console.log(location.search,authCode);
  //   if (authCode) {
  //     sendCodeToBackend(authCode);
  //   }

  // },[])

  // const sendCodeToBackend = async (code: string) => {
  //   try {
  //     const response = await axios.post('http://localhost:3000/api/users/register', { code });

  //     console.log("DiscordResponseData****",response.data); // Handle response from the backend
  //     localStorage.setItem("userId",response.data.data);
  //   } catch (error) {
  //     console.error('Error sending code to backend:', error);
  //   }
  // };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const referralCode = params.get('referral');
    console.log(referralCode);
    if (referralCode) dispatch(setReferedBy({ refferedCode: referralCode }));
  }, [dispatch]);

  const handleTwitter = () => {};

  return (
    <>
      <LogoToken src={tokenTitle}></LogoToken>
      <Toaster position="top-center" reverseOrder={false} />
      <SignUpWrapper>
        <SignUpDetails>
          <SignUpDetailsWrapper>
            <SignUpTitleAndTextWrapper>
              <SignUpTitle>Become a TENEX</SignUpTitle>
              <SignUpText>Join our mission to spread TenEx Message</SignUpText>
            </SignUpTitleAndTextWrapper>
            <SignUpButtonWrapper>
              <ConnectWallet
                text={'Sign Up With Wallet'}
                walletImg={walletimg}
                page={'signup'}
              />
              <SignUpButtonTwitter onClick={handleTwitter}>
                <TwitterImage src={twitter} />
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
