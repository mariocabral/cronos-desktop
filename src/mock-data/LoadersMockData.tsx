
import { useAppDispatch } from '../state/hooks';
import { selectProfesional, updateProfesionalList } from '../state/reducers/profesionalReducer';
import { updateAppointementsList } from '../state/reducers/appointmentReducer';
import mockDataAppointments from './appointments';



const loadAppointmentsMocks = () => {
    const dispatch = useAppDispatch();
    dispatch(updateAppointementsList(mockDataAppointments));
};


export default loadAppointmentsMocks;

