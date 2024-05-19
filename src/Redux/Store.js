import { configureStore } from '@reduxjs/toolkit';
import chatuiReducer from './Features/ChatUiSlice'
import authReducer from './Features/AuthSlice';

const store = configureStore({
  reducer: {
    chatui: chatuiReducer,
    auth: authReducer,
  },
});

export default store;
