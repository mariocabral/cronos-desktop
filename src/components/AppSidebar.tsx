import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme, Avatar } from "@mui/material";
import logoWhite from './../assets/brand/logo-white.svg';
import { Link } from "react-router-dom";
import { tokens, ThemeContextType } from '../theme';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {navegationItems, NavigationRouteItem, ComponentItemType} from '../routes';
import 'react-pro-sidebar/dist/css/styles.css';
import { useTranslation } from "react-i18next";


const AppSidebar: React.FC = () =>  {
  const {t} = useTranslation();
  const theme = useTheme();
  const colors = tokens(ThemeContextType[theme.palette.mode]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState(t("sidebar.dashboard"));
  
  return(
      <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px" >
                <div></div>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Avatar alt="Crono med" src={logoWhite}  sx={{ width: "100px", height: "100px" }}/>
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {t("sidebar.title")}
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                {t("sidebar.description")}
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            { navegationItems.map((item: NavigationRouteItem) => {
                const title = t(item.title);
                if (item.type === ComponentItemType.title){
                  return (
                    <Typography variant="h6" color={colors.grey[300]} sx={{ m: "15px 0 5px 20px" }} >
                      { title }
                    </Typography>
                  );
                } else {
                  return (
                    <MenuItem
                      active={selected === title}
                      style={{
                        color: colors.grey[100],
                      }}
                      onClick={() => setSelected(title)}
                      icon={item.icon}
                    >
                      <Typography>{title}</Typography>
                      <Link to={item.path ? item.path : '/' } />
                    </MenuItem>
                    )
                }
              })}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
    
    );
}

export default React.memo(AppSidebar)
