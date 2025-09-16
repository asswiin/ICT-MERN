import React, { useState } from 'react'
import { Button } from '@mui/material'

const Message = () => {
    var [a, seta] = useState()
   
    const Reacts = () => {
        seta("react")
    }
    const Angular = () => {
        seta("angular")
    }
    const Nest = () => {
        seta("nest")
    }
  return (
      <div>
          <h1>welcome {a}</h1>
          <Button variant="contained" onClick={Reacts}>React</Button>
          <Button variant="contained" onClick={Angular}>Angular</Button>
          <Button variant="contained" onClick={Nest}>Nest</Button>
    </div>
  )
}

export default Message
