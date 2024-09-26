import React, { useContext, useEffect, useRef, useState } from 'react';
import { Avatar, Badge, Box, Divider, IconButton, Link, Menu, MenuItem } from '@mui/material';
import { AccountCircle as AccountCircleIcon } from '@mui/icons-material';
import MyContext from '../MyContext';
// import AnimatedCoin from '../../../assets/images/animatedCoin.gif';

function HeaderProfile({ userList, ...props }) {
    const menuId = 'primary-search-account-menu';
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const data = useContext(MyContext);
    const buttonRef = useRef(null);

    const isMenuOpen = Boolean(anchorEl);

    console.debug("HeaderProfile : data : ", data);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (buttonRef.current && !buttonRef.current.contains(event.target) && anchorEl && !anchorEl.contains(event.target)) {
                handleMenuClose();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [anchorEl]);

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={isMenuOpen}
            onClose={handleMenuClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    width: '12rem',
                },
            }}
        >
            <MenuItem>
                <Box>
                    <Box>Welcome </Box>
                    <Box>
                        {data.loggedInUserData?.fName + " " + data.loggedInUserData?.lName}
                    </Box>
                </Box>
            </MenuItem>
            <Divider />
            <Link href="/logout">
                <MenuItem>
                    LOG OUT
                </MenuItem>
            </Link>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {/* <MenuItem>
                <IconButton size="small" color="inherit">
                    <Badge color="secondary">
                        <span className='coinSize'><img src={AnimatedCoin} alt="React Logo" /></span>
                        <span className='numericSize'>20</span>
                    </Badge>
                </IconButton>
                <p>Coins</p>
            </MenuItem> */}

            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                />
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    if (data.loggedInUserData) {
        return (
            <div>
                <IconButton
                    ref={buttonRef}
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                >
                    {data.loggedInUserData?.uAvatar !== "https://gatewayapi.eela.tech/media/?file=default.png" ?
                        <Avatar id="profile-icon" alt="user-avatar" src={data.loggedInUserData?.uAvatar} sx={{ width: 35, height: 35 }} />
                        :
                        <AccountCircleIcon />}
                </IconButton>
                {renderMenu}
                {renderMobileMenu}
            </div>
        );
    } else {
        return (
            <>
                Vikram
            </>
        );
    }
}

export default HeaderProfile;
