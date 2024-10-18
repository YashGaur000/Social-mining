import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

export interface ConnectWalletArgs {
  userId: string;
  walletAddress: string;
  refralCode: string;
}

export const connectWallet = createAsyncThunk(
  'auth/connectWallet',
  async (data: ConnectWalletArgs, { rejectWithValue }) => {
    try {
      const payloadData = {
        address: data.walletAddress,
        referralCode: data.refralCode,
        avaibleUserId: data.userId,
      };
      const response = await axios.post(
        'http://localhost:3000/api/users/connectwallet',
        payloadData,
        { withCredentials: true }
      );
      console.log(response.data);

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message || 'Failed to connect wallet';
        return rejectWithValue({ message: errorMessage });
      }
      return rejectWithValue({ message: 'An unknown error occurred' });
    }
  }
);
