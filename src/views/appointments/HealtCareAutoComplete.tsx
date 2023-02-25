import React from 'react';
import { Autocomplete, TextField, CircularProgress, useTheme } from "@mui/material";
import { tokens, ThemeContextType } from "../../theme";
import { SvgIconComponent } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { HealtCareService } from '../../services/HealtCareService';
  
interface HealtCareAutoCompleteProps {
  onChange: (newValue: HealtCareItem | null) => void;
  value: HealtCareItem | null;
}

export interface HealtCareItem {
  name: string,
  id: string
}

const HealtCareAutoComplete = ({onChange, value}: HealtCareAutoCompleteProps) => {
  const theme = useTheme();
  const colors = tokens(ThemeContextType[theme.palette.mode]);
  const [open, setOpen] = React.useState(false);
  const [healtCareOptions, setHealtCareOptions] = React.useState<readonly HealtCareItem[]>([]);
  const loading = open && healtCareOptions.length === 0;
  const {t} = useTranslation();
  const label = t('views.appointments.modal.form.healtCare');
  const healtCareService = new HealtCareService();

  const setValue = (newValue: HealtCareItem | null) => {
    onChange(newValue);
  };

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      if (active) {
        healtCareService.getHealtCareNames()
        .then(values => setHealtCareOptions([...values]));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setHealtCareOptions([]);
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
      onChange={(event: React.SyntheticEvent, newValue: HealtCareItem | null) => {
        setValue(newValue);
      }}
      value={value}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={healtCareOptions}
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

export default HealtCareAutoComplete;
