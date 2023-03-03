import React from 'react'
import Menu from './Menu'
import Empty from './Empty'
import "./Chats.css"
function Chats() {
  return (
  <div className='chats'>
      <div className='menu'> <Menu/></div>
      <div className='empty'> <Empty/> </div>  
  </div>
 
  )
}

export default Chats