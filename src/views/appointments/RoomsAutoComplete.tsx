import React from 'react';
import { Autocomplete, TextField, CircularProgress, useTheme } from "@mui/material";
import { tokens, ThemeContextType } from "../../theme";
import { SvgIconComponent } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { RoomsService } from '../../services/RoomsService';
  
interface RoomsAutoCompleteProps {
  onChange: (newValue: RoomsItem | null) => void;
}

export interface RoomsItem {
  name: string,
  id: string
}

const RoomsAutoComplete = ({onChange}: RoomsAutoCompleteProps) => {
  const theme = useTheme();
  const colors = tokens(ThemeContextType[theme.palette.mode]);
  const [open, setOpen] = React.useState(false);
  const [roomsOptions, setRoomsOptions] = React.useState<readonly RoomsItem[]>([]);
  const loading = open && roomsOptions.length === 0;
  const {t} = useTranslation();
  const label = t('views.appointments.modal.form.rooms');
  const roomsService = new RoomsService();

  const setValue = (newValue: RoomsItem | null) => {
    onChange(newValue);
  };

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      if (active) {
        roomsService.getRoomsNames()
        .then(values => setRoomsOptions([...values]));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setRoomsOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="Rooms-asynchronous-demo"
      sx={{ width: '100%' }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={(event: React.SyntheticEvent, newValue: RoomsItem | null) => {
        setValue(newValue);
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={roomsOptions}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};

export default RoomsAutoComplete;
