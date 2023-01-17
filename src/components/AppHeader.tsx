import React, { useContext } from 'react'
import { useTranslation } from "react-i18next";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, ThemeContextType, tokens } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import I18nextSwitch from '../i18n/i18nSwitch';
import i18next, {Languages} from '../i18n/i18n';




const AppHeader: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(ThemeContextType[theme.palette.mode]);
  const colorMode = useContext(ColorModeContext);

  const handleI18NChange = () =>{
    if (i18next.language === Languages.es)
      i18next.changeLanguage(Languages.en);
    else
      i18next.changeLanguage(Languages.es);
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <div></div>
      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <I18nextSwitch sx={{ m: 1 }} defaultChecked onChange={handleI18NChange} />
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default AppHeader
