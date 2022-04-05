import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase';

//import Components
import Sidebar from './sidebar/Sidebar'
import Feed from './Feed/Feed'
import './Profile.css'

function Profile(props) {
  let navigate = useNavigate();
  const [user, setUser] = useState({});


  useEffect(()=>{
    console.log(user)

  },[user])

  onAuthStateChanged(auth,(user)=>{
    if(user){
      setUser(user)
    }else{

    }

  })


  const logOut = () =>{
    props.signOutUser();
    navigate('/');
  }


  return (
    <div className='profile-container'>
      <Sidebar />
      <Feed />
      <button onClick={logOut}>log out</button>
    </div>
  )
}

export default Profile