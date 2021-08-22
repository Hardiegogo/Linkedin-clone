import { Avatar } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';

import { selectUser } from '../../../features/userSlice';
import './HeaderOption.css'

function HeaderOption({avatar,Icon,title,onClick}) {
    const user=useSelector(selectUser);

    return (
        <div className="header-option">
            {Icon && <Icon className="header-option-icon" />}
            
            {avatar && (<Avatar src={user && user.photoURL} className="header-option-icon" onClick={onClick} />)}
            <h4 class="header-option-title">{title}</h4>
            
        </div>
    )
}

export default HeaderOption;
