import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface ICountriesList {
  name: string;
  region: string;
  flag: string;
  independent: boolean;
}

export interface IResponseType {
  loading: boolean;
  status: number;
  countries?: ICountriesList[];
}

const initCountry: IResponseType = {
  countries: [],
  status: 0,
  loading: true,
};

export const fetchCounrtyDetails = createAsyncThunk(
  "home-countries/fetchCountries",
  async () => {
    let url = "https://restcountries.com/v2/all?fields=name,region,flag";
    const data = await fetch(url)
      .then((response) => response.json())
      .then((data) => data)
      .catch(function (error) {
        console.log(error);
      });

    return data;
  }
);

const getAllCountriesSlice = createSlice({
  name: "home-countries",
  initialState: initCountry,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCounrtyDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCounrtyDetails.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.countries = payload;
      state.status = 200;
    });
    builder.addCase(fetchCounrtyDetails.rejected, (state, action) => {
      state.loading = false;
      state.status = 400;
    });
  },
});

export const countryList = getAllCountriesSlice.reducer;
