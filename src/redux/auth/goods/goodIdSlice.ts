// goodSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedGoodId: null,
  
};

const goodIdSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    setSelectedGoodId: (state, action) => {
      state.selectedGoodId = action.payload;
    },
    
  },
});

export const { setSelectedGoodId } = goodIdSlice.actions;

export default goodIdSlice.reducer;
