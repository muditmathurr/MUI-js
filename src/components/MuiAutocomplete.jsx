import React, { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];

const MuiAutocomplete = () => {
  const [value, setValue] = useState(null);

console.log({value});
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(e,newValue) => setValue(newValue)}
        freeSolo
      />
    </Stack>
  );
};

export default MuiAutocomplete;
