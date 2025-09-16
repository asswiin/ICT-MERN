
import { TextField ,Button } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
      <div>
          <div class="signup">
          <h1>signup</h1>
          <TextField id="name" label="Name" variant="standard" />
          <br></br><br></br>
          <TextField id="phone" label="phone number" variant="standard" />
          <br></br><br></br>
          <TextField id="email" label="email" variant="standard" />
          <br></br><br></br>
          <TextField id="password" label="Password" variant="standard" />
          <br></br><br></br>
          <TextField id="confrimpassword" label="Confrim password" variant="standard" />
          <br></br><br></br>
        <Button variant='contained'>Signup</Button>
          </div>
          
    </div>
  )
}

export default Signup
