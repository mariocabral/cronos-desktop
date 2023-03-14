import React, { useState } from 'react';
import { Box, useTheme, Modal, TextField, Stack, Divider, Typography, Button, Switch } from "@mui/material";
import { ThemeContextType, tokens } from "../../theme";
import { useTranslation } from "react-i18next";
import Header from '../../components/Header';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { selectCustomer, setCurrentCustomer, showCustomerModal } from '../../state/reducers/customerReducer';
import { Operations } from '../../state/models/CustomerState';
import { faUser, faPencil, faGraduationCap, faIdCard, faAt, faCheck, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import HealthcareAutoComplete, { HealthcareItem } from './HealthcareAutoComplete';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';



const CustomerModal: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(ThemeContextType[theme.palette.mode]);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const customerState = useAppSelector(selectCustomer);
  let title = t('views.customers.modal.title.add');
  const editMode = customerState.modalOperation == Operations.EDIT_CUSTOMER;
  const [showSaveButton, setShowSaveButton] = React.useState(editMode);
  var healthcareItems: HealthcareItem[] | undefined = undefined;

  switch (customerState.modalOperation) {
    case Operations.ADD_CUSTOMER:
        title = t('views.customers.modal.title.add');
        break;
    case Operations.EDIT_CUSTOMER:
        title = t('views.customers.modal.title.edit');
        break;
    default:
        break;
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
    dispatch(setCurrentCustomer(undefined));
    dispatch(showCustomerModal(false));
  };
  const handleSaveProfesional = () => {
    dispatch(setCurrentCustomer(undefined));
    dispatch(showCustomerModal(false));
  };

  const handleRemoveProfesional = () => {
    dispatch(setCurrentCustomer(undefined));
    dispatch(showCustomerModal(false));
  };

  const updateHealthcare = (newValue: HealthcareItem[] | null) => {
    setShowSaveButton(false);
  }

  return (
    <Modal
      open={customerState.showCustomerModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style }} >
        <Stack spacing={2} alignItems="center" direction="row" justifyContent="space-between">
          <FontAwesomeIcon icon={faUser} size='4x' color={colors.grey[300]} />
          <Header title={title} subtitle=''></Header>
          <Stack spacing={2} direction="row"  >
            {editMode && (
              <Button variant="contained" color="primary" onClick={handleRemoveProfesional} startIcon={<DeleteOutlineIcon />}>{t('views.customers.modal.form.delete')}</Button>
            )}
            <Button variant="contained" color="primary" onClick={handleSaveProfesional} disabled={showSaveButton}>{t('views.customers.modal.form.submit')}</Button>
            <Button variant="outlined" color="primary" onClick={handleClose} >{t('views.customers.modal.form.close')}</Button>
          </Stack>
        </Stack>
        <Box >
          <Stack spacing={2} >
            <Divider />
            <Stack direction='row' spacing={2} alignItems='center'>
              <FontAwesomeIcon icon={faPencil} size='2x' color={colors.grey[300]} />
              <div></div>
              <TextField
                    fullWidth
                    label='Nombre'
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label='Apellido'
                    variant="outlined"
                />
            </Stack>
            <Stack direction='row' spacing={2} alignItems='center'>
              <FontAwesomeIcon icon={faAt} size='1x' color={colors.grey[300]} />
              <TextField
                    fullWidth
                    label='Email'
                    variant="outlined"
                />
            </Stack>
            <Stack direction='row' spacing={2} alignItems='center'>
              <FontAwesomeIcon icon={faPhone} size='1x' color={colors.grey[300]} />
              <TextField
                    fullWidth
                    label='Telefono 1'
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label='Telefono 2'
                    variant="outlined"
                />
            </Stack>
            <Stack direction='row' spacing={2} alignItems='center'>
              <HealthAndSafetyOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <HealthcareAutoComplete onChange={updateHealthcare} value={healthcareItems}></HealthcareAutoComplete>
            </Stack>
            <Stack direction='row' spacing={2} alignItems='center'>
              <FontAwesomeIcon icon={faCheck} size='1x' color={colors.grey[300]} />
              <Switch
                  checked={true}
                  onChange={()=>{}}
                />
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Modal>
  )
}



export default CustomerModal
