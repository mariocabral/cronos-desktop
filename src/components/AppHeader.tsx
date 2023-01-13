import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from './../state/hooks';
import { useTranslation } from "react-i18next";

const AppHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const {t} = useTranslation();

  return (
    <div></div>
  )
}

export default AppHeader
