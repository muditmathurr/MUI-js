import { Stack, TextField, InputAdornment } from "@mui/material";
import React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';

const MuiTextField = () => {
  
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="First Name" variant="outlined" />
        <TextField label="Middle Name" variant="filled" />
        <TextField label="Last Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Small Secondary"
          color="secondary"
          size="small"
        ></TextField>
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Username" required />
        <TextField
          label="Password"
          required
          type="password"
          helperText="Do not share password with anyone"
          
          InputProps={{
            startAdornment: <InputAdornment position="start"><VisibilityIcon/></InputAdornment>,
          }} />
        
        <TextField label="read only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField label="Weight"
        InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }} />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
