import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import './Sidebar.css';

function Sidebar() {
    const user=useSelector(selectUser);

    const recentItem=(topic) =>{
        return(
            <div className="sidebar__recentItem">
                <span className="recentItem__hashtag">#</span>
                <p>{topic}</p>
            </div>
            
        )
    }
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                <Avatar src={user.photoURL} className="sidebar__avatar"/>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
                
            </div>
            <div className="sidebar__stats">
                    <div className="sidebar__stat">
                        <p>Who viewed you</p>
                        <p className="stat-number">2,354</p>

                    </div>
                    <div className="sidebar__stat">
                        <p>Views on post</p>
                        <p className="stat-number">1934</p>
                        
                    </div>

                </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("react.js")}
                {recentItem("Web-development")}
                {recentItem("Dev-community")}
                {recentItem("100daysofcode")}
            </div>
            
        </div>
    )
}

export default Sidebar
