import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './weather/weatherSlice';
import citiesSlice from './cities/citiesSlice';

const store = configureStore({
  reducer: {
    weather: weatherSlice,
    cities: citiesSlice,
  }
});

export default store;
