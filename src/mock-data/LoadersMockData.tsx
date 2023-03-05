
import { useAppDispatch } from '../state/hooks';
import { updateProfesionalList } from '../state/reducers/profesionalReducer';
import { updateAppointementsList } from '../state/reducers/appointmentReducer';
import { updateRoomsList } from '../state/reducers/roomsReducer';
import mockDataAppointments from './appointments';
import mockDataProfesionals from './profesional';
import mockDataRooms from './rooms';



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


