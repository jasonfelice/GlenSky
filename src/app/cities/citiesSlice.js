import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const G_KEY = process.env.REACT_APP_G_KEY;

const initialState = [];

export const getCities = createAsyncThunk('weather/cities', async (input) => {
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?${input}=kullu&types=geocode&key=${G_KEY}`);
    } catch (error) {
        return error.message;
    }
});

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
});

export default citiesSlice.reducer;

