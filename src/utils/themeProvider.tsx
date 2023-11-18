import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#414145",
            contrastText: "#FFF",
        },
        secondary: {
            main: "#FFF",
            contrastText: "#000",
        },
    },
    typography: {
        fontFamily: "Agbalumo, sans-serif",
        htmlFontSize: 14,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    margin: 0,
                },
                html: {
                    "@media (max-width:1366px)": {
                        fontSize: "12px",
                    },
                },
            },
        },
    },
});
