import React, { useContext, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import {Box,Drawer as MuiDrawer,AppBar as MuiAppBar,Grid,List, ListItem, ListItemText, ListItemButton,ListItemIcon,Menu,MenuItem,Link} from '@mui/material';
import { Collapse, Typography } from '@mui/material';

import './Sidebar.css';
import {  ExpandLess, ExpandMore } from '@mui/icons-material';
// import { associateSpotlightUrl, bankUrl, contactDetailUrl, deviceSignInUrl, documentUrl, educationUrl, employementUrl, familyDetailUrl, ipAddressUrl, officialDetailUrl, passwordUrl, personalDetailUrl, } from '../../_constant/urlConstData';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useTheme } from '@mui/material/styles';
import {useMediaQuery} from '@mui/material';
import FooterWrapper from '../Footer/FooterWrapper';
import HeaderWrapper from '../Header/HeaderWrapper';
import MyContext from '../MyContext';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    height: `calc(100vh - 0px - ${theme.spacing(9)})`,
    height: '100%',
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    borderRight: 0,
    // position: 'relative',
    top: 61,
    paddingRight: 15,
});

const closedMixin = (theme) => ({
    // height: `calc(100vh - ${theme.mixins.toolbar.minHeight}px - ${theme.spacing(9)})`,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    borderRight: 0,
    background: '#ffffff',
    top: 63,
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('xs')]: {
        width: `calc(${theme.spacing(0)} + 1px)`,
    },
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
    [theme.breakpoints.up('md')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
    [theme.breakpoints.up('lg')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => (prop !== 'open' || prop !== 'mobileOpen'),
})(({ theme, open, mobileOpen }) => ({
    // zIndex: theme.zIndex.drawer - 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...((open || mobileOpen) && {
        // width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => (prop !== 'open' || prop !== 'mobileOpen') })(
    ({ theme, open, mobileOpen }) => ({
        flexShrink: 0,
        whiteSpace: 'nowrap',
        zIndex: 2,
        boxSizing: 'border-box',
        ...((open || !mobileOpen) && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...((!open || mobileOpen) && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


export default function Sidebar({ children, ...props }) {
console.log('props',props)
    const [open, setOpen] = useState(true);
    // const { currentRoute } = useSelector(state => state.routing)
    const layoutContextData = useContext(MyContext);
    const currentRoute=layoutContextData?.currentRoute;
    // console.debug("Layout : Sidebar : layoutContextData : ", layoutContextData);

    const { window } = props;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [mobileOpen, setMobileOpen] = useState(isMobile);
    // const [selectedId, setSelectedId] = useState(([passwordUrl.list, ipAddressUrl.list, deviceSignInUrl.list].indexOf(window.location.pathname) != -1) ? 2 : 1);
    const [selectedId, setSelectedId] = useState(null);
    const [openMenu, setOpenMenu] = useState(true);
    const [anchorEl, setAnchorEl] = useState([null, null]);
    // const [openMenuBar, setOpenMenuBar] = useState(-1);
    // const openMenuBar = Boolean(anchorEl);
    const [itemsList, setItemsList] = useState([]);


    if(props.debug){
        console.debug("Sidebar : props : sidebarMenuItems",props.sidebarMenuItems);
        console.debug("Sidebar : itemsList",itemsList);
    }
    useEffect(() => {
        setItemsList(props.sidebarMenuItems);
    }, [props.sidebarMenuItems]);


    const handleClickListItem = (event, index) => {
        console.log({ event })
        let tempAnchorEl = [...anchorEl];
        tempAnchorEl[index] = event.currentTarget;
        setAnchorEl(tempAnchorEl);
    };

    const handleMenuItemClick = (event, index) => {
        // setSelectedIndex(index);
        let tempAnchorEl = [...anchorEl];
        tempAnchorEl[index] = null;
        setAnchorEl(tempAnchorEl);
    };

    const handleClose = () => {
        let tempAnchorEl = anchorEl.map(v => null);
        setAnchorEl(tempAnchorEl);
    };


    const handleDrawerOpen = () => {
        if (open === false) {
            setOpen(true);
        }
        else {
            setOpen(false);
        }
        console.log({ open })
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const handleListItemClick = (id) => {
        setOpenMenu(true); // Always open the clicked collapse
        setSelectedId(id);
    };

    const handleClick = (id, path) => {
        console.debug("Layout : Sidebar : handleClick",{ id, path })
        layoutContextData?.setCurrentRouteHandler(path);
        setSelectedId(id)
        setOpenMenu(!openMenu);
    };
    
    const handleClickSubMenu = (id, path) => {
        console.debug("Layout : Sidebar : handleClickSubMenu",{ id, path })
        layoutContextData?.setCurrentRouteHandler(path);
        setSelectedId(id)
        let tempAnchorEl = anchorEl.map(v => null);
        setAnchorEl(tempAnchorEl);
        // setOpenMenu(!openMenu);
    };

    const renderSubList = (item, subList) => (
        <Collapse in={item.id == selectedId && openMenu} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                {console.log({ subList, currentRoute })}
                {subList.map((subItem, index) => (<React.Fragment key={subItem.id}>
                    <ListItem disablePadding sx={{ display: 'block' }}
                        component={Link}
                        href={subItem.path}
                        onClick={() => handleClickSubMenu(subItem.id, subItem.path)}
                        //   onClick={(e) => handleListItemClick(e, item.path)}
                        className={(mobileOpen || open) ? "open-selected-tab" : "close-selected-tab"}
                        style={
                            currentRoute === subItem.path
                                ? {
                                    // background: '#DBEAFE',
                                    color: "#1D76FE"
                                    // boxShadow: "2px 3px 6px rgba(0, 0, 0, 0.3)",
                                }
                                : {
                                    color: "black"
                                }
                        }
                    >
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText  style={{ display: 'flex',marginLeft:'2.5rem'}} primary={<Typography variant="subtitle2">{subItem.label}</Typography>} />
                        </ListItemButton>
                    </ListItem>
                </React.Fragment>))}
            </List>
        </Collapse>
    );

    const isTrash=null;

    return (
        <Box>
            <Box sx={{ display: 'flex' }}>
               <HeaderWrapper 
                    mobileOpen={mobileOpen}
                    handleDrawerOpen={handleDrawerOpen}
                    handleDrawerToggle={handleDrawerToggle}
                    isTrash={isTrash}
                />

                <Drawer
                    className="sidebar-drawer"
                    variant={(window.innerWidth > 600) ? "permanent" : "temporary"}
                    open={(window.innerWidth > 600) ? open : mobileOpen}
                    onClose={(window.innerWidth > 600) ? handleDrawerOpen : handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        top: 0,
                        backgroundColor: "#ffffffbf",
                        '& .MuiDrawer-paper': { boxSizing: 'border-box' },
                    }}
                >
                    <List sx={{ textAlign: '-webkit-center' }}>
                        {itemsList?.map((item, index) => (
                            <React.Fragment key={'' + item.id + index}>
                                {open && item.subList ? (
                                    <ListItem key={item.id} disablePadding sx={{ display: 'block' }}
                                        component={Link}
                                        href={item.path}
                                        onClick={() => handleListItemClick(item.id)}
                                        className={(mobileOpen || open) ? "open-selected-tab" : "close-selected-tab"}
                                        style={selectedId == (index + 1) ? { color: "black", background: '#DBEAFE' } : { color: "black" }}
                                    >
                                        <ListItemButton>
                                            <ListItemIcon style={selectedId == (index + 1) ? { color: "#2563EB", } : { color: "black" }}>{item.icon}</ListItemIcon>
                                            <ListItemText primary={<Typography variant="subtitle1">{item.name}</Typography>} />
                                            {item.id == selectedId && openMenu ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemButton>
                                    </ListItem>
                                ) : !open && item.subList ? (
                                    <ListItem disablePadding sx={{ display: 'block' }}
                                        component={Link}
                                        href={item.path}
                                        onMouseEnter={(event) => handleClickListItem(event, index)}
                                        //   onClick={(e) => handleListItemClick(e, item.path)}
                                        className={(mobileOpen || open) ? "open-selected-tab" : "close-selected-tab"}
                                        style={selectedId == (index + 1) ? { color: "black", background: '#DBEAFE' } : { color: "black" }}
                                    >
                                        {console.debug("currentRoute", currentRoute)}
                                        {console.log("Second", { mobileOpen, open })}
                                        <ListItemButton>
                                            <ListItemIcon>{item.icon}</ListItemIcon>
                                        </ListItemButton>
                                    </ListItem>
                                ) : (
                                    <ListItem disablePadding sx={{ display: 'block' }}
                                        component={Link}
                                        href={item.path}
                                        onClick={() => handleClick(item.id, item.path)}
                                        //   onClick={(e) => handleListItemClick(e, item.path)}
                                        className={(mobileOpen || open) ? "open-selected-tab" : "close-selected-tab"}
                                        style={selectedId == (index + 1) ? { color: "black", background: '#DBEAFE' } : { color: "black" }}
                                    >
                                        <ListItemButton>
                                            <ListItemIcon style={selectedId == (index + 1) ? { color: "#2563EB", } : { color: "black" }}>{item.icon}</ListItemIcon>
                                            <ListItemText primary={<Typography variant="subtitle1">{item.name}</Typography>} />
                                        </ListItemButton>
                                    </ListItem>
                                )}
                                {open && item.subList && renderSubList(item, item.subList)}
                                {!open && item.subList && (<Menu
                                    anchorEl={anchorEl[index]}
                                    open={anchorEl[index]}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'lock-button',
                                        role: 'listbox',
                                    }}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                >
                                    {item.subList.map((option, i) => (
                                        <MenuItem
                                            key={'' + option.id + index}
                                            component={Link}
                                            href={option.path}
                                            selected={currentRoute === option.path}
                                            onClick={() => handleClickSubMenu(option.id, option.path)}
                                        >
                                            <ListItemText
                                                primary={<Typography variant="subtitle2">{option.label}</Typography>}
                                            />
                                        </MenuItem>
                                    ))}
                                </Menu>)}
                            </React.Fragment>

                        ))}
                    </List>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` }, pt: 8, pl: 2, pr: 2, background: '#EEF6FF', minHeight: '92vh', minWidth: 0 }}>
                    {children}
                </Box>
            </Box>
            {/* <Grid item xs={12}>
                <AppBar position="static" sx={{ background: "#FFFFFF" }}>
                    <Footer />
                </AppBar>
            </Grid> */}
              <Grid item sx={{sm: `calc(100% - ${drawerWidth}px)`,margin: '5px 0 5px'}}>
                    <FooterWrapper/>
            </Grid>
        </Box>
    );
}