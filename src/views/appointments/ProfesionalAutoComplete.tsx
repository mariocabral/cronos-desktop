import React from 'react';
import { Autocomplete, TextField, CircularProgress, useTheme } from "@mui/material";
import { tokens, ThemeContextType } from "../../theme";
import { SvgIconComponent } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { ProfesionalService } from '../../services/ProfesionalService';
  
interface ProfesionalAutoCompleteProps {
  onChange: (newValue: ProfesionalItem | null) => void;
}

export interface ProfesionalItem {
  name: string,
  id: string
}

const ProfesionalAutoComplete = ({onChange}: ProfesionalAutoCompleteProps) => {
  const theme = useTheme();
  const colors = tokens(ThemeContextType[theme.palette.mode]);
  const [open, setOpen] = React.useState(false);
  const [profesionalOptions, setProfesionalOptions] = React.useState<readonly ProfesionalItem[]>([]);
  const loading = open && profesionalOptions.length === 0;
  const {t} = useTranslation();
  const label = t('views.appointments.modal.form.profesional');
  const profesionalService = new ProfesionalService();

  const setValue = (newValue: ProfesionalItem | null) => {
    onChange(newValue);
  };

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      if (active) {
        profesionalService.getProfesionalsNames()
        .then(values => setProfesionalOptions([...values]));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setProfesionalOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="profesional-asynchronous-demo"
      sx={{ width: '100%' }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={(event: React.SyntheticEvent, newValue: ProfesionalItem | null) => {
        setValue(newValue);
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={profesionalOptions}
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

export default ProfesionalAutoComplete;
