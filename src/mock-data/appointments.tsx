import {v4 as uuidv4} from 'uuid';
import moment, { Moment } from "moment";

function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const initEvent1 = randomIntFromInterval(1, 6)
const initEvent2 = randomIntFromInterval(1, 6)

const mockDataAppointments = [
    {
      id: 1,
      appointmentId: uuidv4(),
      title: 'Consulta 1',
      profesionalId: '2a70d5fc-aad6-4f19-8cbe-b791646697ce',
      profesionalName:'John Snow p',
      customerId: '2a70d5fc-aad6-4f19-8cbe-b791646697ce',
      customerName: 'Jaime Lannister',
      roomId: '2a70d5fc-aad6-4f19-8cbe-b791646697ce',
      roomName: 'sala 1',
      healthcareId: '2a70d5fc-aad6-4f19-8cbe-b791646697ce',
      healthcareName: 'Particular',
      notes: 'El cliente es un joven menor de edad\nllega con la madre',
      appointmentStart: moment().set('hours', 8 + initEvent1).toDate(),
      appointmentEnd: moment().set('hours', 8 + initEvent1).add(1, 'hours').toDate(),
      enabled: true,
    },
    {
      id: 2,
      appointmentId: uuidv4(),
      title: 'Consulta 2',
      profesionalId: '2a70d5fc-aad6-4f19-8cbe-b791646697ce',
      profesionalName:'John Snow p',
      customerId: '2a70d5fc-aad6-4f19-8cbe-b791646697ce',
      customerName: 'Cersei Lannister',
      roomId: '2a70d5fc-aad6-4f19-8cbe-b791646697ce',
      roomName: 'sala 2',
      healthcareId: '2a70d5fc-aad6-4f19-8cbe-b791646697ce',
      healthcareName: 'Osde',
      notes: 'El cliente es un joven menor de edad\nllega con la madre',
      appointmentStart: moment().set('hours', 8 + initEvent2).toDate(),
      appointmentEnd: moment().set('hours', 8 + initEvent2).add(2, 'hours').toDate(),
      enabled: true,
    }
  ];
  
export default mockDataAppointments;