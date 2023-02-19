import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import thunk from "redux-thunk"
import profesionalReducer from './reducers/profesionalReducer';
import appointmentReducer from './reducers/appointmentReducer';


export const store = configureStore({
  reducer: {
    profesional: profesionalReducer,
    appointment: appointmentReducer,
  },
  middleware: [thunk, logger],
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
