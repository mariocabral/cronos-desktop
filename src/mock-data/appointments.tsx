import {v4 as uuidv4} from 'uuid';
import moment, { Moment } from "moment";

const mockDataAppointments = [
    {
      id: 1,
      appointmentId: uuidv4(),
      title: 'Consulta 1',
      profesionalId: uuidv4(),
      profesionalName:'John Snow',
      customerId: uuidv4(),
      customerName: 'Pablo Masmorra',
      roomId: uuidv4(),
      roomName: 'sala 1',
      healtcareId: uuidv4(),
      healtcareName: 'particular',
      notes: 'El cliente es un joven menor de edad\nllega con la madre',
      appointmentStart: moment().add(-12, 'hours').toDate(),
      appointmentEnd: moment().add(-11, 'hours').toDate(),
      enabled: true,
    },
    {
      id: 2,
      appointmentId: uuidv4(),
      title: 'Consulta 2',
      profesionalId: uuidv4(),
      profesionalName:'John Snow',
      customerId: uuidv4(),
      customerName: 'Pablo Masmorra',
      roomId: uuidv4(),
      roomName: 'sala 1',
      healtcareId: uuidv4(),
      healtcareName: 'particular',
      notes: 'El cliente es un joven menor de edad\nllega con la madre',
      appointmentStart: moment().add(-13, 'hours').toDate(),
      appointmentEnd: moment().add(-7, 'hours').toDate(),
      enabled: true,
    }
  ];
  
export default mockDataAppointments;