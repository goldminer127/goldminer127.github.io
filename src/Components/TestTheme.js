import { createTheme } from "@mui/material/styles";

const testTheme1 = createTheme({
    palette: {
        primary: {
            main: '#FCBA03',
        }
    }
})

const testTheme2 = createTheme({
    palette: {
        primary: {
            main: '#FC0349',
        }
    }
})

export {testTheme1 , testTheme2};