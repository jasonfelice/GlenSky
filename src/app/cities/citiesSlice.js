import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const G_KEY = process.env.REACT_APP_G_KEY;

const initialState = {
  list: [],
  status: 'idle',
  error: null,
};

export const getCities = createAsyncThunk('weather/cities', async (input) => {
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=geocode&key=${G_KEY}`);
        return response.data.predictions;
    } catch (error) {
        throw new Error(error);
    }
});

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCities.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(getCities.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = 'idle';
      })
      .addCase(getCities.rejected, (state, action) => {
        state.error = action.error.message;
        state.status =  'failed';
      })
  },
});

export default citiesSlice.reducer;

