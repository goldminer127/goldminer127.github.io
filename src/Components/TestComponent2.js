import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function TestComponent2()
{
    const theme = useTheme();
    return (
        <Box sx={{width: "100%", height: "100%", background: theme.palette.primary.main}}>
            Theme thing
        </Box>
    )
}
export default TestComponent2;