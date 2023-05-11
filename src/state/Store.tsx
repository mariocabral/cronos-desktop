import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import logger from 'redux-logger';
import thunk from "redux-thunk"
import profesionalReducer from './reducers/profesionalReducer';
import appointmentReducer from './reducers/appointmentReducer';
import roomsReducer from './reducers/roomsReducer';
import customerReducer from './reducers/customerReducer';
import healthcareReducer from './reducers/healthcareReducer';


export const store = configureStore({
  reducer: {
    profesional: profesionalReducer,
    appointment: appointmentReducer,
    rooms: roomsReducer,
    customer: customerReducer,
    healthcare: healthcareReducer,
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
