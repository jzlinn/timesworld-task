import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface IUserTypes {
  userName: string;
  userId: string;
  userEmail: string;
  mobile?: number;
}

const initialAuth: IUserTypes = {
  userName: "",
  userId: "",
  userEmail: "",
  mobile: 0,
};

export const fetchUsers = createAsyncThunk("users-auth/fetchUsers", () => {
  const res = fetch("https://jsonplaceholder.typicode.com/users").then((data) =>
    data.json()
  );
  return res;
});

const userAuthenticationSlice = createSlice({
  name: "users-auth",
  initialState: initialAuth,
  reducers: {},
  //   extraReducers: (builder)=>{
  //   }
});
