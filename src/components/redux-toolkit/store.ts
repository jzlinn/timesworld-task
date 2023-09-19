import { configureStore } from "@reduxjs/toolkit";
import { countryList } from "./reducers/home-reducers";

export const store = configureStore({
  reducer: {
    countryList,
  },
});
