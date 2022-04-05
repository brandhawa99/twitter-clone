import '../App.css'
import img from '../icons/twitterlogo.svg'
import google from '../icons/googleG.png'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { useState } from 'react'
const Login = props =>{
  let navigate = useNavigate();

  onAuthStateChanged(auth,(user)=>{
    if(user){
      navigate(`/profile/`)
      
    }
  })
  


    return(
        <div className='main-container'>
            <div className="sign-in-container">
                <img className='logo-image'src={img} alt="twitter logo"/>
                <h1>Twitter Clone</h1>
                <div className='buttons-container'>
                    
                    <button className='button' onClick={props.signInUser}><img className='button-image' src={google}  alt='google logo'/>Sign In With Google</button>
                    <button className='button log-out-button' onClick={props.signOutUser}>Log Out</button>

                </div>

            </div>            
        </div>
    )
}

export default Login