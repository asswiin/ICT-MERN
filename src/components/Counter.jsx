import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'

const Counter = () => {
    var [a, b] = useState(0)

    const Plus = () => {
        b(a+1)
    }

    const Sub = () => {
        b(a-1)
    }
    
  return (
      <div>
          <h2>count { a }</h2>
          <Button variant="contained" onClick={Plus}>+</Button>
          <Button variant="contained" onClick={Sub}>-</Button>
    </div>
  )
}

export default Counter
