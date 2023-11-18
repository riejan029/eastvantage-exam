import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import styled from "@mui/material/styles/styled";

export const MainWrapper = styled(Grid)(({ theme }) => ({
  background: theme.palette.primary.contrastText,
  backgroundImage: "linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)",
  margin: 0,
  flexWrap: "nowrap",
  display: "flex",
}));

export const StyledHeaderWrapper = styled(Stack)(() => ({
  justifyContent: "center",
  gap: 50,
  alignItems: "center",
  padding: "2%",
  height: "100vh",
  width: "50vw",
}));

export const ContentMainWrapper = styled(Stack)(() => ({
  justifyContent: "center",
  width: "50vw",
  padding: "0 6%",
}));

export const ContentWrapper = styled(Stack)(() => ({
  borderRadius: "20px",
  backgroundColor: "#fff8fa",
  padding: "7%",
  flexWrap: "wrap",
  height: "85vh",
}));

export const ContentHeader = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "20px",
}));

export const StyledImage = styled("img")(() => ({
  borderRadius: "50%",
  border: "5px solid #ff8fab",
  height: "150px",
  width: "150px",
}));
