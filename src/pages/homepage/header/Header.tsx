import type { ReactElement } from "react";
import type { HeaderProps } from "./type";

import Typography from "@mui/material/Typography";

import Button from "~/components/button";

import { StyledHeaderWrapper } from "~/utils/styledComponents";

const Header = (props: HeaderProps): ReactElement => {
  const { generateProfile } = props;

  return (
    <StyledHeaderWrapper direction={"column"}>
      <Typography
        variant="h2"
        fontWeight={"bold"}
        color={"#fff"}
      >
        Tired of being alone? Let's find your match!!
      </Typography>
      <Button
        colorVariant="secondary"
        onClick={generateProfile}
      >
        <Typography
          variant="body1"
          fontWeight={"bold"}
          color={"#ff8fab"}
        >
          Find now!
        </Typography>
      </Button>
    </StyledHeaderWrapper>
  );
};

export default Header;
