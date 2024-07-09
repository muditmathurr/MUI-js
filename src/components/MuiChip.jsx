import { Avatar, Chip, Stack } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

const MuiChip = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="chip" color="primary" size="small" icon={<FaceIcon />} />
      <Chip
        label="chip outlined"
        color="secondary"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip label="Click" color="success" onClick={() => alert("clicked")} />
      <Chip
        label="Delete"
        color="error"
        onClick={() => alert("clicked")}
        onDelete={() => alert("delete handled called")}
      />
    </Stack>
  );
};

export default MuiChip;
