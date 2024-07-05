import React from "react";
import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

function MuiSwitch() {
  const [checked, setChecked] = useState(false);
  console.log({ checked });
  function handleChange(e) {
    setChecked(e.target.checked);
  }

  return (
    <Box>
      <FormControlLabel
        label="Dark mode"
        control={<Switch checked={checked} onChange={handleChange} 
        color="error"
        size="small"
        />}
      />
    </Box>
  );
}

export default MuiSwitch;
