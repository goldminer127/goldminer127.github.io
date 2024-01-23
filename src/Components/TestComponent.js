import { ThemeProvider, styled } from '@mui/material/styles';
import { testTheme1, testTheme2 } from './TestTheme';
import { Box } from '@mui/material';
import TestComponent2 from './TestComponent2';

function TestComponent() {
    return(
        <ThemeProvider theme={testTheme1}>
            <TestComponent2></TestComponent2>
        </ThemeProvider>
    );
}
export default TestComponent;