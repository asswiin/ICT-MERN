import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {

  var [a, seta] = useState("Aswin")
  var [b,setb]=useState()
  
  const ChangeName = (e) => {
    console.log(e.target.value)
    seta(e.target.value)
  }

  const SubmitHandler = () =>
    setb(a)
  
  return (
    <div>
      <h1>welcome {b}</h1>
      <TextField variant="outlined"  onChange={ChangeName} /><br></br><br></br>
      <Button variant='contained' onClick={SubmitHandler}>click</Button>
    </div>
  )
}

export default Statebasics
