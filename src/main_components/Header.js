import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {Avatar, IconButton} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from '../React_Context_API/StateProvider'
function Header() {
    const [state, dispatch] = useStateValue();
    return (
        <div className= "header">
            {/* start of header_left */}
            <div className= "header_left">
                <img src="http://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt=""/>
                <div className="header_input">
                    <SearchIcon />
                    <input placeholder= "Search Facebook"type="text"/>
                </div>
            </div>
            {/*  */}
            {/* end of header_left */}
            
            {/* start of header_center*/}
            <div className= "header_center">

                <div className="header_option header_option--active">
                    <HomeIcon fontSize = "large"/>
                </div>

                <div className="header_option ">
                    <FlagIcon fontSize = "large"/>
                </div>

                <div className="header_option">
                    <SubscriptionsOutlinedIcon fontSize = "large"/>
                </div>

                <div className="header_option">
                    <StorefrontOutlinedIcon fontSize = "large"/>
                </div>

                <div className="header_option">
                    <SupervisedUserCircleIcon fontSize = "large"/>
                </div>
            
            </div>
            {/* end of header_center*/} 
            
            {/* start of header_right */}    
            <div className="header_right">
                <div className="header_info">
                   {/* <Avatar src = "https://scontent.fisb6-1.fna.fbcdn.net/v/t1.0-9/119589266_213366363472694_3744848249619759813_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=U4FYIqvFE_0AX9Nef9n&_nc_ht=scontent.fisb6-1.fna&oh=e906be799f2387a10b3601057c1c2527&oe=5F891391"/> */} 
                   <Avatar src = {state.user.photoURL} />  
                   <h4>{state.user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
            
            {/* end of header_right */}   
        </div>
    )
}

export default Header
