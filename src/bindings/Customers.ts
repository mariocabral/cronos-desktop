// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CustomersPhones } from "./CustomersPhones";

export interface Customers {
  _id?: string;
  customerId?: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  enabled: boolean;
  createdAt?: string;
  updatedAt?: string;
  phones: Array<CustomersPhones>;
}