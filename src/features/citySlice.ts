import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { geoUserName } from '@/helpers/constants'
import { City, CityState } from '@/helpers/types'
import axios from 'axios'

const initialState: CityState = {
  cities: [],
  selectedCity: null,
  pays: '',
  loading: false,
  error: null,
};

export const fetchCities = createAsyncThunk<City[], string>(
  'cities/fetchCities',
  async (inputValue: string) => {
    const response = await axios.get(`http://api.geonames.org/searchJSON`, {
      params: {
        q: inputValue,
        maxRows: 10,
        username: geoUserName,
      },
    });
    return response.data.geonames.map((city: any) => ({
      ville: city.name,
      pays: city.countryName,
      lat_lon: `${city.lat}_${city.lng}`
    }));
  }
);


const citySlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    setSelectedCity(state, action) {
      state.selectedCity = action.payload;
      state.pays = action.payload.country;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCities.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.cities = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload || null;
      });
  },
});

export const { setSelectedCity } = citySlice.actions;
export default citySlice.reducer;
