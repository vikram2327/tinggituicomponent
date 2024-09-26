import React from 'react';
import LoadingSkeleton from './LoadingSkeleton';
import ErrorOutput from './ErrorOutput';
import { Box } from '@mui/material';

function LoadingAndErrorHandling({ type, isLoading, isError, errorMessage, ...props }) {

    if (isLoading) {
        return <LoadingSkeleton type={type} />;
    }

    if (errorMessage) {
        return <ErrorOutput errorMessage={errorMessage} />;
    }

    return (
        <Box>
            {props?.children}
        </Box>
    );
}

export default LoadingAndErrorHandling;