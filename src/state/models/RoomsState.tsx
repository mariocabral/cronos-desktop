
import {Rooms} from '../../bindings/Rooms';
import {ProfesionalsByRooms} from '../../bindings/ProfesionalsByRooms';

export enum Operations {
  NONE, ADD_ROOMS, SHOW_ROOMS, EDIT_ROOMS, DELETE_ROOMS
}

export interface RoomsState {
    rooms: Array<Rooms>,
    profesionalsByRooms: Array<ProfesionalsByRooms>,
    currentRoom?: Rooms,
    showRoomModal: boolean,
    showRoomDeleteModal: boolean,
    modalOperation: Operations,
    search?: String,
  }
