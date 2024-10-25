import { createSlice } from '@reduxjs/toolkit';

const hoverSlice = createSlice({
  name: 'hover',
  initialState: {
    hovered: null,
  },
  reducers: {
    setHover: (state, action) => {
      state.hovered = action.payload;
    },
  },
});

export const { setHover } = hoverSlice.actions;
export default hoverSlice.reducer;
