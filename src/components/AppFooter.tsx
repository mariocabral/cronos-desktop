import React, { useState, useEffect } from 'react';
import { Box } from "@mui/material";
import i18next from '../i18n/i18n';
import moment from 'moment';
import 'moment/dist/locale/es';


const AppFooter: React.FC = () => {
  
  const [currentTime, setCurrentTime] = useState('');

  setInterval(() => {
    var localLocale = moment();
    localLocale.locale(i18next.language);
    setCurrentTime(localLocale.format('LLLL'));
  }, 2000);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <div></div>
      {currentTime}
    </Box>
  )
}

export default React.memo(AppFooter)
