import React from 'react'
import { useNavigate } from 'react-router-dom'

function Profile(props) {
  let navigate = useNavigate();

  const logOut = () =>{
    props.signOutUser();
    navigate('/');
  }

  return (
    <div>Profile

      <button onClick={logOut}>log out</button>
    </div>
  )
}

export default Profile