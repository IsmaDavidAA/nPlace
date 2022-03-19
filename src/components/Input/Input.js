import * as React from "react";
import { Box, TextField } from "@mui/material";
import { IconFactory } from "../../factories/IconFactory";

export default function InputWithIcon({ label }) {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <IconFactory
        icon={label}
        sx={{ color: "action.active", mr: 1, my: 0.5 }}
      />
      <TextField id="input-with-sx" label={label} variant="standard" />
    </Box>
  );
}
