import {Link, useParams} from 'react-router-dom'
import React, { useEffect } from 'react'
const Home = props =>{ 
    let params = useParams();

    // useEffect(()=>{
    //     console.log('this is from the home',props.currentUser)
    //     console.log('this is from the params',params.id)

    // },[])


    return(
        <div className='basic'>
            <button onClick={props.signOutUser}>Log out</button>
        <h1>Home</h1>
        <div className='main-container'>
        </div>
        </div>
    )
}

export default Home;