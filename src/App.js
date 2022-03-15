


import './App.css';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {auth, db} from './firebase';
import { doc, setDoc } from 'firebase/firestore';
import {GoogleAuthProvider, signInWithPopup,signOut, onAuthStateChanged} from 'firebase/auth'
import Login from './Components/Login'
import Home from './Components/Home'
import Profile from './Components/Profile';

function App() {
  const[user, setUser] = useState({});

// Sign into your gmail account
    const signIn = async(e) =>{
      let provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      // console.log(result);
  
    }


//sign out of account 
  const signOutUser = () =>{
    signOut(auth);
  }

  onAuthStateChanged(auth, (user)=>{
    if(user){
      setUser(user);
      //if User is new register their data to the firestore database user and tweet collection
      if(Math.abs(user.metadata.createdAt -user.metadata.lastLoginAt) <20){
        //set the references for the user collection and the tweet collection
        const userRef = doc(db, 'users', user.uid)
        const tweetRef = doc(db, 'tweets', user.uid)
        setDoc(tweetRef,{
          tweets:[{

          }]
        })
        //set the default data for the user if they are new 
        setDoc(userRef,{
          Date_Created : user.metadata.createdAt,
          email : user.email,
          fullName : user.displayName,
          userName :"bawa",
          tweets: `/tweets/${user.uid}`,
        } )

      }
    }else{

    }
  })


 /**
  * TODO: Created a profile page there the url persons username
  * TODO: Display all of the users tweets with the most recent at the top 
  * TODO: Create The top of the profile where you can see data about the user like {name, username, date they joined, and a bio}
  */

  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Login signInUser={signIn}  signOutUser={signOutUser}/>} />
        <Route path="/profile/:id" element={<Profile signOutUser={signOutUser} user={user}/>} /> 

      </Routes>
    </Router>

  );
}

export default App;
