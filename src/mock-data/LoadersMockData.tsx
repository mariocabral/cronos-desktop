
import { useAppDispatch } from '../state/hooks';
import { updateProfesionalList } from '../state/reducers/profesionalReducer';
import { updateAppointementsList } from '../state/reducers/appointmentReducer';
import { updateRoomsList } from '../state/reducers/roomsReducer';
import { updateCustomerList } from '../state/reducers/customerReducer';
import mockDataAppointments from './appointments';
import mockDataProfesionals from './profesional';
import mockDataRooms from './rooms';
import mockDataCustomers from './customers';
import mockDataHealthcare from './healthcare';
import { updateHealthcaresList } from '../state/reducers/healthcareReducer';



export const loadAppointmentsMocks = () => {
    const dispatch = useAppDispatch();
    dispatch(updateAppointementsList(mockDataAppointments));
};

export const loadProfesionalMocks = () => {
    const dispatch = useAppDispatch();
    dispatch(updateProfesionalList(mockDataProfesionals));
};

export const loadRoomsMocks = () => {
    const dispatch = useAppDispatch();
    dispatch(updateRoomsList(mockDataRooms));
};

export const loadCustomerMocks = () => {
    const dispatch = useAppDispatch();
    dispatch(updateCustomerList(mockDataCustomers));
};

export const loadHealthcareMocks = () => {
    const dispatch = useAppDispatch();
    dispatch(updateHealthcaresList(mockDataHealthcare));
};