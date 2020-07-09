import React,{useState} from 'react'
import HokkMouse from './HokkMouse'

function MouseContainer() {
    const[display, setDisplay] = useState(true)
    return (
        <div>
          <button onClick={() =>setDisplay(!display)}>ToggleDisplay</button>  
          {display && <HokkMouse/>}
        </div>
    )
}

export default MouseContainer