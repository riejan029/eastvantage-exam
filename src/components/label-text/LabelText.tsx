import type { ReactElement } from "react";
import type { LabelTextProps } from "./types";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const LabelText = (props: LabelTextProps): ReactElement => {
  const { label, text } = props;
  return (
    <Stack
      direction={"row"}
      display={"flex"}
      alignItems={"center"}
      spacing={2}
    >
      <Typography
        variant="subtitle1"
        color={"#ff8fab"}
      >
        {label}:
      </Typography>
      <Typography
        variant="subtitle2"
        color={"primary.main"}
      >
        {text}
      </Typography>
    </Stack>
  );
};

export default LabelText;
