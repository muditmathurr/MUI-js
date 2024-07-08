import { Link, Stack, Typography } from "@mui/material";
import React from "react";

const MuiLink = () => {
  return (
    <Stack spacing={2} direction="column" m={4}>
      <Typography variant="h5">
        <Link href="#" underline="none">
          Primary Link
        </Link>
        <Link href="#" color="secondary" underline="hover">
          Secondary Link
        </Link>
      </Typography>
    </Stack>
  );
};
export default MuiLink;
