import React from 'react';
import './App.css';
import Header from './components/Header-component/Header';
import Sidebar from './components/Sidebar-component/Sidebar'
import Feed from './components/Feed-component/Feed'
import Widget from './components/Widget-component/Widget'
import { useSelector } from 'react-redux';
import { login, selectUser,logout } from './features/userSlice';
import Login from './components/Login-component/Login'
import { useEffect } from 'react';
import firebase from 'firebase'
import {useDispatch} from 'react-redux'


function App() {
  const dispatch = useDispatch();
  const user=useSelector(selectUser);

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((userAuth)=>{
      if(userAuth){
       
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoURL:userAuth.photoURL,
        }))
      } else{
        dispatch(logout())
      }
    })
  },[])

  return (
    <div className="app">
      <Header />
      
      {!user ? (<Login />) : (
        <div className="app__container">
        <Sidebar />
        <Feed />
        <Widget />
      </div>

      )}
      
    </div>
  );
}

export default App;
