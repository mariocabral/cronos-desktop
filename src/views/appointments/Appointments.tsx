import React, {useState} from 'react';
import { Box, useTheme, List,  ListItem,  ListItemText,  Typography, } from "@mui/material";
import { ThemeContextType, tokens } from "../../theme";
import { useTranslation } from "react-i18next";
import Header from '../../components/Header';
import { dateFnsLocalizer, Event } from 'react-big-calendar';
import BigCalendar from '../../components/BigCalendar';
import withDragAndDrop, { withDragAndDropProps } from 'react-big-calendar/lib/addons/dragAndDrop';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import es from 'date-fns/locale/es';
import addHours from 'date-fns/addHours';
import startOfHour from 'date-fns/startOfHour';




const Appointments: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(ThemeContextType[theme.palette.mode]);
  const {t} = useTranslation();
  const culture = t('languaje');
  const lang = {
    week: t('calendar.week'),
    work_week: t('calendar.work_week'),
    day: t('calendar.day'),
    month: t('calendar.month'),
    previous: t('calendar.previous'),
    next: t('calendar.next'),
    today: t('calendar.today'),
    agenda: t('calendar.agenda'),
  };

  const [currentEvents, setCurrentEvents] = useState([]);
  const [events, setEvents] = useState<Event[]>([
    {
      title: 'Learn cool stuff',
      start,
      end,
    },
  ])

  const onEventResize: withDragAndDropProps['onEventResize'] = data => {
    const { start, end } = data

    setEvents(currentEvents => {
      const firstEvent = {
        start: new Date(start),
        end: new Date(end),
      }
      return [...currentEvents, firstEvent]
    })
  }

  const onEventDrop: withDragAndDropProps['onEventDrop'] = data => {
    console.log(data)
  }

  return (
    <Box m="20px" >
      <Header title={t('views.appointments.title')} subtitle={t('views.appointments.subtitle')}></Header>
      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      date
                      
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
        <div >
    
        <DnDCalendar
          views={['week', 'day', 'agenda']}
          messages={lang}
          culture={culture}
          defaultView='day'
          events={events}
          localizer={localizer}
          onEventDrop={onEventDrop}
          onEventResize={onEventResize}
          resizable
          min={new Date(0, 0, 0, 8, 0, 0)}
          max={new Date(0, 0, 0, 20, 0, 0)}
        />

        </div>
        </Box>
      </Box>
    </Box>
  )
}

const locales = {
  'en-US': enUS,
  'es': es,
}
const endOfHour = (date: Date): Date => addHours(startOfHour(date), 1)
const now = new Date()
const start = endOfHour(now)
const end = addHours(start, 2)
// The types here are `object`. Strongly consider making them better as removing `locales` caused a fatal error
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})
//@ts-ignore
const DnDCalendar = withDragAndDrop(BigCalendar)

export default Appointments
