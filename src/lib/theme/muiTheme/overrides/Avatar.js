
  import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Avatar(theme) {
  return {
    MuiAvatar: {
      styleOverrides: {
        root: {
            // height: 'var(--equal-hw1_75)',
            // width: 'var(--equal-hw1_75)',
            backgroundColor: 'var(--color-mui-primary-blue)'
          },
      },
    },
    // MuiListItem:{
    //     styleOverrides: {
    //         root: {
    //     minWidth:'48px !important',
    //     paddingLeft:'0 !important',
    //     margin:'2px !important',
    //         '&:hover': {
    //             backgroundColor: 'var(--color-lightblue)',
    //             borderRadius:'5px',
    //             margin:'2px !important',
    //           },
    //         }
    //     }
    //     },
    // MuiSvgIcon:{
    //     styleOverrides: {
    //         root: {
    //     fontSize:'large',
    //     color:'red !important'
    //         }
    //     }
    //     },
  };
}
