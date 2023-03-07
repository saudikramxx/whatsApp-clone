import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./3dots.css"
function Dots() {
    
    const [clicked,setclicked] = useState("false")
    
    function Onclicked(){
      setclicked(!clicked)      
    }

    return ( 
    <div onClick={Onclicked}>
        <MoreVertIcon/>

        {!clicked && (<div className='dropDown'><h3>Profile</h3></div>)}

    </div>
  )
}

export default Dots