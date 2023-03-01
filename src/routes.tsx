import React, { FC, LazyExoticComponent } from 'react'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';


const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const ProfesionalsView = React.lazy(() => import('./views/profesionals/ProfesionalsView'))
const Rooms = React.lazy(() => import('./views/rooms/Rooms'))
const Customers = React.lazy(() => import('./views/customers/Customers'))
const Healtcare = React.lazy(() => import('./views/healtcare/Healtcare'))
const Appointments = React.lazy(() => import('./views/appointments/Appointments'))


export enum ComponentItemType {
  title,
  access
}

export interface NavigationRouteItem {
  type: ComponentItemType,
  title: string,
  name: string,
  path?: string,
  icon?: any,
  element?: any
};

export const navegationItems: Array<NavigationRouteItem> = [
  {
    type: ComponentItemType.access,
    title:"sidebar.dashboard",
    name: "dashboard",
    path:"/dashboard",
    icon:<HomeOutlinedIcon/>,
    element: Dashboard
  },
  {
    type: ComponentItemType.title,
    title:"sidebar.schedule.title",
    name: "title",
  },
  {
    type: ComponentItemType.access,
    title:"sidebar.admin.appointments",
    name: "appointments",
    path:"/appointments",
    icon:<CalendarMonthOutlinedIcon/>,
    element: Appointments 
  },
  {
    type: ComponentItemType.title,
    title:"sidebar.admin.title",
    name: "title",
  },
  {
    type: ComponentItemType.access,
    title:"sidebar.admin.profesional",
    name: "profesionals",
    path:"/profesionals",
    icon:<PeopleOutlinedIcon/>,
    element: ProfesionalsView 
  },
  {
    type: ComponentItemType.access,
    title:"sidebar.admin.rooms",
    name: "rooms",
    path:"/rooms",
    icon:<ChairOutlinedIcon/>,
    element: Rooms 
  },
  {
    type: ComponentItemType.access,
    title:"sidebar.admin.customers",
    name: "customers",
    path:"/customers",
    icon:<ContactPageOutlinedIcon/>,
    element: Customers 
  },

  {
    type: ComponentItemType.access,
    title:"sidebar.admin.healtcare",
    name: "healtcare",
    path:"/healtcare",
    icon:<MedicalInformationOutlinedIcon/>,
    element: Healtcare 
  },
];
