import React from 'react';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { selectProfesional, setCurrentProfesional, showProfesionalModal, showProfesionalDeleteModal, setModalOperation, updateSearch } from '../../state/reducers/profesionalReducer';
import { Operations } from '../../state/models/ProfesionalState';
import { useTranslation } from "react-i18next";


const Profesionals: React.FC = () => {
  return (
    <>
      TBD
    </>
  )
}

export default Profesionals
