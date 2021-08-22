import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption-component/HeaderOption';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import {logout, selectUser} from '../../features/userSlice';
import firebase from 'firebase'
import {useDispatch, useSelector} from 'react-redux'

function  Header() {
    
    const dispatch = useDispatch();
    const logoutOfApp=()=>{
        dispatch(logout());
        firebase.auth().signOut();
    }
    return (
        <div className='Header'>
            <div className="container">
                <div className="header-left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />

                <div className="header-search">
                    <SearchIcon />
                    <input type="text" />

                </div>

                </div>
                <div className="header-right">
                    <HeaderOption Icon={HomeIcon} title="Home"/>
                    <HeaderOption Icon={SupervisorAccountIcon} title="My network" />
                    <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                    <HeaderOption Icon={ChatIcon} title="Messaging"/>
                    <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                    <HeaderOption avatar={true} title="Logout" onClick={logoutOfApp} />

                </div>
            </div>
            
        </div>
    )
}

export default  Header;
