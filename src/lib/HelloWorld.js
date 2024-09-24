// src/lib/HelloWorld.js
import React from 'react';
import Box from '@mui/material/Box';

const HelloWorld = () => {
  return (
    <Box
      sx={{
        p: 3,
        textAlign: 'center',
        bgcolor: 'primary.main',
        color: 'white',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      Hello, World!
    </Box>
  );
};

export default HelloWorld;
