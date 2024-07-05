import React, { useState } from "react";
import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material/";

import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const MuiButton = () => {
  const [formats, setFormats] = useState([]);

  function handleFormatChange(_event, updateFormats) {
    setFormats(updateFormats);
  }

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Visit Google
        </Button>
        <Button variant="contained">Button 2</Button>
        <Button variant="outlined">Button 3</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack spacing={2} display="block" direction="row">
        <Button size="small" variant="contained" color="secondary">
          Small
        </Button>
        <Button size="medium" variant="contained" color="warning">
          Medium
        </Button>
        <Button size="large" variant="contained" color="error">
          Large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          color="secondary"
          size="small"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert("clicked left button")}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
          size="small"
          color="success"
        >
          <ToggleButton value="bold" aria-label="bold"> 
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
