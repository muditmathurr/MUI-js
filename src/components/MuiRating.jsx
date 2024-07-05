import { Rating, Stack } from "@mui/material";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MuiRating = () => {
  const [value, setValue] = useState(null);
  console.log({ value });
  function handleChange(e, newVal) {
    setValue(newVal);
  }

  return (
    <Stack spacing={3}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error"/>}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit"/>}
      />
    </Stack>
  );
};

export default MuiRating;
