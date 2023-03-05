import React from 'react';
import { useTranslation } from "react-i18next";
import { Box, Button, Card, CardContent, Paper, Stack, useTheme } from "@mui/material";
import { tokens, ThemeContextType } from '../../theme';
import { DataGrid, GridToolbar, GridActionsCellItem, GridColumns, GridRowId } from "@mui/x-data-grid";
import Header from '../../components/Header';
import EmptyRows from '../../components/EmptyRows';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { selectCustomer, setCurrentCustomer, showCustomerModal, setModalOperation } from '../../state/reducers/customerReducer';
import { Customers } from '../../bindings/Customers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseMedical, faPen, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { Operations } from '../../state/models/CustomerState';
import StatsMedium from '../../components/StatsMedium';
import CustomerModal from './CustomerModal';


const CustomersView: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(ThemeContextType[theme.palette.mode]);
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const customerState = useAppSelector(selectCustomer);

  const addCustomer = () => {
    console.log('Add new profesional');
    dispatch(setModalOperation(Operations.ADD_CUSTOMER));
    dispatch(setCurrentCustomer(undefined));
    dispatch(showCustomerModal(true));
  };

  const deleteCustomer = React.useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        console.log(`Delete ${id}`);
      });
    },
    [],
  );

  const showCustomer = React.useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        console.log(`Edit new profesional ${id}`);
        dispatch(setModalOperation(Operations.EDIT_CUSTOMER));
        dispatch(setCurrentCustomer(undefined));
        dispatch(showCustomerModal(true));
      });
    },
    [],
  );


  const columns = React.useMemo<GridColumns<Customers>>(
    () => [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "fullName",
      headerName: t('views.customers.table.fullName') ?? '',
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: t('views.customers.table.email') ?? '',
      flex: 1,
    },
    {
      field: "phone",
      headerName: t('views.customers.table.phone') ?? '',
      flex: 1,
    },
    {
      field: "profesionals",
      headerName: t('views.customers.table.profesionals') ?? '',
      flex: 1,
    },
    {
      field: "nextsAppointments",
      headerName: t('views.customers.table.nextsAppointments') ?? '',
      flex: 1,
    },
    {
      field: 'actions',
      type: 'actions',
      width: 80,
      getActions: (params: any) => [
        <GridActionsCellItem
          icon={<FontAwesomeIcon icon={faTrash} size='1x' color={colors.redAccent[600]} />}
          label={t('views.customers.table.action.delete')}
          onClick={deleteCustomer(params.id)}
          
        />,
        <GridActionsCellItem
          icon={<FontAwesomeIcon icon={faPen} size='1x' color={colors.primary[300]} />}
          label={t('views.customers.table.action.edit')}
          onClick={showCustomer(params.id)}
        />,
      ],
    },
  ],
  [showCustomer, deleteCustomer],
);


  return (
    <Box m="20px" >
      <Header title={t('views.customers.title')} subtitle={t('views.customers.subtitle')}></Header>
      
      <Card sx={{ backgroundColor: colors.primary[400] }}>
        <CardContent>
          <Stack direction='row' justifyContent="space-between" alignItems="center">
            <StatsMedium icon={<FontAwesomeIcon icon={faUser} size='3x' color={colors.grey[300]} />}
              title={t('views.customers.stats.customers')} value={customerState.customers.length}></StatsMedium>
            <Paper elevation={24}>
              <Stack justifyContent="center" alignItems="center">
                <Button variant="outlined" onClick={addCustomer} startIcon={<FontAwesomeIcon icon={faHouseMedical} size='1x' color={colors.grey[300]} />}>
                  {t('views.customers.table.action.add')}
                </Button>
              </Stack>
            </Paper>
          </Stack>
        </CardContent>
      </Card>
      <Box justifyContent="space-between" alignItems="center" >
          <Box
        m="40px 0 0 0"
        height="75vh"
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
          rows={customerState.customers}
          columns={columns}
          components={{ 
            Toolbar: GridToolbar, 
            NoRowsOverlay: EmptyRows,
          }}
        />
        
      </Box>

      <CustomerModal></CustomerModal>
      </Box>
    </Box>      

  );
}

export default CustomersView;
