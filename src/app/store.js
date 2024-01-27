import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './weather/weatherSlice';

const store = configureStore({
  reducer: {
    weather: weatherSlice,
  }
});

export default store;
