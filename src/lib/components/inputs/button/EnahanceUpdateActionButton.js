import { Box, Button, CircularProgress } from '@mui/material';
import React from 'react';

function EnahanceUpdateActionButton({ updatingStatus, loadingStatus, onCliCkHandler,startIcon, variant, ...props }) {
    return (
        <Box sx={{
            position: 'relative'
        }}>
            <Button disabled={loadingStatus || updatingStatus} onClick={onCliCkHandler} variant={variant} startIcon={startIcon} {...props}>
                {props?.children}
            </Button>
            {updatingStatus && (
                <CircularProgress
                    size={10}
                    sx={{
                        // color: green[500],
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-6px',
                        marginLeft: '-6px',
                    }}
                />
            )}

        </Box>
    );
}

export default EnahanceUpdateActionButton;