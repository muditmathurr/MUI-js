import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

const MuiBottomNavigation = () => {
  return (
    <BottomNavigation sx={{ width: "100%", position: "absolute", bottom: 0 }}>
      <BottomNavigationAction label="Home" icon={<HomeIcon color="primary"/>} />
      <BottomNavigationAction label="Favorite" icon={<FavoriteIcon color="error" />} />
      <BottomNavigationAction label="Person" icon={<PersonIcon color="primary" />} />
    </BottomNavigation>
  );
};

export default MuiBottomNavigation;
