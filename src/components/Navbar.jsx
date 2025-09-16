import { AppBar, Toolbar, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <h3>myapp</h3> &nbsp;
          <Link to='/'>
            <Button variant='contained'>Home</Button>&nbsp;
          </Link>
          <Link to='/login'>
            <Button variant='contained'>Login</Button>
          </Link>
          <Link to='/signup'>
          <Button variant='contained'>Signup</Button>
          </Link>
          <Link to='/table'>
          <Button variant='contained'>table</Button>
          </Link>
          <Link to='/state'>
          <Button variant='contained'>state</Button>
          </Link>
          <Link to='/counter'>
            <Button variant='contained'>counter</Button>
          </Link>
          <Link to='/message'>
            <Button variant='contained'>Message</Button>
          </Link>
        </Toolbar>
      </AppBar><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default Navbar
