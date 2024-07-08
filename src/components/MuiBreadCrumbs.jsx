import React from "react";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

const MuiBreadCrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small"/>}>
        <Link href="#" underline="hover">Home</Link>
        <Link href="#" underline="hover">Catelog</Link>
        <Link href="#" underline="hover">Accessories</Link>
        <Typography color='text.primary'>Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadCrumbs;
