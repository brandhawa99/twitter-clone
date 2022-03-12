import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile(props) {
  let navigate = useNavigate();


  useEffect(()=>{
    console.log(props.user)
  })


  const logOut = () =>{
    props.signOutUser();
    navigate('/');
  }

  useEffect(()=>{
    console.log(props.user)
  })

  return (
    <div className='main-container'>
      <h1>{props.user.displayName}</h1>
      <img src={props.user.photoURL} alt='dp'/>
      <p>{props.user.metadata.creationTime}</p>

      <button onClick={logOut}>log out</button>
    </div>
  )
}

export default Profile