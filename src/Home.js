import React from 'react'
import Login from './Login'
import { useContext } from 'react'
import Chats from './Chats'
import { AccountContext } from './Accountprovider'
function Home() {
const {user} = useContext(AccountContext)
  return (
    <div>
    <Chats/>
    {/* {user ? <Chats/> : <Login/>} */}
    </div>
  )
}

export default Home