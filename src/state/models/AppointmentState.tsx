
import {Appointement} from '../../bindings/Appointement';
import { AppointmentEvent } from '../../bindings/AppointmentEvent';

export enum Operations {
  NONE, ADD_APPOINTMENT, SHOW_APPOINTMENT, DELETE_APPOINTMENT
}

export interface AppointementState {
    appointements: Array<Appointement>,
    events: Array<AppointmentEvent>,
    currentAppointement?: Appointement,
    showAppointementModal: boolean,
    showAppointementDeleteModal: boolean,
    modalOperation: Operations,
    search?: String,
  }
