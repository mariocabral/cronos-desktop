import React from 'react';
import { Autocomplete, TextField, CircularProgress, useTheme } from "@mui/material";
import { tokens, ThemeContextType } from "../../theme";
import { SvgIconComponent } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { CustomerService } from '../../services/CustomerService';
  
interface CustomerAutoCompleteProps {
  onChange: (newValue: CustomerItem | null) => void;
}

export interface CustomerItem {
  name: string,
  id: string
}

const CustomerAutoComplete = ({onChange}: CustomerAutoCompleteProps) => {
  const theme = useTheme();
  const colors = tokens(ThemeContextType[theme.palette.mode]);
  const [open, setOpen] = React.useState(false);
  const [customerOptions, setCustomerOptions] = React.useState<readonly CustomerItem[]>([]);
  const loading = open && customerOptions.length === 0;
  const {t} = useTranslation();
  const label = t('views.appointments.modal.form.customer');
  const customerService = new CustomerService();

  const setValue = (newValue: CustomerItem | null) => {
    onChange(newValue);
  };

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      if (active) {
        customerService.getCustomerNames()
        .then(values => setCustomerOptions([...values]));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setCustomerOptions([]);
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
      onChange={(event: React.SyntheticEvent, newValue: CustomerItem | null) => {
        setValue(newValue);
      }}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      getOptionLabel={(option) => option.name}
      options={customerOptions}
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

export default CustomerAutoComplete;
