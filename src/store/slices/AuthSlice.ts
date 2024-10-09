import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  userInfo: { id: string; name: string } | null; // Optional, for storing user info
}

const initialState: AuthState = {
  isAuthenticated: false,
  accessToken: null,
  userInfo: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState(
      state,
      action: PayloadAction<{
        isAuthenticated: boolean;
        accessToken?: string;
        userInfo?: AuthState['userInfo'];
      }>
    ) {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.accessToken = action.payload.accessToken || null;
      state.userInfo = action.payload.userInfo || null;
    },

    clearAuthState(state) {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.userInfo = null;
    },
  },
});

export const { setAuthState, clearAuthState } = authSlice.actions;

export default authSlice.reducer;
