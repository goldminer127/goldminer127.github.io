import { createTheme, responsiveFontSizes } from "@mui/material";

const appTheme = responsiveFontSizes(
    createTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#000000'
            }
        },
        typography: {
            fontFamily:
              "Cascadia Code, sans-serif",
            h1: { fontWeight: 800 },
            h2: { fontWeight: 800 },
            h3: { fontWeight: 800 },
            h4: {
              fontWeight: 700
            },
            h5: {
              fontWeight: 700
            },
            h6: {
              fontWeight: 700
            }
          }
    })
)