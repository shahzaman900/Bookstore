import { createSlice } from '@reduxjs/toolkit';

const category = createSlice({
  name: '',
  initialState: [],
  reducers: {
    checkStatus: () => 'under construction',
  },
});

export const { checkStatus } = category.actions;
export default category.reducer;
