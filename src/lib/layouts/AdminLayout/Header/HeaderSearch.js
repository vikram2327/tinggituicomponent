import React,{useContext, useState} from 'react';
import { styled, InputBase, Menu, Box, IconButton } from '@mui/material';
import {Search as SearchIcon} from '@mui/icons-material';
import MyContext from '../MyContext';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '3rem',
    border: '1px solid #EEF6FF',
    backgroundColor: '#FFFFFF;',
    '&:hover': {
        backgroundColor: '#FFFFFF;',
    },
    marginRight: theme.spacing(2),
    width: '80%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
        marginLeft: 'none !important'
    },
    [theme.breakpoints.up('xs')]: {
        // marginLeft: theme.spacing(3),
        width: '100% !important',
        borderRadius: '2rem !important',
        // marginLeft: '23rem !important'
    },
    [theme.breakpoints.up('lg')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
        marginLeft: '36rem !important'
    },

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),

        width: '100% !important',
        [theme.breakpoints.up('md')]: {
            width: '35rem',
        },
    },
}));


function HeaderSearch(props) {
    const [anchorE2, setAnchorE2] = useState(null);
    const [anchorE5, setAnchorE5] = useState(null);
    const [searchValue, setSearchValue] = useState('')
    const [companyData, setCompanyData] = useState([])
    const layoutContextData = useContext(MyContext);
    const searchValueState = layoutContextData?.serachValue;

    // const dispatch = useDispatch();
    const open = Boolean(anchorE2);
    const openSearch = Boolean(anchorE5);
    const handleSearchClick = (event) => {
        setAnchorE5(event.currentTarget);
    };
    const handleSearchClose = () => {
        setAnchorE5(null);
    };

   

    return (
        <>
         <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
         <Search>
             <SearchIconWrapper>
                 <SearchIcon sx={{ color: '#64748B' }} />
             </SearchIconWrapper>
             <StyledInputBase
                 value={searchValue}
                //  onChange={(e) => dispatch(searchValueSet(e.target.value))}
                 onChange={(e) => layoutContextData?.setSerachValueHandler(e.target.value)}
                 placeholder="Search.."
                 inputProps={{ 'aria-label': 'search' }}
             />
         </Search>
     </Box>
     <Box sx={{ display: { xs: 'flex', sm: 'none' }, mr:4}}>
         <IconButton
             aria-label="more"
             id="long-button"
             aria-controls={openSearch ? 'long-menu' : undefined}
             aria-expanded={open ? 'true' : 'false'} // Change here
             aria-haspopup="true"
             onClick={handleSearchClick}
         >
             <SearchIcon />
         </IconButton>
         <Menu
             id="fade-menu"
             MenuListProps={{
                 'aria-labelledby': 'fade-button',
                 left: '40px' // Change here
             }}
             anchorEl={anchorE5}
             open={openSearch}
             onClose={handleSearchClose}
         >
             <Box className='search-panel'>
                 <Search isTrash={false} >
                     <SearchIconWrapper>
                         <SearchIcon sx={{ color: '#64748B' }} />
                     </SearchIconWrapper>
                     <StyledInputBase
                         sx={{ color: 'black' }}
                         value={searchValue}
                         onChange={(e) => setSearchValue(e.target.value)}
                         placeholder="Search file.."
                         inputProps={{ 'aria-label': 'search' }}
                     />
                 </Search>
             </Box>
             {/* : null} */}
         </Menu>
     </Box>
     </>
    );
}

export default HeaderSearch;