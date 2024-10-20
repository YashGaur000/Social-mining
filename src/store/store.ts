import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { persistStore } from 'redux-persist';

const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
