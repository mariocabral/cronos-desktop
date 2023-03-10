import React from 'react';
import { useTranslation } from "react-i18next";
import { Box, useTheme } from "@mui/material";
import { tokens, ThemeContextType } from '../../theme';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import mockDatahealtcares from '../../mock-data/healtcare';
import Header from '../../components/Header';
import EmptyRows from '../../components/EmptyRows';


const Healtcare: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(ThemeContextType[theme.palette.mode]);
  const {t} = useTranslation();

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: t('views.healtcare.table.name'),
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: t('views.healtcare.table.phone'),
      flex: 1,
    },
    {
      field: "profesionals",
      headerName: t('views.healtcare.table.profesionals'),
      flex: 1,
    },
    {
      field: "customers",
      headerName: t('views.healtcare.table.customers'),
      flex: 1,
    },
  ];

  return (
    <Box m="20px" >
      <Header title={t('views.healtcare.title')} subtitle={t('views.healtcare.subtitle')}></Header>
      
      
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
          rows={mockDatahealtcares}
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

export default Healtcare;
