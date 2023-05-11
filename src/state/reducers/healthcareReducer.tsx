import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Healthcare} from '../../bindings/Healthcare';
import { HealthcareState, Operations } from '../models/HealthcareState';
import { RootState } from '../Store';



const initialState: HealthcareState = {
    healthcares: new Array(),
    healthcarePhones: new Array(),
    currentHealthcare: undefined,
    showHealthcareModal: false,
    showHealthcareDeleteModal: false,
    modalOperation: Operations.NONE,
    search: undefined
};


export const healthcaresSlice = createSlice({
    name: 'healthcares',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      updateHealthcaresList: (state, action: PayloadAction<Array<Healthcare>>) => {
        state.healthcares = action.payload;
      },
      setCurrentHealthcare: (state, action: PayloadAction<Healthcare | undefined>) => {
        state.currentHealthcare = action.payload;
      },
      setModalOperation: (state, action: PayloadAction<Operations>) => {
        state.modalOperation = action.payload;
      },
      showHealthcareModal: (state, action: PayloadAction<boolean>) => {
        console.log('update Healthcare modal show: ' + action.payload);
        state.showHealthcareModal = action.payload;
      },
      showHealthcareDeleteModal: (state, action: PayloadAction<boolean>) => {
        console.log('delete Healthcare modal show: ' + action.payload);
        state.showHealthcareDeleteModal = action.payload;
      },
      updateSearch: (state, action: PayloadAction<String | undefined> ) => {
        console.log('search Healthcare value: ' + action.payload);
        state.search = action.payload;
      },
    },
  });
  

  export const { updateHealthcaresList, setCurrentHealthcare, showHealthcareModal, showHealthcareDeleteModal, setModalOperation, updateSearch } = healthcaresSlice.actions;

  // The function below is called a selector and allows us to select a value from
  // the state. Selectors can also be defined inline where they're used instead of
  // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
  export const selectHealthcare = (state: RootState) => state.healthcare;
  

  export default healthcaresSlice.reducer;
  

