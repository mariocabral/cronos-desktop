import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Appointement} from '../../bindings/Appointement';
import { AppointementState, Operations } from '../models/AppointmentState';
import { RootState } from '../Store';
import {Event} from 'react-big-calendar';


const initialState: AppointementState = {
  appointements: new Array(),
  events: new Array(),
  currentAppointement: undefined,
  showAppointementModal: false,
  showAppointementDeleteModal: false,
  modalOperation: Operations.NONE,
  search: undefined
};


export const appointementSlice = createSlice({
    name: 'appointement',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      updateAppointementsList: (state, action: PayloadAction<Array<Appointement>>) => {
        state.appointements = action.payload;
        state.events = state.appointements.map((a:Appointement) => {
            const event:Event = {
            allDay: false,
            title: a.title,
            start: a.appointmentStart,
            end: a.appointmentEnd,
            resource: undefined
          };
          return event;
        });
      },
      setCurrentAppointement: (state, action: PayloadAction<Appointement | undefined>) => {
        state.currentAppointement = action.payload;
      },
      setModalOperation: (state, action: PayloadAction<Operations>) => {
        state.modalOperation = action.payload;
      },
      showAppointementModal: (state, action: PayloadAction<boolean>) => {
        console.log('update Appointement modal show: ' + action.payload);
        state.showAppointementModal = action.payload;
      },
      showAppointementDeleteModal: (state, action: PayloadAction<boolean>) => {
        console.log('update Appointement delete modal show: ' + action.payload);
        state.showAppointementDeleteModal = action.payload;
      },
      updateSearch: (state, action: PayloadAction<String | undefined> ) => {
        console.log('search Appointement value: ' + action.payload);
        state.search = action.payload;
      },
    },
  });
  

  export const { updateAppointementsList, 
                 showAppointementModal, 
                 showAppointementDeleteModal, 
                 setCurrentAppointement, 
                 setModalOperation, 
                 updateSearch 
                } = appointementSlice.actions;

  // The function below is called a selector and allows us to select a value from
  // the state. Selectors can also be defined inline where they're used instead of
  // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
  export const selectAppointement = (state: RootState) => state.appointment;
  

  export default appointementSlice.reducer;
  

