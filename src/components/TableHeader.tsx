import React from 'react';
import { Box, Button, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { tokens, ThemeContextType } from "../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { SvgIconComponent } from "@mui/icons-material";

interface HeaderProfesionalProps {
  title: string;
  subtitle: string;
  icon: SvgIconComponent;
}




const ProfesionalHeader = ({ title, subtitle, icon }: HeaderProfesionalProps) => {
  const theme = useTheme();
  const colors = tokens(ThemeContextType[theme.palette.mode]);
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Stack direction="row" spacing={2}>
          <div style={{ fontSize: '300%' , width: 20, height: 20}}>
            {React.createElement(icon, {fontSize: '300%', width: 60, height: 60})}
          </div>
          <Typography
            variant="h1"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            
            
            {title}
            
          </Typography>
          </Stack>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
      </Box>
  </Box>
  );
};

export default ProfesionalHeader;
