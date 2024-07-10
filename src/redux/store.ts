//https://theonetechnologies.com/blog/post/how-to-add-redux-toolkit-to-your-react-typescript-app#introduction-to-redux-toolkit
import { configureStore } from '@reduxjs/toolkit';
// import { bookSlice } from './bookSlice';

export const store = configureStore({
  reducer: {
    // book: bookSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;
