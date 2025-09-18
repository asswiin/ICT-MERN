import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Gettable = () => {
    var [user, setUser] = useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            console.log(res.data)
            setUser(res.data)
        })
    return (
        <div>
            <TableContainer sx={{ mt: 10 }}>
                <Table border="2px" >
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                        <TableBody>
                            {user.map((val) => {
                                return (
                                    <TableRow>
                                        <TableCell>{val.name}</TableCell>
                                        <TableCell>{val.username}</TableCell>
                                        <TableCell>{val.address.city}</TableCell>
                                        <TableCell>{val.email}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    
                </Table>
            </TableContainer>




        </div>
    )
}

export default Gettable
