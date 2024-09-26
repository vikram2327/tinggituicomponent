import React, { useState } from 'react';
import {MuiTheme as ThemeProvide} from '../../theme';
// import ThemeProvide from '../../theme';
import Sidebar from './sidebar/Sidebar';
// import Sidebar from '../layouts/sidebar/Sidebar';
import MyContext from './MyContext';

const windowObject = window;

function AdminLayout(props) {

    const [currentRoute,setCurrentRoute]=useState('/');
    function setSerachValueHandler(d){
        console.debug("AdminLayout : setSerachValueHandler : d : ",d);
        // if(d){
            setSerachValue(d);
        // }
    };
    
    const [serachValue,setSerachValue]=useState("");
    function setCurrentRouteHandler(d){
        console.debug("AdminLayout : setCurrentRouteHandler : d : ",d);
        if(d){
            setCurrentRoute(d);
        }
    };

    const myState ={...props,
        currentRoute,setCurrentRouteHandler,
        serachValue,setSerachValueHandler,
    }
    return (
        <ThemeProvide>
            <MyContext.Provider value={myState}>
            <Sidebar window={windowObject} 
                sidebarMenuItems={props.sidebarMenuItems} 
                debug={props.debug}>
                {props.children}
            </Sidebar>
            </MyContext.Provider>
        </ThemeProvide>

    );
}

export default AdminLayout;