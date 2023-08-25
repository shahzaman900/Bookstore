import { createSlice } from '@reduxjs/toolkit';

const category = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    checkStatus: (state, action) => {
      state.categories = action.payload === 'Under construction'
        ? 'Under construction'
        : state.categories;
    },
  },
});

export const { checkStatus } = category.actions;
export default category.reducer;
