

import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {app, auth, db} from './firebase';
import {GoogleAuthProvider, signInWithPopup,signOut, onAuthStateChanged,signInWithRedirect} from 'firebase/auth'

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [user, setUser] = useState({});

  const signIn = async() =>{
    let provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  }

  const signOutUser = (e) =>{
    e.preventDefault();
    signOut(auth);
  }

  onAuthStateChanged(auth, (user)=>{
    if(user){
      setLoginStatus(true)
      console.log('logged in');
      setUser(user);
    }else{
      setLoginStatus(false);
      console.log('logged out')
    }
  })



  return (
    <div className="App">
      <div id={'firebaseui-auth-container'}>
        {!loginStatus &&
            <div> 
              <h1>Twitter - Clone</h1>
              <p>Login In</p>
              <button onClick={signIn}>Sign In With Google</button>

            </div>
        
        }
        {
          loginStatus &&
          <div> 
            <h1>Hello, {user.displayName}</h1>
            <button onClick={signOutUser}>Sign out</button>
          </div>

        }
        
      </div>
    </div>
  );
}

export default App;
