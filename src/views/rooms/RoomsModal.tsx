import React, { useState } from 'react';
import { Box, useTheme, Modal, TextField, Stack, Divider, Typography, Button, Switch } from "@mui/material";
import { ThemeContextType, tokens } from "../../theme";
import { useTranslation } from "react-i18next";
import Header from '../../components/Header';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { selectRooms, setCurrentRoom, showRoomModal } from '../../state/reducers/roomsReducer';
import { Operations } from '../../state/models/RoomsState';
import { faUserDoctor, faUser, faPencil, faGraduationCap, faIdCard, faAt, faCheck, faPhone, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import RichTextEditor, { createValueFromString, createEmptyValue } from 'react-rte';
import { Rooms } from '../../bindings/Rooms';
import ProfesionalAutoComplete, { ProfesionalItem } from './ProfesionalAutoComplete';



const RoomsModal: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(ThemeContextType[theme.palette.mode]);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const roomsState = useAppSelector(selectRooms);
  let title = t('views.rooms.modal.title.add');
  const editMode = roomsState.modalOperation == Operations.EDIT_ROOMS;
  const [showSaveButton, setShowSaveButton] = React.useState(editMode);
  switch (roomsState.modalOperation) {
    case Operations.ADD_ROOMS:
        title = t('views.rooms.modal.title.add');
        break;
    case Operations.EDIT_ROOMS:
        title = t('views.rooms.modal.title.edit');
        break;
    default:
        break;
  }
  var value = createEmptyValue();
  const showMode = roomsState.modalOperation == Operations.SHOW_ROOMS;
  let currentRoom: Rooms = {
    name: '',
    description: '',
    phone: '',
    enabled: true
  };
  if (showMode && roomsState.currentRoom) {
    currentRoom = roomsState.currentRoom;
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

  const handleClose = () => {
    dispatch(setCurrentRoom(undefined));
    dispatch(showRoomModal(false));
  };
  const handleSaveProfesional = () => {
    dispatch(setCurrentRoom(undefined));
    dispatch(showRoomModal(false));
  };

  const handleRemoveProfesional = () => {
    dispatch(setCurrentRoom(undefined));
    dispatch(showRoomModal(false));
  };

  const updateNotes = (newValue: any) => {
    currentRoom.description = newValue;
    setShowSaveButton(false);
  }

  const updateProfesionals = (newValue: ProfesionalItem[] | undefined) => {
    setShowSaveButton(false);
  }

  return (
    <Modal
      open={roomsState.showRoomModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style }} >
        <Stack spacing={2} alignItems="center" direction="row" justifyContent="space-between">
          <FontAwesomeIcon icon={faDoorOpen} size='4x' color={colors.grey[300]} />
          <Header title={title} subtitle=''></Header>
          <Stack spacing={2} direction="row"  >
            {editMode && (
              <Button variant="contained" color="primary" onClick={handleRemoveProfesional} startIcon={<DeleteOutlineIcon />}>{t('views.rooms.modal.form.delete')}</Button>
            )}
            <Button variant="contained" color="primary" onClick={handleSaveProfesional} disabled={showSaveButton}>{t('views.rooms.modal.form.submit')}</Button>
            <Button variant="outlined" color="primary" onClick={handleClose} >{t('views.rooms.modal.form.close')}</Button>
          </Stack>
        </Stack>
        <Box >
          <Stack spacing={2} >
            <Divider />
            <Stack direction='row' spacing={2} alignItems='center'>
              <FontAwesomeIcon icon={faPencil} size='2x' color={colors.grey[300]} />
              <TextField
                    fullWidth
                    label='Nombre'
                    variant="outlined"
                />
            </Stack>
            <Stack direction='row' spacing={2} alignItems='center'>
              <FontAwesomeIcon icon={faUserDoctor} size='1x' color={colors.grey[300]} />
              <ProfesionalAutoComplete values={[]} onChange={updateProfesionals}/>
            </Stack>
            <Stack direction='row' spacing={2} alignItems='center'>
              <FontAwesomeIcon icon={faPhone} size='1x' color={colors.grey[300]} />
              <TextField
                    fullWidth
                    label='Telefono (Interno)'
                    variant="outlined"
                />
            </Stack>
            <Stack direction='row' spacing={2} alignItems='center'>
              <FontAwesomeIcon icon={faCheck} size='1x' color={colors.grey[300]} />
              <Switch
                  checked={true}
                  onChange={()=>{}}
                />
            </Stack>
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



export default RoomsModal
