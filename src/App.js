import React from 'react'
import "./App.css"
import Login from "./Login.js"
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {
  return (
    <GoogleOAuthProvider clientId="72135632980-e3rg6pg69h648uuc6ssah76k9lpj9qep.apps.googleusercontent.com">
    <div className='app'>
     
      <Login/>
    
    </div>
    </GoogleOAuthProvider>
  )
}

export default App