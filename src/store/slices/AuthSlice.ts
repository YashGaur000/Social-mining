import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { connectWallet } from '../actions/ConnectWalletAction';

interface AuthState {
  isAuthenticated: boolean;
  userId: string | null;
  userName: string | null;
  walletAddress: string | null;
  loginType: 'twitter' | 'wallet' | null;
  refralcode: string | null;
  refferedBy: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  userId: null,
  userName: null,
  walletAddress: null,
  loginType: null,
  refralcode: null,
  refferedBy: null,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setWalletAddress(state, action: PayloadAction<{ walletAddress: string }>) {
      state.walletAddress = action.payload.walletAddress;
    },
    setReferedBy(state, action: PayloadAction<{ refferedCode: string }>) {
      console.log('reffered', action.payload);

      state.refferedBy = action.payload.refferedCode;
    },
    setTwitterDetails(
      state,
      action: PayloadAction<{ userId: string; userName: string }>
    ) {
      state.userName = action.payload.userName;
    },
    clearAuthState(state) {
      state.isAuthenticated = false;
      state.userId = null;
      state.userName = null;
      state.walletAddress = null;
      state.loginType = null;
      state.refralcode = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(connectWallet.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(connectWallet.fulfilled, (state, action) => {
        console.log(action);

        state.status = 'succeeded';

        state.isAuthenticated = true;
        if (action.payload.User) {
          state.userId = action.payload.User.userId;
          state.loginType = 'wallet';
          state.userName = action.payload.User.userName;
          state.walletAddress = action.payload.User.walletAddress;
          if (action.payload.User.referral) {
            state.refralcode = action.payload.User.referral.referralCode;
          }
          if (action.payload.referralcode)
            state.refralcode = action.payload.referralcode;
        }
      })
      .addCase(connectWallet.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload
          ? (action.payload as { message: string }).message
          : 'Failed to connect wallet';
      });
  },
});

export const {
  setWalletAddress,
  setTwitterDetails,
  setReferedBy,
  clearAuthState,
} = authSlice.actions;

export default authSlice.reducer;
