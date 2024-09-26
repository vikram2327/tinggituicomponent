import * as React from 'react';
import './Header.css';
import { styled, AppBar, Box, Toolbar, Grid, } from '@mui/material';
import HeaderLogo from './HeaderLogo';
import HeaderSearch from './HeaderSearch';
import HeaderProfile from './HeaderProfile';
import HeaderAppStore from './HeaderAppStore';
import HeaderNotification from './HeaderNotification';
import MyContext from '../MyContext';
import { useContext, useMemo, useState, useEffect } from 'react';
// import { setUserInfo } from '../../../../redux/userInfoStore/userSlice'
// import { useSelector, useDispatch } from 'react-redux';
// import ApiService from '../../../../ApiService';
import { modeBasedDataProcessor } from '../../../utils/developmentMode';

const ITEM_HEIGHT = 48;

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export default function PrimarySearchAppBar() {
    const [anchorE3, setAnchorE3] = useState(null);
    const open2 = Boolean(anchorE3);
    // const dispatch = useDispatch();
    const handleClick2 = (event) => {
        setAnchorE3(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorE3(null);
    };



    const [searchValue, setSearchValue] = useState('')
    const [companyData, setCompanyData] = useState([])
    const layoutContextData = useContext(MyContext);
    const searchValueState = layoutContextData?.serachValue;




    const [anchorE2, setAnchorE2] = useState(null);
    const open = Boolean(anchorE2);
    const handleClick1 = (event) => {
        setAnchorE2(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorE2(null);
    };

    ////
    const [anchorE5, setAnchorE5] = useState(null);
    const openSearch = Boolean(anchorE5);
    const handleSearchClick = (event) => {
        setAnchorE5(event.currentTarget);
    };
    const handleSearchClose = () => {
        setAnchorE5(null);
    };

    useEffect(() => {
        window.scroll(0, 0);
    }, []);


    //list view//
    const [dense, setDense] = useState(false);
    const [secondary, setSecondary] = useState(false);
    /////






    // ----------------- SEARCH API CALLING METHOD ------------

    useMemo(() => {
        if (searchValueState) {
            setSearchValue(searchValueState)
        } else {
            setSearchValue('')
        }
    }, [searchValueState])


    useEffect(() => {
        // ApiService.get('userInfo').then(res => {
        //     let response = res.data.data;
        //     console.log('a5', response);

        //     if (response) {
        //         // var avatar = response.userAvatar;
        //         // console.log('a5',avatar);
        //         // if (response.userAvatar === "https://gatewayapi.eela.tech/media/?file=default.png" || avatar === "https://gatewayapi.eela.tech/media/") {
        //         //     response.userAvatar = AvatarTingg;
        //         // }

        //         dispatch(setUserInfo({
        //             ...response,
        //             // userAvatar: response.userAvatar,
        //         }));
        //     }
        // });


    }, [])

    // Search Functionality Commented By Vikram Due TO Redux 
    // useEffect(
    //     function () {
    //         if (searchValue) {
    //             let delaySearch;
    //             dispatch(loaderData(true))
    //             delaySearch = setTimeout(() => {
    //                 userListHandler();
    //             }, 1000);
    //             return () => clearTimeout(delaySearch);
    //         } else {
    //             dispatch(removeSearchList([]));
    //             dispatch(removeSearch(''));
    //         }
    //     },
    //     [searchValue]
    // );
    // ./Search Functionality Commented By Vikram Due TO Redux 

    const [showSearchInput, setShowSearchInput] = useState(false);

    const handleSearchIconClick = () => {
        setShowSearchInput(!showSearchInput);
    };

    const processedNotificationData = modeBasedDataProcessor(<HeaderNotification />);
    const processedHeaderAppStore = modeBasedDataProcessor(<HeaderAppStore />);

    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className='app-style'>
                <Toolbar>
                    <Grid container spacing={2} >
                        <Grid item xs={2} sm={2}>
                            <HeaderLogo />
                        </Grid>
                        {/* Search */}
                        <Grid item xs={8} sm={8} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                            <HeaderSearch />
                        </Grid>
                        {/* ./Search */}

                        <Grid item xs={2} sm={2}>
                            <Box sx={{ display: { xs: 'none', sm: 'flex', justifyContent: 'flex-end' } }}>
                                {processedNotificationData && (
                                    <Box sx={{ mt: 0.7 }}>
                                        {processedNotificationData}
                                    </Box>
                                )}
                                {processedNotificationData && (
                                    <Box sx={{ mt: 0.7 }}>
                                        {processedHeaderAppStore}
                                    </Box>
                                )}
                                {/*                            
                                <Box sx={{mt:0.5}}><processedHeaderAppStore/></Box> */}
                                <Box><HeaderProfile /></Box>
                            </Box>
                            <Box sx={{ display: { xs: 'flex', sm: 'none', justifyContent: 'flex-end' } }}>
                                <Box sx={{ mt: 0.7 }}><HeaderNotification /></Box>
                                <Box sx={{ mt: 0.5 }}><HeaderAppStore /></Box>
                                <Box><HeaderProfile /></Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            {/* {renderMobileMenu}
            {renderMenu} */}
        </Box>
    );
}