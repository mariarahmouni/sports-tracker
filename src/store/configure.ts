//https://theonetechnologies.com/blog/post/how-to-add-redux-toolkit-to-your-react-typescript-app#introduction-to-redux-toolkit
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { ThunkAction } from '@reduxjs/toolkit';
import apiSlice from '../api/apiSlice';

// import { bookSlice } from './bookSlice';

 const store = configureStore({
  reducer: //need reducers from slices that we create
});



export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch;
export default store;
