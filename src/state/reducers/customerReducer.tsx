import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Customers} from '../../bindings/Customers';
import { CustomersState, Operations } from '../models/CustomerState';
import { RootState } from '../Store';



const initialState: CustomersState = {
  customers: new Array(),
  currentCustomer: undefined,
  showCustomerModal: false,
  showCustomerDeleteModal: false,
  modalOperation: Operations.NONE,
  search: undefined
};


export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      updateCustomerList: (state, action: PayloadAction<Array<Customers>>) => {
        state.customers = action.payload;
      },
      setCurrentCustomer: (state, action: PayloadAction<Customers | undefined>) => {
        state.currentCustomer = action.payload;
      },
      setModalOperation: (state, action: PayloadAction<Operations>) => {
        state.modalOperation = action.payload;
      },
      showCustomerModal: (state, action: PayloadAction<boolean>) => {
        console.log('update Customers modal show: ' + action.payload);
        state.showCustomerModal = action.payload;
      },
      showCustomerDeleteModal: (state, action: PayloadAction<boolean>) => {
        console.log('update Customers delete modal show: ' + action.payload);
        state.showCustomerDeleteModal = action.payload;
      },
      updateSearch: (state, action: PayloadAction<String | undefined> ) => {
        console.log('search Customers value: ' + action.payload);
        state.search = action.payload;
      },
    },
  });
  

  export const { updateCustomerList, showCustomerModal, showCustomerDeleteModal, setCurrentCustomer, setModalOperation, updateSearch } = customerSlice.actions;

  // The function below is called a selector and allows us to select a value from
  // the state. Selectors can also be defined inline where they're used instead of
  // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
  export const selectCustomer = (state: RootState) => state.customer;
  

  export default customerSlice.reducer;
  

