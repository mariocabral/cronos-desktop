import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Rooms} from '../../bindings/Rooms';
import { RoomsState, Operations } from '../models/RoomsState';
import { RootState } from '../Store';



const initialState: RoomsState = {
    rooms: new Array(),
    profesionalsByRooms: new Array(),
    currentRoom: undefined,
    showRoomModal: false,
    showRoomDeleteModal: false,
    modalOperation: Operations.NONE,
    search: undefined
};


export const roomsSlice = createSlice({
    name: 'rooms',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      updateRoomsList: (state, action: PayloadAction<Array<Rooms>>) => {
        state.rooms = action.payload;
      },
      setCurrentRoom: (state, action: PayloadAction<Rooms | undefined>) => {
        state.currentRoom = action.payload;
      },
      setModalOperation: (state, action: PayloadAction<Operations>) => {
        state.modalOperation = action.payload;
      },
      showRoomModal: (state, action: PayloadAction<boolean>) => {
        console.log('update Room modal show: ' + action.payload);
        state.showRoomModal = action.payload;
      },
      showRoomDeleteModal: (state, action: PayloadAction<boolean>) => {
        console.log('delete Room modal show: ' + action.payload);
        state.showRoomDeleteModal = action.payload;
      },
      updateSearch: (state, action: PayloadAction<String | undefined> ) => {
        console.log('search Room value: ' + action.payload);
        state.search = action.payload;
      },
    },
  });
  

  export const { updateRoomsList, setCurrentRoom, showRoomModal, showRoomDeleteModal, setModalOperation, updateSearch } = roomsSlice.actions;

  // The function below is called a selector and allows us to select a value from
  // the state. Selectors can also be defined inline where they're used instead of
  // in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
  export const selectRooms = (state: RootState) => state.rooms;
  

  export default roomsSlice.reducer;
  

