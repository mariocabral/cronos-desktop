import React from 'react';
import { useTranslation } from "react-i18next";
import { Box, Button, Card, CardContent, Paper, Stack, useTheme } from "@mui/material";
import { tokens, ThemeContextType } from '../../theme';
import { DataGrid, GridToolbar, GridActionsCellItem, GridRowId, GridColumns } from "@mui/x-data-grid";
import Header from '../../components/Header';
import EmptyRows from '../../components/EmptyRows';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { selectRooms, setCurrentRoom, showRoomModal, setModalOperation } from '../../state/reducers/roomsReducer';
import { Rooms } from '../../bindings/Rooms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseMedical, faPen, faTrash, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { Operations } from '../../state/models/RoomsState';
import StatsMedium from '../../components/StatsMedium';
import RoomsModal from './RoomsModal';

const RoomsView: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(ThemeContextType[theme.palette.mode]);
  const {t} = useTranslation();
  const dispatch = useAppDispatch();
  const roomsState = useAppSelector(selectRooms);

  const addRoom = () => {
    console.log('Add new profesional');
    dispatch(setModalOperation(Operations.ADD_ROOMS));
    dispatch(setCurrentRoom(undefined));
    dispatch(showRoomModal(true));
  };

  const deleteRoom = React.useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        console.log(`Delete ${id}`);
      });
    },
    [],
  );

  const showRoom = React.useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        console.log(`Edit new profesional ${id}`);
        dispatch(setModalOperation(Operations.EDIT_ROOMS));
        dispatch(setCurrentRoom(undefined));
        dispatch(showRoomModal(true));
      });
    },
    [],
  );

  const columns = React.useMemo<GridColumns<Rooms>>(
    () => [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
        field: "name",
        headerName: t('views.rooms.table.name') ?? '',
        headerAlign: "left",
        align: "left",
    },
    {
      field: "profesionals",
      headerName: t('views.rooms.table.profesionals') ?? '',
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "description",
      headerName: t('views.rooms.table.description') ?? '',
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "phone",
      headerName: t('views.rooms.table.phones') ?? '',
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: 'actions',
      type: 'actions',
      width: 80,
      getActions: (params: any) => [
        <GridActionsCellItem
          icon={<FontAwesomeIcon icon={faTrash} size='1x' color={colors.redAccent[600]} />}
          label={t('views.rooms.table.action.delete')}
          onClick={deleteRoom(params.id)}
          
        />,
        <GridActionsCellItem
          icon={<FontAwesomeIcon icon={faPen} size='1x' color={colors.primary[300]} />}
          label={t('views.rooms.table.action.edit')}
          onClick={showRoom(params.id)}
        />,
      ],
    },
  ],
  [showRoom, deleteRoom],
);




  return (
    <Box m="20px" >
      <Header title={t('views.rooms.title')} subtitle={t('views.rooms.subtitle')}></Header>
      <Card sx={{ backgroundColor: colors.primary[400] }}>
        <CardContent>
          <Stack direction='row' justifyContent="space-between" alignItems="center">
            <StatsMedium icon={<FontAwesomeIcon icon={faDoorOpen} size='3x' color={colors.grey[300]} />}
              title={t('views.rooms.stats.rooms')} value={roomsState.rooms.length}></StatsMedium>
            <Paper elevation={24}>
              <Stack justifyContent="center" alignItems="center">
                <Button variant="outlined" onClick={addRoom} startIcon={<FontAwesomeIcon icon={faHouseMedical} size='1x' color={colors.grey[300]} />}>
                  {t('views.rooms.table.action.add')}
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
          rows={roomsState.rooms}
          columns={columns}
          components={{ 
            Toolbar: GridToolbar, 
            NoRowsOverlay: EmptyRows,
          }}
        />
        
      </Box>
      </Box>
      <RoomsModal></RoomsModal>
    </Box>      

  );
}

export default RoomsView;
