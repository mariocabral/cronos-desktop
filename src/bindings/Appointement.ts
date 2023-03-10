// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.

export interface Appointement {
  _id?: string;
  appointmentId?: string;
  title: string | null;
  profesionalId: string | null;
  profesionalName: string | null;
  customerId: string | null;
  customerName: string | null;
  roomId: string | null;
  roomName: string | null;
  healtcareId: string | null;
  healtcareName: string | null;
  notes?: string;
  appointmentStart: Date;
  appointmentEnd: Date;
  enabled: boolean;
  createdAt?: string;
  updatedAt?: string;
}
