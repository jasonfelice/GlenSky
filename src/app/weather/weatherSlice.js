import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const OPEN_KEY = process.env.REACT_APP_OPEN_KEY
const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${OPEN_KEY}`;

const initialState = {
  weather: {},
  selectedDay: '',
  selectedTime: {},
  selectedData: [],
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

const groupDays = (data) => {
  const groupedDays = {};
  data.forEach((item) => {
    const day = item.dt_txt.split(' ')[0];
    if (!groupedDays[day]) {
      groupedDays[day] = [];
    }
    groupedDays[day].push(item);
  });
  return groupedDays;
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setSelectedDay: (state, action) => {
      const selectedDay  = action.payload;
      state.selectedTime = state.weather.list[selectedDay][0];
      state.selectedData = state.weather.list[selectedDay];
    },
    setSelectedTime: (state, action) => {
      const selectedTime = action.payload;
      state.selectedTime = selectedTime;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.weather = {message: action.payload.message, list: groupDays(action.payload.list)};
        state.selectedDay = Object.keys(state.weather.list)[0];
        state.selectedTime = state.weather.list[state.selectedDay][0];
        state.selectedData = state.weather.list[state.selectedDay];
        state.status = 'fetched';
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.status = 'failed';
      })
  },
});

export const { setSelectedData, setSelectedDay, setSelectedTime } = weatherSlice.actions;

export default weatherSlice.reducer;
