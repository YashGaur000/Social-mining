import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface WalletState {
  walletAddress: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: WalletState = {
  walletAddress: null,
  loading: false,
  error: null,
};

export const connectWallet = createAsyncThunk(
  'wallet/connectWallet',
  async (address: string) => {
    console.log(address);

    const response = await axios.post(
      'http://localhost:3000/api/users/connectwallet',
      { address }
    );
    const { referralLink } = response.data;
    localStorage.setItem('referralLink', referralLink);
    console.log(response.data);

    return response.data;
  }
);

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    Wallet: (state) => {
      state.walletAddress = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(connectWallet.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(connectWallet.fulfilled, (state, action) => {
        state.loading = false;
        state.walletAddress = action.payload.address;
        state.error = null;
      })
      .addCase(connectWallet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to connect wallet';
      });
  },
});

export const { Wallet } = walletSlice.actions;
export default walletSlice.reducer;
