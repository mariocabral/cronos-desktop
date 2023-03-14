import React from 'react';
import { Autocomplete, TextField, CircularProgress, useTheme } from "@mui/material";
import { tokens, ThemeContextType } from "../../theme";
import { SvgIconComponent } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { HealthcareService } from '../../services/HealthcareService';
  
interface HealthcareAutoCompleteProps {
  onChange: (newValue: HealthcareItem[] | null) => void;
  value: HealthcareItem[] | undefined;
}

export interface HealthcareItem {
  name: string,
  id: string
}

const HealthcareAutoComplete = ({onChange, value}: HealthcareAutoCompleteProps) => {
  const theme = useTheme();
  const colors = tokens(ThemeContextType[theme.palette.mode]);
  const [open, setOpen] = React.useState(false);
  const [healthcareOptions, setHealthcareOptions] = React.useState<readonly HealthcareItem[]>([]);
  const loading = open && healthcareOptions.length === 0;
  const {t} = useTranslation();
  const label = t('views.appointments.modal.form.healthcare');
  const healthcareService = new HealthcareService();

  const setValue = (newValue: HealthcareItem[] | null) => {
    onChange(newValue);
  };

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      if (active) {
        healthcareService.getHealthcareNames()
        .then(values => setHealthcareOptions([...values]));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setHealthcareOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="customer-asynchronous-demo"
      sx={{ width: '100%' }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={(event: React.SyntheticEvent, newValue: HealthcareItem[] | null) => {
        setValue(newValue);
      }}
      value={value}
      multiple={true}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={healthcareOptions}
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

export default HealthcareAutoComplete;
