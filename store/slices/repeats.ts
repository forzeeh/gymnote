import { createSlice } from '@reduxjs/toolkit';

export type Repeat = {
  id: number;
  weight: string;
  reps: string;
};

export type RepeatsState = {
  repeats: Repeat[];
  loading: boolean;
  error: boolean;
};

const initialState: RepeatsState = {
  repeats: [],
  loading: false,
  error: false,
};

const userListSlice = createSlice({
  name: 'repeatsList',
  initialState,
  reducers: {},
});

export default userListSlice.reducer;
