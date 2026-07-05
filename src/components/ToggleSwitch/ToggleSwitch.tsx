import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export interface ToggleSwitchProps {
  label?: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}

export default function ToggleSwitch({
  label = 'Activar',
  defaultChecked = false,
  onChange,
  color = 'primary',
}: ToggleSwitchProps) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setChecked(newChecked);

    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={handleChange}
          data-testid="toggle-switch"
          color={color}
        />
      }
      label={label}
    />
  );
}
