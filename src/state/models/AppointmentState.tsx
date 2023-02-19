
import {Appointement} from '../../bindings/Appointement';
import {Event} from 'react-big-calendar';

export enum Operations {
  NONE, ADD_APPOINTMENT, SHOW_APPOINTMENT, EDIT_APPOINTMENT, DELETE_APPOINTMENT
}

export interface AppointementState {
    appointements: Array<Appointement>,
    events: Array<Event>,
    currentAppointement?: Appointement,
    showAppointementModal: boolean,
    showAppointementDeleteModal: boolean,
    modalOperation: Operations,
    search?: String,
  }
