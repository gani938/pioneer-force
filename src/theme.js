import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#e51937', // Define primary color
        },
        secondary: {
            main: '#f9a61d', // Define secondary color
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        // h1: {
        //     fontSize: '2rem',
        //     fontWeight: 700,
        // },
        // // Add other typography customizations
    },
});

export default theme;
