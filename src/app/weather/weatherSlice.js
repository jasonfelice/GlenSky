import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const OPEN_KEY = process.env.REACT_APP_OPEN_KEY

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
  async ({type, city}) => {
    let URL;
    // Type checks the type of search by coordinates or name
    switch (type) {
      case 'cords':
        const cords = city.split(',');
        // Add cordinates to api url [0] is lat, [1] is long.
        URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${cords[0]}&lon=${cords[1]}&appid=${OPEN_KEY}`;
      break;
      case 'name':
        // Add city name from input to the url for direct search
        URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${OPEN_KEY}`;
      break;
      default:
        URL = '';
      break;
    }
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);

// Reformat weather data and organize by date
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
    // Manage selected weekday
    setSelectedDay: (state, action) => {
      const selectedDay  = action.payload;
      state.selectedTime = state.weather.list[selectedDay][0];
      state.selectedData = state.weather.list[selectedDay];
    },
    // Manage selected Time
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
          state.weather = {
            location: `${action.payload.city.name}, ${action.payload.city.country}`,
            timezone: action.payload.city.timezone,
            message: action.payload.message,
            list: groupDays(action.payload.list),
          };
          state.selectedDay = Object.keys(state.weather.list)[0];
          state.selectedTime = state.weather.list[state.selectedDay][0];
          // Data of selected day
          state.selectedData = state.weather.list[state.selectedDay];
          state.status = 'fetched';
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'failed';
      })
  },
});

export const { setSelectedData, setSelectedDay, setSelectedTime } = weatherSlice.actions;

export default weatherSlice.reducer;
