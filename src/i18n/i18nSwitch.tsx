import { Switch } from "@mui/material";

import { styled } from '@mui/material/styles';

const I18nextSwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          'border-radius': '30px',
          backgroundImage: `url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='3.75 0 15 15'%3E%3Cpath fill='%23FFFFFF' d='M0 0h22.5v15H0V0z'/%3E%3Cpath fill='%23D03433' d='M0 0h22.5v4H0V0z M0 11h22.5v4H0V11z'/%3E%3Cpath fill='%23FBCA46' d='M0 4h22.5v7H0V4z'/%3E%3Cpath fill='%23FFFFFF' d='M7.8 7h1v0.5h-1V7z'/%3E%3Cpath fill='%23A41517' d='M7.2 8.5C7.2 8.8 7.5 9 7.8 9c0.3 0 0.6-0.2 0.6-0.5L8.5 7H7.1C7.1 7 7.2 8.5 7.2 8.5z M6.6 7c0-0.3 0.2-0.5 0.4-0.5c0 0 0 0 0 0h1.5C8.8 6.5 9 6.7 9 6.9C9 7 9 7 9 7L8.9 8.5c-0.1 0.6-0.5 1-1.1 1c-0.6 0-1-0.4-1.1-1L6.6 7L6.6 7z'/%3E%3Cpath fill='%23A41517' d='M6.8 7.5h2V8H8.3L7.8 9L7.3 8H6.8V7.5z M5.3 6h1v3.5h-1V6z M9.3 6h1v3.5h-1V6z M6.8 5.5C6.8 5.2 7 5 7.3 5h1c0.3 0 0.5 0.2 0.5 0.5v0.2C8.8 5.9 8.7 6 8.5 6c0 0 0 0 0 0H7C6.9 6 6.8 5.9 6.8 5.8c0 0 0 0 0 0V5.5z'/%3E%3C/svg%3E");`,
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        'border-radius': '30px',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='85.333 85.333 341.333 341.333'%3E%3Crect y='85.333' fill='%23FFFFFF' width='512' height='341.337'/%3E%3Cpolygon fill='%23D80027' points='288 85.33 224 85.33 224 223.996 0 223.996 0 287.996 224 287.996 224 426.662 288 426.662 288 287.996 512 287.996 512 223.996 288 223.996 '/%3E%3Cg%3E%3Cpolygon fill='%230052B4' points='393.785 315.358 512 381.034 512 315.358 '/%3E%3Cpolygon fill='%230052B4' points='311.652 315.358 512 426.662 512 395.188 368.307 315.358 '/%3E%3Cpolygon fill='%230052B4' points='458.634 426.662 311.652 344.998 311.652 426.662 '/%3E%3C/g%3E%3Cpolygon fill='%23FFFFFF' points='311.652 315.358 512 426.662 512 395.188 368.307 315.358 '/%3E%3Cpolygon fill='%23D80027' points='311.652 315.358 512 426.662 512 395.188 368.307 315.358 '/%3E%3Cg%3E%3Cpolygon fill='%230052B4' points='90.341 315.356 0 365.546 0 315.356 '/%3E%3Cpolygon fill='%230052B4' points='200.348 329.51 200.348 426.661 25.491 426.661 '/%3E%3C/g%3E%3Cpolygon fill='%23D80027' points='143.693 315.358 0 395.188 0 426.662 0 426.662 200.348 315.358 '/%3E%3Cg%3E%3Cpolygon fill='%230052B4' points='118.215 196.634 0 130.958 0 196.634 '/%3E%3Cpolygon fill='%230052B4' points='200.348 196.634 0 85.33 0 116.804 143.693 196.634 '/%3E%3Cpolygon fill='%230052B4' points='53.366 85.33 200.348 166.994 200.348 85.33 '/%3E%3C/g%3E%3Cpolygon fill='%23FFFFFF' points='200.348 196.634 0 85.33 0 116.804 143.693 196.634 '/%3E%3Cpolygon fill='%23D80027' points='200.348 196.634 0 85.33 0 116.804 143.693 196.634 '/%3E%3Cg%3E%3Cpolygon fill='%230052B4' points='421.659 196.636 512 146.446 512 196.636 '/%3E%3Cpolygon fill='%230052B4' points='311.652 182.482 311.652 85.331 486.509 85.331 '/%3E%3C/g%3E%3Cpolygon fill='%23D80027' points='368.307 196.634 512 116.804 512 85.33 512 85.33 311.652 196.634 '/%3E%3C/svg%3E");`,
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));
  

export default I18nextSwitch;