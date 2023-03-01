import { Typography, Stack, useTheme, Card, CardMedia, CardContent } from "@mui/material";
import { Box } from "@mui/system";
import { tokens, ThemeContextType } from "../theme";


interface StatsProps {
    value: number;
    title: string;
    icon: JSX.Element;
}
 
const StatsMedium = ({ value, title, icon }: StatsProps) => {
  const theme = useTheme();
  const colors = tokens(ThemeContextType[theme.palette.mode]);
  return (
    <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: 180,
                height: 80,
              },
            }}
          >
        <Card elevation={24} >
            <Stack direction='row' justifyContent="center"  alignItems="center">
                <CardMedia>
                    {icon}
                </CardMedia>
                <CardContent>
                    <Typography variant="h2" component="h4">{value}</Typography>
                    <Typography variant="caption" display="block" gutterBottom>{title}</Typography>
                </CardContent>
            </Stack>
        </Card>
    </Box>
  );
};

export default StatsMedium;
