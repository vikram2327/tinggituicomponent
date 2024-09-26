import { AppBar } from '@mui/material';
import React from 'react';
import Footer from './Footer';

function FooterWrapper(props) {
    return (
        <AppBar position="static" sx={{ background: "#FFFFFF" }}>
            <Footer />
        </AppBar>
    );
}

export default FooterWrapper;