import React, { FC, LazyExoticComponent } from 'react'
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";


const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Profesionals = React.lazy(() => import('./views/profesionals/Profesionals'))

export enum ComponentItemType {
  title,
  access
}

export interface NavigationRouteItem {
  type: ComponentItemType,
  title: string,
  path?: string,
  icon?: any,
  element?: any
};

export const navegationItems: Array<NavigationRouteItem> = [
  {
    type: ComponentItemType.access,
    title:"sidebar.dashboard",
    path:"/",
    icon:<HomeOutlinedIcon/>,
    element: Dashboard
  },
  {
    type: ComponentItemType.title,
    title:"sidebar.admin.title",
  },
  {
    type: ComponentItemType.access,
    title:"sidebar.admin.profesional",
    path:"/profesionals",
    icon:<PeopleOutlinedIcon/>,
    element: Profesionals 
  },
];
