import { Badge, Box, IconButton, ListItem, ListItemText, Menu, MenuItem, Typography } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function HeaderAppStore({...props}) {

    const [anchorE3, setAnchorE3] = useState(null);
    const [anchorE2, setAnchorE2] = useState(null);
    const open2 = Boolean(anchorE3);
    const open = Boolean(anchorE2);
    const ITEM_HEIGHT = 48;
    const handleClose = () => {
        setAnchorE2(null);
    };

    const handleClick2 = (event) => {
        setAnchorE3(event.currentTarget);
    };

    const handleClose2 = () => {
        setAnchorE3(null);
    };

    return (
        <div>
          <IconButton
                                    size="large"
                                    color="inherit"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                // onClick={handleClick1}
                                >
                                    <Badge color="error">
                                    <AppsIcon />
                                    </Badge>
                                </IconButton>
                                <Menu
                                                                    // className='menu-size'
                                    id="basic-menu"
                                    sx={{ top: '-20px', left: '-80px' }}
                                    anchorEl={anchorE2}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    {/*3 dot menu is defined here*/}
                                    <Box>
                                        <Box>
                                            <ListItem secondaryAction={
                                                <Box>
                                                    <IconButton
                                                        aria-label="more"
                                                        id="long-button"
                                                        aria-controls={open ? 'long-menu' : undefined}
                                                        aria-expanded={open ? 'true' : undefined}
                                                        aria-haspopup="true"
                                                        onClick={handleClick2}
                                                    >
                                                        <MoreVertIcon />
                                                    </IconButton>
                                                    <Menu
                                                        id="long-menu"
                                                        sx={{ left: '-100px' }}
                                                        anchorEl={anchorE3}
                                                        open={open2}
                                                        onClose={handleClose2}
                                                        PaperProps={{
                                                            style: {
                                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                                width: '20ch',
                                                            },
                                                        }}
                                                    >
                                                        <MenuItem> Mark all as read</MenuItem>
                                                    </Menu>
                                                </Box>}>
                                                <ListItemText primary={<Typography variant='h6'>Notifications (7)</Typography>} secondary={<Typography variant="body2">You have 2 unread messages</Typography>} />
                                            </ListItem>
                                        </Box>
                                        {/* <Box className='table-height' style={{ height: '20rem', overflow: 'auto', }}>
                                            {NotificationData.map((key, index) => {
                                                return (
                                                    <List dense={dense} key={index} sx={{ padding: '0rem', cursor: 'pointer' }} >
                                                        <ListItem sx={{ ':hover': { bgcolor: 'var(--color-lightblue)', }, }} secondaryAction={<ListItemText edge="end" primary={<Typography variant="caption" color='var(--color-dashboard-tasklist)' fontWeight='var(--font-weight-5)'>5m ago</Typography>} />}>
                                                            <ListItemAvatar>
                                                                <IconButton>
                                                                    <img src={key.icon} alt="React Logo" />
                                                                </IconButton>
                                                            </ListItemAvatar>
                                                            <ListItemText sx={{ pr: 'var(--padding-tasklist-element5)' }} primary={<Typography variant="subtitle2">{key.primary}</Typography>} secondary={<Typography variant="body2">{key.secondary}</Typography>} />
                                                        </ListItem>
                                                        <Divider />
                                                    </List>
                                                )
                                            })}
                                        </Box> */}

                                    </Box>
                                </Menu>   
        </div>
    );
}

export default HeaderAppStore;