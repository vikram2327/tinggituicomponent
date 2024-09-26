import React, {useState,useEffect} from "react";
import FolderIcon from '@mui/icons-material/Folder';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupsIcon from '@mui/icons-material/Groups';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import MoreIcon from '@mui/icons-material/More';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import SpeakerIcon from '@mui/icons-material/Speaker';


const Icons = ({icon}) => {

    const [iconName, setIconName] = useState(<></>);
    
    const getIconName = () => {
        switch(icon){
            case "FolderIcon": return (<FolderIcon />);
            case "SpeakerIcon": return (<SpeakerIcon />);
            case "AccessTimeFilledIcon": return (<AccessTimeFilledIcon />);
            case "DeleteSweepIcon": return (<DeleteSweepIcon />);
            case "LocalOfferIcon": return (<LocalOfferIcon />);
            case "AccountBoxIcon": return (<AccountBoxIcon />);
            case "GroupsIcon": return (<GroupsIcon />);
            case "LeaderboardIcon": return (<LeaderboardIcon />);
            case "MoreIcon": return (<MoreIcon />);
            case "FavoriteIcon": return (<FavoriteIcon />);
            case "CalendarMonthIcon": return (<CalendarMonthIcon />);
            case "TextSnippetIcon": return (<TextSnippetIcon />);
            
        }
    }

    useEffect(() => {
        setIconName(getIconName());
    }, [])

    return (<>
        {iconName}
    </>)
}

export default Icons;