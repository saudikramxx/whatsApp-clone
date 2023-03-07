import React from 'react'
import { useContext } from 'react'
import { AccountContext } from './Accountprovider'
import "./Menu.css"
import Groups2Icon from '@mui/icons-material/Groups2';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';

import SearchIcon from '@mui/icons-material/Search';       
import FilterListIcon from '@mui/icons-material/FilterList';
import Dots from "./3dots"
import Profile from './Profile';
function Menu() {
  const {user} = useContext(AccountContext)
  return ( <div className='menu'>
    <div className='menuTop'>
      <Profile/>  
      <div className="icons">
      <Groups2Icon/>   
      <DonutLargeIcon/>
      <ChatIcon/>
      <Dots/>
      
      </div>
    </div>


    <div className="serch">
      <SearchIcon/>
      <form className="search-box">
       <input type="text" placeholder="Search or start a new chat"/>
      </form>
      <FilterListIcon/>
    </div>

    

    <div className='mainMenu' > all chats</div>
    </div>
  )
}

export default Menu