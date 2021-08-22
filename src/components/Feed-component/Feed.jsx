import CreateIcon from '@material-ui/icons/Create';
import React,{useEffect, useState} from 'react'
import './Feed.css'
import IconOption from '../IconOption-component/IconOption'
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post-component/Post'
import {db,auth} from '../firebase/firebase'
import firebase from 'firebase'
import {useSelector} from 'react-redux'
import {selectUser} from '../../features/userSlice'


function Feed() {
    const user= useSelector(selectUser);

    const [posts, setPosts]=useState([]);
    const[input,setInput]=useState('');
    

    useEffect(()=>{
        db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot)=>{
            setPosts(
                (snapshot.docs.map((doc)=>({
                    id:doc.id,
                    data:doc.data(),
                })))
            )
        })
      
        
        
    },[]);

    const sendPost=(e)=>{
        e.preventDefault()
        db.collection('posts').add({

            name:user.displayName,
            description: "test test test",
            message:input,
            photoUrl:user.photURL|| "",
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        });
        
        setInput('');
    }

    return (
        <div className="feed">
            <div className="feed__postsection">
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}  />
                        <button type="submit" onClick={sendPost} > Post</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <IconOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <IconOption Icon={SubscriptionsIcon} title="Video" color="#7FC15E" />
                    <IconOption Icon={EventNoteIcon} title="Event" color="#E7A33E" />
                    <IconOption Icon={CalendarViewDayIcon} title="Write article" color="#FC9295" />

                </div>
                
            </div>
            {posts.map(({id,data})=>{
                return <Post 
                key={id} 
                name={data.name} 
                description={data.description}
                message={data.message} />
            })}
            
            
            
        </div>
    )
}

export default Feed
