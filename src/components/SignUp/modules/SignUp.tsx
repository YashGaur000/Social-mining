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
import { useAccount } from '../../../hooks/useAccount';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { useEffect } from 'react';
import { connectWallet } from '../../../store/slices/ConnectWalletSlice';
import toast, { Toaster } from 'react-hot-toast';
import { useDisconnect } from 'wagmi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import { useEffect } from "react";

// interface SignUpprops{
//   code: string;
// }

const SignUp: React.FC = () => {
  const { address } = useAccount();

  const { disconnect } = useDisconnect();
  const Navigate = useNavigate();

  const walletAddress = useSelector(
    (state: RootState) => state.wallet.walletAddress
  );
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
    const wallet = async () => {
      if (address) {
        try {
          if (!walletAddress)
            await dispatch(connectWallet(address as string)).unwrap();
          toast.success('Wallet Connected Sucessfully');
          Navigate('/dashboard');
        } catch (err) {
          setTimeout(() => {
            toast.error('Failed to connect wallet');
          }, 2000);

          console.error('Failed to connect wallet:', err);
          disconnect();
        }
      }
    };

    void wallet();
  }, [address, dispatch]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const referralCode = params.get('code');
    if (referralCode) {
      sendReferralCodeToBackend(referralCode);
    }
  }, [address, dispatch]);

  const sendReferralCodeToBackend = async (code: string) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/api/users/connectwallet',
        { code }
      );

      const { userId, referralCode } = response.data;

      if (userId) {
        localStorage.setItem('userId', response.data.userId);
      }

      if (referralCode) {
        localStorage.setItem('referralCode', response.data.referralCode);
      }
    } catch (error) {
      console.error('Error sending code to backend:', error);
    }
  };

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
              />
              <SignUpButtonTwitter>
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
