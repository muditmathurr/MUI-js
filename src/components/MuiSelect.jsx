import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

function MuiSelect() {
  const [countries, setCountries] = useState([]);

  function handleChange(e) {
    const value = e.target.value
    setCountries(typeof value === 'string' ? value.split(','): value);
  }

  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true
        }}
        color="secondary"
        size="small"
        helperText="Please select your country"
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">United State of America</MenuItem>
        <MenuItem value="AUS">Australia</MenuItem>
      </TextField>
    </Box>
  );
}

export default MuiSelect;
