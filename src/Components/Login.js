import '../App.css'

export const Login = props =>{


    return(
        <div className='main-container'>
            <div className="sign-in-container">
                <h1>Twitter Clone</h1>
                <button>Sign In With Google</button>

            </div>

            {/* <>
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

        </> */}
            
        </div>
    )
}