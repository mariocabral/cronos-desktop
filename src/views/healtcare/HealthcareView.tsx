import React from 'react';
import { useTranslation } from "react-i18next";
import { Box, useTheme, Card, CardContent, Stack, Button, Paper } from "@mui/material";
import { tokens, ThemeContextType } from '../../theme';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from '../../components/Header';
import EmptyRows from '../../components/EmptyRows';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { selectHealthcare, setCurrentHealthcare, showHealthcareModal, setModalOperation } from '../../state/reducers/healthcareReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StatsMedium from '../../components/StatsMedium';
import { faIdCardClip, faUserPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Operations } from '../../state/models/HealthcareState';


const HealthcareView: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(ThemeContextType[theme.palette.mode]);
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const healthcareState = useAppSelector(selectHealthcare);

  const addHealthcare = () => {
    console.log('Add new healthcare');
    dispatch(setModalOperation(Operations.ADD_HEALTHCARE));
    dispatch(setCurrentHealthcare(undefined));
    dispatch(showHealthcareModal(true));
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: t('views.healthcare.table.name'),
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phones",
      headerName: t('views.healthcare.table.phone'),
      flex: 1,
    },
    {
      field: "profesionals",
      headerName: t('views.healthcare.table.profesionals'),
      flex: 1,
    },
    {
      field: "customers",
      headerName: t('views.healthcare.table.customers'),
      flex: 1,
    },
  ];

  return (
    <Box m="20px" >
      <Header title={t('views.healthcare.title')} subtitle={t('views.healthcare.subtitle')}></Header>
      <Card sx={{ backgroundColor: colors.primary[400] }}>
        <CardContent>
          <Stack direction='row' justifyContent="space-between" alignItems="center">
            <StatsMedium icon={<FontAwesomeIcon icon={faIdCardClip} size='3x' color={colors.grey[300]} />}
              title={t('views.healthcare.stats.healthcare')} value={healthcareState.healthcares.length}></StatsMedium>
            <Paper elevation={24}>
              <Stack justifyContent="center" alignItems="center">
                <Button variant="outlined" onClick={addHealthcare} startIcon={<FontAwesomeIcon icon={faUserPlus} size='1x' color={colors.grey[300]} />}>
                  {t('views.healthcare.table.action.add')}
                </Button>
              </Stack>
            </Paper>
          </Stack>
        </CardContent>
      </Card>
      <Box justifyContent="space-between" alignItems="center" >
          <Box
        m="40px 0 0 0"
        height="55vh"
        mt={2}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        
  <DataGrid
          rows={healthcareState.healthcares}
          columns={columns}
          components={{ 
            Toolbar: GridToolbar, 
            NoRowsOverlay: EmptyRows,
          }}
        />
        
      </Box>
      </Box>
    </Box>      

  );
}

export default HealthcareView;
