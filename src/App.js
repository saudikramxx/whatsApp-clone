import React from 'react'
import "./App.css"
import Login from "./Login.js"
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from "./Home.js"
import { GoogleOAuthProvider } from '@react-oauth/google';

import AccountProvider from './Accountprovider';
function App() {
  return (
    <GoogleOAuthProvider clientId="72135632980-e3rg6pg69h648uuc6ssah76k9lpj9qep.apps.googleusercontent.com">
   <AccountProvider>
    
      <Home/>
    
    </AccountProvider>
    </GoogleOAuthProvider>
  )
}

export default App