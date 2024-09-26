import React, { useContext } from 'react';
import { Box } from '@mui/material';
import MyContext from '../MyContext';

function HeaderLogo(props) {
    const companyData=useContext(MyContext)
    if(companyData.logoInfo && companyData.logoInfo.logo && companyData.logoInfo.logoAltText ){
        return (
            <Box className='logo' sx={{ paddingTop: '3px' }}>
                <img className='logoSize' src={companyData.logoInfo.logo? companyData.logoInfo.logo : "https://gatewayapi.eela.tech/media/?file=default.png"}
                    onError={(e) => {
                        e.target.src = 'https://gatewayapi.eela.tech/media/?file=default.png';
                    }}
                    alt={companyData.logoInfo.logoAltText} />
            </Box>
        );
    }
    return (
        <Box className='logo' sx={{ paddingTop: '3px' }}>
        </Box>
    );
}

export default HeaderLogo;