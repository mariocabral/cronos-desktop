import React from 'react';
import { useTranslation } from "react-i18next";
import { Box, useTheme } from "@mui/material";
import { tokens, ThemeContextType } from '../../theme';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import mockDataCustomerss from '../../mock-data/customers';
import Header from '../../components/Header';
import EmptyRows from '../../components/EmptyRows';


const Customers: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(ThemeContextType[theme.palette.mode]);
  const {t} = useTranslation();

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "fullName",
      headerName: t('views.customers.table.fullName'),
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: t('views.customers.table.email'),
      flex: 1,
    },
    {
      field: "phone",
      headerName: t('views.customers.table.phone'),
      flex: 1,
    },
    {
      field: "profesionals",
      headerName: t('views.customers.table.profesionals'),
      flex: 1,
    },
    {
      field: "nextsAppointments",
      headerName: t('views.customers.table.nextsAppointments'),
      flex: 1,
    },
  ];

  return (
    <Box m="20px" >
      <Header title={t('views.customers.title')} subtitle={t('views.customers.subtitle')}></Header>
      
      
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
          rows={mockDataCustomerss}
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

export default Customers;
