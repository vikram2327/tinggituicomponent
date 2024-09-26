import React from 'react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import Header from './Header';

function HeaderWrapper(props) {
    return (
        <AppBar position="fixed" open={props.mobileOpen} sx={{ background: "#EEF6FF", boxShadow: 'none' }}>
            <Toolbar>
                <IconButton
                    color="black"
                    aria-label="open drawer"
                    onClick={(window.innerWidth > 1024) ? props.handleDrawerOpen : props.handleDrawerToggle}
                    edge="start"
                    sx={{
                        mb:props.isTrash ? '2rem !important' : '',
                        // marginBottom: { xs: '2rem', sm: '2rem' },
                        // position:'fixed',
                        marginRight: 0,
                        ...(props.open),
                        color: '#000000',
                        display: { xs: 'block', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box' },
                    }}
                >
                    {/* <MenuIcon /> */}
                    <MenuOpenIcon />
                </IconButton>
                <Header />
            </Toolbar>
        </AppBar>
    );
}

export default HeaderWrapper;