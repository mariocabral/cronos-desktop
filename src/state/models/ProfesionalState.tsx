
import {Profesionals} from '../../bindings/Profesionals';

export enum Operations {
  NONE, ADD_PROFESIONAL, SHOW_PROFESIONAL, EDIT_PROFESIONAL, DELETE_PROFESIONAL
}

export interface ProfesionalState {
    profesionals: Array<Profesionals>,
    currentProfesional?: Profesionals,
    showProfesionalModal: boolean,
    showProfesionalDeleteModal: boolean,
    modalOperation: Operations,
    search?: String,
  }
