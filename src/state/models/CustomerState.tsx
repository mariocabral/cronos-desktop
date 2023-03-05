
import {Customers} from '../../bindings/Customers';

export enum Operations {
  NONE, ADD_CUSTOMER, SHOW_CUSTOMER, EDIT_CUSTOMER, DELETE_CUSTOMER
}

export interface CustomersState {
    customers: Array<Customers>,
    currentCustomer?: Customers,
    showCustomerModal: boolean,
    showCustomerDeleteModal: boolean,
    modalOperation: Operations,
    search?: String,
  }
