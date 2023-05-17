import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    upDate: {
      reducer: (state, action) => {
        console.log(action.payload);
        state = action.payload;
      },
    },
    prepare: payload => ({ payload }), // Возвращаем объект с полем "payload"
  },
});

export const { upDate } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
