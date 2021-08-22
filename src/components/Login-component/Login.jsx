import React from 'react'
import "./Login.css"
import {useState} from 'react'
import firebase from 'firebase'
import 'firebase/auth'
import {useDispatch} from 'react-redux'
import { login } from '../../features/userSlice'



function Login() {
    const [person,SetPerson]=useState({name:"",email:"",password:"",profilePic:""})
    const dispatch=useDispatch();
    const handleChange=(e)=>{
        e.preventDefault()
        SetPerson({...person,[e.target.name]:e.target.value})
    }

    const register=(e)=>{
        e.preventDefault()
        if(!person.name){
            return alert("Please enter your name")
        }

        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(()=>{
            return firebase.auth().createUserWithEmailAndPassword(person.email,person.password).then((userAuth)=>{
                userAuth.user.updateProfile({
                    displayName: person.name,
                    photoURL:person.profilePic,
                })
                .then(()=>{
                    dispatch(login({
                        email:userAuth.user.email,
                        uid:userAuth.user.uid,
                        displayName:person.name,
                        photoURL:person.profilePic,
                    }))
                })
            }).catch(error=>alert(error.message))
            })

    };

    const loginToApp=(e)=>{
        e.preventDefault();
        
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(()=>{
            return firebase.auth().signInWithEmailAndPassword(person.email,person.password).then((userAuth)=>{
                dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName:userAuth.user.displayName,
                photoURL:userAuth.user.photoUrl,
            }))
        })
        })
        
        
        
    };
    return (
        <div className="login">
            <div className="app-container">
                <div className="login__left">
                    <h1>Welcome to your professional community</h1>
                    <form  className="login__form" method="post">
                        <input placeholder="Full name " name="name" value={person.name} type="text" onChange={handleChange}/>
                        <input placeholder="Profile pic url" type="text" onChange={handleChange} value={person.profilePic} name="profilePic" />
                        <input type="email" value={person.email}  name="email" onChange={handleChange} placeholder="Email" />
                        <input type="password" value={person.password} onChange={handleChange} name="password" placeholder="Password" />
                        <button type="submit" onClick={loginToApp}>Sign in</button>
                    </form>
                    <p>Not a member? <span   onClick={register} style={{cursor:"pointer",color:"#207ad1"}} className="login__register">Register</span></p>
                
                </div>
                <div className="login__right">
                    <img src="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login
