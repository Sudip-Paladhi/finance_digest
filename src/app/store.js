import { configureStore } from '@reduxjs/toolkit';
import hoverReducer from '../features/hoverSlice';

const store = configureStore({
  reducer: {
    hover: hoverReducer,
  },
});

export default store;
