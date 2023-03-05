import React from 'react';
import { useTranslation } from "react-i18next";
import { Box, useTheme, Card, CardContent, Stack, Button, Paper, Divider } from "@mui/material";
import { tokens, ThemeContextType } from '../../theme';
import { DataGrid, GridActionsCellItem, GridToolbar, GridColumns, GridRowId } from "@mui/x-data-grid";
import Header from '../../components/Header';
import EmptyRows from '../../components/EmptyRows';
import StatsMedium from '../../components/StatsMedium';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor, faUserPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import ProfesionalModal from './ProfesionalModal';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { selectProfesional, setCurrentProfesional, showProfesionalModal, setModalOperation } from '../../state/reducers/profesionalReducer';
import { Operations } from '../../state/models/ProfesionalState';
import { Profesionals } from '../../bindings/Profesionals';


const ProfesionalsView: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(ThemeContextType[theme.palette.mode]);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const profesionalState = useAppSelector(selectProfesional);

  const addProfesional = () => {
    console.log('Add new profesional');
    dispatch(setModalOperation(Operations.ADD_PROFESIONAL));
    dispatch(setCurrentProfesional(undefined));
    dispatch(showProfesionalModal(true));
  };

  const deleteProfesional = React.useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        console.log(`Delete ${id}`);
      });
    },
    [],
  );

  const showProfesional = React.useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        console.log(`Edit new profesional ${id}`);
        dispatch(setModalOperation(Operations.EDIT_PROFESIONAL));
        dispatch(setCurrentProfesional(undefined));
        dispatch(showProfesionalModal(true));
      });
    },
    [],
  );

  const columns = React.useMemo<GridColumns<Profesionals>>(
    () => [
      { field: "id", headerName: "ID", flex: 0.5 },
      {
        field: "fullName",
        headerName: t('views.profesional.table.name') ?? '',
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "degree",
        headerName: t('views.profesional.table.degree') ?? '',
        headerAlign: "left",
        align: "left",
        flex: 1,
      },
      {
        field: "licence",
        headerName: t('views.profesional.table.licence') ?? '',
        headerAlign: "left",
        align: "left",
      },
      {
        field: "phone",
        headerName: t('views.profesional.table.phones') ?? '',
        cellClassName: "name-column--cell",
        flex: 1,
      },
      {
        field: "email",
        headerName: t('views.profesional.table.email') ?? '',
        flex: 1,
      },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params: any) => [
          <GridActionsCellItem
            icon={<FontAwesomeIcon icon={faTrash} size='1x' color={colors.redAccent[600]} />}
            label={t('views.profesional.table.action.delete')}
            onClick={deleteProfesional(params.id)}
            
          />,
          <GridActionsCellItem
            icon={<FontAwesomeIcon icon={faPen} size='1x' color={colors.primary[300]} />}
            label={t('views.profesional.table.action.edit')}
            onClick={showProfesional(params.id)}
          />,
        ],
      },
    ],
    [showProfesional, deleteProfesional],
  );

  return (
    <Box m="20px" >
      <Header title={t('views.profesional.title')} subtitle={t('views.profesional.subtitle')}></Header>
      <Card sx={{ backgroundColor: colors.primary[400] }}>
        <CardContent>
          <Stack direction='row' justifyContent="space-between" alignItems="center">
            <StatsMedium icon={<FontAwesomeIcon icon={faUserDoctor} size='3x' color={colors.grey[300]} />}
              title={t('views.profesional.stats.profesionals')} value={profesionalState.profesionals.length}></StatsMedium>
            <Paper elevation={24}>
              <Stack justifyContent="center" alignItems="center">
                <Button variant="outlined" onClick={addProfesional} startIcon={<FontAwesomeIcon icon={faUserPlus} size='1x' color={colors.grey[300]} />}>
                  {t('views.profesional.table.action.add')}
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
            rows={profesionalState.profesionals}
            columns={columns}
            components={{
              Toolbar: GridToolbar,
              NoRowsOverlay: EmptyRows,
            }}
          />

        </Box>
      </Box>
      <ProfesionalModal />
    </Box>

  );
}

export default ProfesionalsView;
