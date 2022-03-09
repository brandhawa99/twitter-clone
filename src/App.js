

import './App.css';
import { BrowserRouter as Router, Route,Routes, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {auth, db} from './firebase';
import {GoogleAuthProvider, signInWithPopup,signOut, onAuthStateChanged} from 'firebase/auth'
import Login from './Components/Login'
import Home from './Components/Home'

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
    <Router>
      <Routes>
        <Route path="/"  element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>

  );
}

export default App;
