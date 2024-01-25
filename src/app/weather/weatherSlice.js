import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  weather: {},
  status: 'idle',
  error: null,
};