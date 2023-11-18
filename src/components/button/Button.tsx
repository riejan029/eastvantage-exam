import type { PropsWithChildren, ReactElement } from "react";
import { type ButtonProps, Button as MuiButton, styled } from "@mui/material";

type ColorVariant = "primary" | "secondary";
interface StyledButtonProps extends ButtonProps, PropsWithChildren {
  colorVariant: ColorVariant;
}

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (props: string) => !props.startsWith("$"),
})<{ $colorVariant: ColorVariant }>(({ $colorVariant, theme }) => {
  const colorsMap: Record<ColorVariant, string> = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
  };

  const textColorMap: Record<ColorVariant, string> = {
    primary: theme.palette.primary.contrastText,
    secondary: theme.palette.secondary.contrastText,
  };

  return {
    backgroundColor: colorsMap[$colorVariant],
    color: textColorMap[$colorVariant],
    textTransform: "none",
    paddingLeft: "20px",
    paddingRight: "20px",
    width: "8rem",
    height: "8rem",
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: colorsMap[$colorVariant],
      opacity: 0.7,
    },
  };
});

const Button = (props: StyledButtonProps): ReactElement => {
  const { colorVariant, children, ...rest } = props;
  return (
    <StyledButton
      $colorVariant={colorVariant}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
