import { Avatar } from '@material-ui/core'
import React from 'react'
import IconOption from '../../IconOption-component/IconOption'
import './Post.css'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
function Post({name, description, message, photoUrl}) {
    
    return (
        <div className="post">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
                
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <IconOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"/>
                <IconOption Icon={ChatOutlinedIcon} title="Comment" color="gray"/>
                <IconOption Icon={ShareOutlinedIcon} title="Share" color="gray"/>
                <IconOption Icon={SendOutlinedIcon} title="Send" color="gray"/>
            </div>
        </div>
    )
}

export default Post;
