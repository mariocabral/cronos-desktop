
import {Healthcare} from '../../bindings/Healthcare';
import {HealthcarePhones} from '../../bindings/HealthcarePhones';

export enum Operations {
  NONE, ADD_HEALTHCARE, SHOW_HEALTHCARE, EDIT_HEALTHCARE, DELETE_HEALTHCARE
}

export interface HealthcareState {
    healthcares: Array<Healthcare>,
    healthcarePhones: Array<HealthcarePhones>,
    currentHealthcare?: Healthcare,
    showHealthcareModal: boolean,
    showHealthcareDeleteModal: boolean,
    modalOperation: Operations,
    search?: String,
  }
