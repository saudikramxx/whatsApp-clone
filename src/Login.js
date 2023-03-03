import "./Login.css"
import React from 'react'
import { GoogleLogin } from '@react-oauth/google';

export default function Login() {
    const LoginSuccess = () =>{
      console.log("success")
    }
    const LoginError = () => {
       console.log("login failed")
    }
  return (
    <div className= "login">
       <div className = "loginBackground-top">
       <img className="logo" alt="whats-app" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png"/>
       <h4 className="title">WHATSAPP CLONE</h4>
       </div>
       <div className= "loginBackground-bottom">
       </div>
        <div className="login-container">
        
          <div className="container-left">
            <h1 className="direction">Use WhatsApp on your computer</h1>
            <ol className="list">
            <li>Open WhatsApp on your phone</li>
            <li>Tap <strong>Menu</strong> or <strong>Settings</strong> and select WhatsApp Web</li>
            <li>point your phone to this screen to capture the code</li>
            <li>this is a clone dont try the above just clink on the qr code</li>
            </ol>
          </div>
          <div className="container-right">
            <img alt="qrcode" src="https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg"></img>
           <div className="google">
            <GoogleLogin
            onSuccess={LoginSuccess}
            onError={LoginError}
            />
           </div>  
          </div>
          

                
        </div>
       

       
        
    </div>
  )
}
