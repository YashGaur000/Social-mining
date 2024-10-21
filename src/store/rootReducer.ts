import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './slices/AuthSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: [
    'isAuthenticated',
    'loginType',
    'refralcode',
    'userName',
    'userId',
    'walletAddress',
  ],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});

export default rootReducer;
