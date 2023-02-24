import React from 'react';
import { Autocomplete, TextField, CircularProgress, useTheme } from "@mui/material";
import { tokens, ThemeContextType } from "../../theme";
import { useTranslation } from "react-i18next";
  
interface CustomerAutoCompleteProps {
  onChange: (newValue: string ) => void;
}

const RepeatAutoComplete = ({onChange}: CustomerAutoCompleteProps) => {
  const theme = useTheme();
  const colors = tokens(ThemeContextType[theme.palette.mode]);
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly string[]>([]);
  const loading = open && options.length === 0;
  const {t} = useTranslation();
  const label = t('views.appointments.modal.form.repeat');
  const defaultValue = t('views.appointments.repeatModes.notRepeat');

  const setValue = (newValue: string | null) => {
    onChange(newValue ? newValue : defaultValue);
  };

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      if (active) {
        setOptions([
            t('views.appointments.repeatModes.notRepeat'),
            t('views.appointments.repeatModes.wekday'),
            t('views.appointments.repeatModes.daily'),
            t('views.appointments.repeatModes.weekly'),
            t('views.appointments.repeatModes.monthly'),
            t('views.appointments.repeatModes.yearly')
        ]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="repeat-asynchronous-demo"
      sx={{ width: '100%' }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={(event: React.SyntheticEvent, newValue: string | null) => {
        setValue(newValue);
      }}
      value={defaultValue}
      isOptionEqualToValue={(option, value) => option === value}
      options={options}
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

export default RepeatAutoComplete;
