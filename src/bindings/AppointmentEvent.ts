import {Event} from 'react-big-calendar';
import { Appointement } from './Appointement';


export interface AppointmentEvent extends Event {
    appointment: Appointement;
  }
  