import { Table ,TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Gettable = () => {
  return (
      <div>
          <TableContainer sx={{mt:10}}>
              <Table border="2px" height="px">
                  <TableHead>
                      <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Age</TableCell>
                          <TableCell>Place</TableCell>
                          <TableCell>Number</TableCell>
                      </TableRow>
                  </TableHead>
              </Table>
          </TableContainer>
          
              
          
      
    </div>
  )
}

export default Gettable
