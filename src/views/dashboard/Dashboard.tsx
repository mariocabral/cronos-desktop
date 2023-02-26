import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, IconButton, Paper, Stack, Typography, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { ThemeContextType, tokens } from "../../theme";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { useTranslation } from "react-i18next";
import Header from '../../components/Header';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay, faCalendarDays, faCalendarCheck, faCalendarXmark, faClockRotateLeft, faSync } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import Stats from '../../components/Stats';
import { CardHeader } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemButton } from '@mui/material';
import { ListItemAvatar } from '@mui/material';
import { Avatar } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Divider } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import StatsCurrentsAppointments from '../../components/StatsCurrentsAppointments';



const Dashboard: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(ThemeContextType[theme.palette.mode]);
  const {t} = useTranslation();

  return (
    <Box m="20px" >
      <Header title={t('views.dashboard.title')} subtitle={t('views.dashboard.subtitle')}></Header>
      <Box display="flex" justifyContent="space-between" alignItems="center" >
        <Stack spacing={3}>
          <Card sx={{ backgroundColor: colors.primary[400]}}>
            <CardHeader title="Datos del dia" subheader="September 14, 2016"  titleTypographyProps={{variant:'h2' }} sx={{ color: colors.greenAccent[400]}}></CardHeader>
            <CardContent>
              <Stack direction='row' spacing={3}>
                  <Stats icon={<FontAwesomeIcon icon={faCalendarDay} size='5x' color={colors.greenAccent[300]}/>} title='Turnos del dia' value={12}></Stats>
                  <StatsCurrentsAppointments></StatsCurrentsAppointments>
              </Stack>      
            </CardContent>
          </Card>
          <Card sx={{ backgroundColor: colors.primary[400] }}>
            <CardHeader  title="Datos del mes" subheader="September" titleTypographyProps={{variant:'h2' }} sx={{ color: colors.greenAccent[400]}}></CardHeader>
            <CardContent>
              <Stack direction='row'>
                <Stats icon={<FontAwesomeIcon icon={faCalendarDays} size='5x' color={colors.blueAccent[400]} />} title='Totales' value={12}></Stats>
                <Stats icon={<FontAwesomeIcon icon={faCalendarCheck} size='5x' color={colors.blueAccent[400]}/>} title='Completados' value={10}></Stats>
                <Stats icon={<FontAwesomeIcon icon={faCalendar} size='5x' color={colors.blueAccent[400]}/>} title='Pendientes' value={2}></Stats>
                <Stats icon={<FontAwesomeIcon icon={faCalendarXmark} size='5x' color={colors.blueAccent[400]}/>} title='Cancelados' value={0}></Stats>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </Box>
  )
}

export default Dashboard
