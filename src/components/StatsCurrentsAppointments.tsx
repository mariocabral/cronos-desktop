import { faClockRotateLeft, faSync } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography, Stack, useTheme, Card, CardMedia, CardContent, List, ListItemButton, ListItemIcon, ListItemText, Divider, ListItem, ListItemAvatar, Avatar } from "@mui/material";
import { Box } from "@mui/system";
import { tokens, ThemeContextType } from "./../theme";


const StatsCurrentsAppointments = () => {
  const theme = useTheme();
  const colors = tokens(ThemeContextType[theme.palette.mode]);
  return (
    <Card elevation={24} >
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItemButton component="a" href="#customized-list">
            <ListItemIcon sx={{ fontSize: 20 }}><FontAwesomeIcon icon={faClockRotateLeft} size='1x' color={colors.greenAccent[300]} /></ListItemIcon>
            <ListItemText
            sx={{ my: 0 }}
            primary="Turnos en proceso"
            primaryTypographyProps={{
                fontSize: 20,
                fontWeight: 'medium',
                letterSpacing: 0,
            }}
            />
        </ListItemButton>
        <Divider />
            {[0, 1, 2, 3].map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                <ListItem
                    key={value}
                    disablePadding
                >
                    <ListItemButton>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: colors.greenAccent[300] }} variant="rounded">
                        <FontAwesomeIcon icon={faSync} spin={true}/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText id={labelId} primary={` <nombre>  <profesional> <sala>`} />
                    </ListItemButton>
                </ListItem>
                );
            })}
            </List>
        </Card>
  );
};

export default StatsCurrentsAppointments;
