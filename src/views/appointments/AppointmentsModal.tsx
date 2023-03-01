import React, { useState } from 'react';
import { Box, useTheme, Modal, TextField, Stack, Divider, Typography, Button } from "@mui/material";
import { ThemeContextType, tokens } from "../../theme";
import { useTranslation } from "react-i18next";
import Header from '../../components/Header';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { selectAppointement, showAppointementModal, setCurrentAppointement, addAppointements } from '../../state/reducers/appointmentReducer';
import { Appointement } from '../../bindings/Appointement';
import { Operations } from '../../state/models/AppointmentState';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import RotateLeftOutlinedIcon from '@mui/icons-material/RotateLeftOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import RichTextEditor, { createValueFromString, createEmptyValue } from 'react-rte';
import moment, { Moment } from "moment";
import CustomerAutoComplete, { CustomerItem } from './CustomerAutoComplete';
import RepeatAutoComplete from './RepeatAutoComplete';
import ProfesionalAutoComplete, { ProfesionalItem } from './ProfesionalAutoComplete';
import HealtCareAutoComplete, { HealtCareItem } from './HealtCareAutoComplete';
import RoomsAutoComplete, { RoomsItem } from './RoomsAutoComplete';


const AppointmentsModal: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(ThemeContextType[theme.palette.mode]);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const appointmentState = useAppSelector(selectAppointement);
  let title = t('views.appointments.modal.title.add');
  const start = appointmentState.currentAppointement ? appointmentState.currentAppointement.appointmentStart : moment().toDate();
  const end = appointmentState.currentAppointement ? appointmentState.currentAppointement.appointmentEnd : moment().toDate();
  let currentAppointement: Appointement = {
    title: '',
    profesionalId: '',
    profesionalName: '',
    customerId: '',
    customerName: '',
    roomId: '',
    roomName: '',
    healtcareId: '',
    healtcareName: '',
    appointmentStart: start,
    appointmentEnd: end,
    enabled: true
  };
  const showMode = appointmentState.modalOperation == Operations.SHOW_APPOINTMENT;
  const [showSaveButton, setShowSaveButton] = React.useState(showMode);
  var value = createEmptyValue();
  var customerItem: CustomerItem | null = null;
  var healtCareItem: HealtCareItem | null = null;
  var profesionalItem: ProfesionalItem | null = null;
  var roomItem: RoomsItem | null = null;
  if (showMode && appointmentState.currentAppointement) {
    currentAppointement = appointmentState.currentAppointement;
    title = currentAppointement.title ?? title;
    value = currentAppointement.notes ? createValueFromString(currentAppointement.notes, 'markdown') : createEmptyValue();
    customerItem = {
      name: currentAppointement.customerName ?? '',
      id: currentAppointement.customerId ?? ''
    };
    healtCareItem = {
      name: currentAppointement.healtcareName ?? '',
      id: currentAppointement.healtcareId ?? ''
    };
    profesionalItem = {
      name: currentAppointement.profesionalName ?? '',
      id: currentAppointement.profesionalId ?? ''
    };
    roomItem = {
      name: currentAppointement.roomName ?? '',
      id: currentAppointement.roomId ?? ''
    };
  }

  const handleClose = () => {
    dispatch(setCurrentAppointement(undefined));
    dispatch(showAppointementModal(false));
  }

  const handleSaveAppointment = () => {
    dispatch(addAppointements(currentAppointement));
    dispatch(setCurrentAppointement(undefined));
    dispatch(showAppointementModal(false));
  }

  const handleRemoveAppointment = () => {
    dispatch(addAppointements(currentAppointement));
    dispatch(setCurrentAppointement(undefined));
    dispatch(showAppointementModal(false));
  };

  const handleChangeStart = (newValue: Moment | null) => {
    currentAppointement.appointmentStart = newValue ? newValue.toDate() : moment().toDate();
    setShowSaveButton(false);
  };

  const handleChangeEnd = (newValue: Moment | null) => {
    currentAppointement.appointmentEnd = newValue ? newValue.toDate() : moment().toDate();
    setShowSaveButton(false);
  };

  const updateCustomer = (newValue: CustomerItem | null) => {
    currentAppointement.customerName = newValue ? newValue.name : null;
    currentAppointement.customerId = newValue ? newValue.id : null;
    setShowSaveButton(false);
  }

  const updateTitle = (value: string) => {
    const objCopy = { ...currentAppointement };
    objCopy.title = value;
    currentAppointement = objCopy;
    setShowSaveButton(false);
  };

  const updateRepeatPolicy = (value: any) => {
    console.log(value);
  }

  const updateProfesional = (newValue: ProfesionalItem | null) => {
    currentAppointement.profesionalName = newValue ? newValue.name : null;
    currentAppointement.profesionalId = newValue ? newValue.id : null;
    setShowSaveButton(false);
  }

  const updateHealtCare = (newValue: HealtCareItem | null) => {
    currentAppointement.healtcareName = newValue ? newValue.name : null;
    currentAppointement.healtcareId = newValue ? newValue.id : null;
    setShowSaveButton(false);
  }

  const updateRooms = (newValue: RoomsItem | null) => {
    currentAppointement.roomName = newValue ? newValue.name : null;
    currentAppointement.roomId = newValue ? newValue.id : null;
    setShowSaveButton(false);
  }

  const updateNotes = (newValue: any) => {
    currentAppointement.notes = newValue;
    setShowSaveButton(false);
  }

  const style = {
    position: 'absolute' as 'absolute',
    top: '20%',
    left: '20%',
    transform: 'translate(-10%, -10%)',
    width: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  console.log(`Start ${currentAppointement.appointmentStart} end ${currentAppointement.appointmentEnd}`);
  return (
    <Modal
      open={appointmentState.showAppointementModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style }} >
        <Stack spacing={2} alignItems="center" direction="row" justifyContent="space-between">
          <CalendarMonthRoundedIcon sx={{ fontSize: 40, color: 'action.active', mr: 1, my: 0.5 }} />
          <Header title={title} subtitle=''></Header>
          <Stack spacing={2} direction="row"  >
            {showMode && (
              <Button variant="contained" color="primary" onClick={handleRemoveAppointment} startIcon={<DeleteOutlineIcon />}>{t('views.appointments.modal.form.delete')}</Button>
            )}
            <Button variant="contained" color="primary" onClick={handleSaveAppointment} disabled={showSaveButton}>{t('views.appointments.modal.form.submit')}</Button>
            <Button variant="outlined" color="primary" onClick={handleClose} >{t('views.appointments.modal.form.close')}</Button>
          </Stack>
        </Stack>
        <Box >
          <Stack spacing={2} >
            <Divider />
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CreateOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField fullWidth id="filled-basic" label={t('views.appointments.modal.form.title')} variant="filled"
                value={showMode ? currentAppointement.title : null}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  updateTitle(event.target.value);
                }} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <PersonAddAltTwoToneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <CustomerAutoComplete onChange={updateCustomer} value={customerItem}></CustomerAutoComplete>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <Stack alignItems="center" direction="row" spacing={2}>
                <QueryBuilderOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DesktopDatePicker
                    label={t('views.appointments.modal.form.day')}
                    inputFormat="MM/DD/YYYY"
                    value={currentAppointement.appointmentStart}
                    onChange={handleChangeStart}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <TimePicker
                    label={t('views.appointments.modal.form.from')}
                    value={currentAppointement.appointmentStart}
                    onChange={handleChangeStart}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <ArrowForwardOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <TimePicker
                    label={t('views.appointments.modal.form.to')}
                    value={currentAppointement.appointmentEnd}
                    onChange={handleChangeEnd}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <Typography variant="h5" color={colors.greenAccent[200]}>
                  duration time
                </Typography>
              </Stack>
            </Box>
            {false && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <RotateLeftOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <RepeatAutoComplete onChange={updateRepeatPolicy}></RepeatAutoComplete>
              </Box>
            )}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <PersonOutlineOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <ProfesionalAutoComplete onChange={updateProfesional} value={profesionalItem}></ProfesionalAutoComplete>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <HealthAndSafetyOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <HealtCareAutoComplete onChange={updateHealtCare} value={healtCareItem}></HealtCareAutoComplete>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <MeetingRoomOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <RoomsAutoComplete onChange={updateRooms} value={roomItem}></RoomsAutoComplete>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <NotesOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <RichTextEditor
                value={value}
                onChange={updateNotes}
              />
            </Box>
          </Stack>
        </Box>
      </Box>
    </Modal>
  )
}



export default AppointmentsModal
