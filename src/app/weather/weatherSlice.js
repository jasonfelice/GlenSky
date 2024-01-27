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