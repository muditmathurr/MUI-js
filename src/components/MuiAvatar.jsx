import { Avatar, AvatarGroup, Stack } from "@mui/material";
import React from "react";

function MuiAvatar() {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "primary.light" }}>CK</Avatar>
      </Stack>

      <Stack direction="row" spacing={1}>
        <AvatarGroup >
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "primary.light" }}>CK</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/51.jpg"
            alt="Jane Doe"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/lego/5.jpg"
            alt="Jane Doe"
          />
        </AvatarGroup>
      </Stack>

      <Stack direction="row" spacing={1}>
        <Avatar
          variant="square"
          sx={{ bgcolor: "primary.light", width: "48px", height: "48px" }}
        >
          BW
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: "primary.light", width: "48px", height: "48px" }}
        >
          CK
        </Avatar>
      </Stack>
    </Stack>
  );
}

export default MuiAvatar;
