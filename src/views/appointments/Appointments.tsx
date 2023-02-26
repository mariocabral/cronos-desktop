import React from 'react';
import { Box, Paper, Stack, useTheme } from "@mui/material";
import { ThemeContextType, tokens } from "../../theme";
import { useTranslation } from "react-i18next";
import Header from '../../components/Header';
import { dateFnsLocalizer, Event } from 'react-big-calendar';
import BigCalendar from '../../components/BigCalendar';
import withDragAndDrop, { withDragAndDropProps } from 'react-big-calendar/lib/addons/dragAndDrop';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import es from 'date-fns/locale/es';
import addHours from 'date-fns/addHours';
import startOfHour from 'date-fns/startOfHour';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { selectAppointement, showAppointementModal, setModalOperation, setCurrentAppointement } from '../../state/reducers/appointmentReducer';
import { Operations } from '../../state/models/AppointmentState';
import AppointmentsModal from './AppointmentsModal';
import moment from 'moment';
import { AppointmentEvent } from '../../bindings/AppointmentEvent';

const locales = {
  'en-US': enUS,
  'es': es,
}
const endOfHour = (date: Date): Date => addHours(startOfHour(date), 1)
const now = new Date()
const start = endOfHour(now)
const end = addHours(start, 2)
// The types here are `object`. Strongly consider making them better as removing `locales` caused a fatal error
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})
//@ts-ignore
const DnDCalendar = withDragAndDrop(BigCalendar)

const Appointments: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(ThemeContextType[theme.palette.mode]);
  const {t} = useTranslation();
  const culture = t('languaje');
  const lang = {
    week: t('calendar.week'),
    work_week: t('calendar.work_week'),
    day: t('calendar.day'),
    month: t('calendar.month'),
    previous: t('calendar.previous'),
    next: t('calendar.next'),
    today: t('calendar.today'),
    agenda: t('calendar.agenda'),
  };
  const dispatch = useAppDispatch();
  const appointmentState = useAppSelector(selectAppointement);

  const onEventResize: withDragAndDropProps['onEventResize'] = data => {
    console.log(data);
  }

  const onEventDrop: withDragAndDropProps['onEventDrop'] = data => {
    console.log(data);
  }

  const handleSelectSlot = ({ start, end } : Event) => {
    console.log(`New appointment. start=${start} and end=${end}`);
    dispatch(setModalOperation(Operations.ADD_APPOINTMENT));
    dispatch(setCurrentAppointement({
      title: null,
      profesionalId: null,
      profesionalName: null,
      customerId: null,
      customerName: null,
      roomId: null,
      roomName: null,
      healtcareId: null,
      healtcareName: null,
      appointmentStart: start ?? moment().toDate() ,
      appointmentEnd: end ?? moment().add(1, 'hours').toDate(),
      enabled: true,
    }));
    dispatch(showAppointementModal(true));
  };

  const handleSelectEvent = (event: Object) => {
    console.log(`Show appointment.${event}`);
    const appointmentEvent = event as AppointmentEvent;
    dispatch(setModalOperation(Operations.SHOW_APPOINTMENT));
    dispatch(setCurrentAppointement(appointmentEvent.appointment));
    dispatch(showAppointementModal(true));
  };

  return (
    <Box m="20px" >
      <Header title={t('views.appointments.title')} subtitle={t('views.appointments.subtitle')}></Header>

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
        <div >
    
          <DnDCalendar
            views={['week', 'day', 'agenda']}
            messages={lang}
            culture={culture}
            defaultView='day'
            events={appointmentState.events}
            localizer={localizer}
            onEventDrop={onEventDrop}
            onEventResize={onEventResize}
            onSelectSlot={handleSelectSlot}
            onSelectEvent={handleSelectEvent}
            resizable
            selectable
            min={new Date(0, 0, 0, 8, 0, 0)}
            max={new Date(0, 0, 0, 20, 0, 0)}
          />
        </div>
        </Box>
      </Box>
      <AppointmentsModal></AppointmentsModal>
    </Box>
  )
}



export default Appointments
