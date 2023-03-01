
import { useAppDispatch } from '../state/hooks';
import { updateProfesionalList } from '../state/reducers/profesionalReducer';
import { updateAppointementsList } from '../state/reducers/appointmentReducer';
import mockDataAppointments from './appointments';
import mockDataProfesionals from './profesional';



export const loadAppointmentsMocks = () => {
    const dispatch = useAppDispatch();
    dispatch(updateAppointementsList(mockDataAppointments));
};

export const loadProfesionalMocks = () => {
    const dispatch = useAppDispatch();
    dispatch(updateProfesionalList(mockDataProfesionals));
};


