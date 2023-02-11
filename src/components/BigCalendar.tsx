import { Calendar } from 'react-big-calendar';
import { styled } from '@mui/material/styles';

const BigCalendar = styled(Calendar)(({ theme }) => ({

    '.rbc-today': {
        backgroundColor: theme.palette.mode === 'dark' ? '#1F2A40' : '#f2f0f0',
      },
    '.rbc-toolbar button': {
        color: theme.palette.mode === 'dark' ? '#d0d1d5' : '#040509',
        display: 'inline-block',
        margin: 0,
        textAlign: 'center',
        verticalAlign: 'middle',
        background: 'none',
        backgroundImage: 'none',
        border: '1px solid #ccc',
        padding: '0.375rem 1rem',
        borderRadius: '4px',
        lineHeight: 'normal',
        whiteSpace: 'nowrap',
      }
}));
  

export default BigCalendar;

