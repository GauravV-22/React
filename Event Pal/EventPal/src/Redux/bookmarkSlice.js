import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ids: JSON.parse(localStorage.getItem('bookmarkedEvents')) || []
};

const bookmarkSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    toggleBookmark: (state, action) => {
      const id = action.payload;
      if (state.ids.includes(id)) {
        state.ids = state.ids.filter(i => i !== id);
      } 
      else {
        state.ids.push(id);
      }
      localStorage.setItem('bookmarkedEvents', JSON.stringify(state.ids));
    }
  }
});

export const { toggleBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;