import React, { useState } from 'react';
import { Badge, IconButton } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function HeaderNotification(props) {

    const [anchorE2, setAnchorE2] = useState(null);
    const open = Boolean(anchorE2);


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
    return (
        <IconButton
            size="large"
            color="inherit"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
        // onClick={handleClick1}
        >
            <Badge color="error">
                <NotificationsActiveIcon />
            </Badge>
        </IconButton>
    );
}

export default HeaderNotification;