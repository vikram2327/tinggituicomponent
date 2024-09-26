import React from 'react';
import { Alert, Box } from '@mui/material';
function ErrorOutput({ errorMessage, props }) {
    if (errorMessage) {
        return (
            <Box>
                <Alert severity="error">{errorMessage?.message ? errorMessage?.message : "Something Went Wrong"}</Alert>
            </Box>
        );
    } else {
        return (
            <Box>
                <Alert severity="error">{"Something Went Wrong"}</Alert>
            </Box>
        );
    }
}

export default ErrorOutput;