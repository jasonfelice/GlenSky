import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
  weather: {},
  status: 'idle',
  error: null,
};

export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async () => {
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.status = 'idle';
        state.weather = action.payload;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.status = 'failed';
      })
  },
});

export default weatherSlice.reducer;
