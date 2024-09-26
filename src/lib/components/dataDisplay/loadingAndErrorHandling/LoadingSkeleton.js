import React from 'react';
import { Box, Skeleton } from '@mui/material';

function LoadingSkeleton({ type, props }) {

    let component = null;
    switch (type) {
        case "contentBody":

            component = (
                <Box>
                    <Skeleton variant="rectangular" height={534}
                        sx={{ mt: "1rem" }}
                    />
                </Box>
            );
            break;

        default:
            component = (
                <Box>
                    <Skeleton variant="rectangular" height={200}
                        sx={{ mt: "1rem" }}
                    />
                </Box>
            );
            break;
    }

    return component;
}

export default LoadingSkeleton;