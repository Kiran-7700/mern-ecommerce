import React from 'react'
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import "./AdminMenu.css"

function UserMenu() {
  return (
    <div>
    <h3 className='adminMenuH4'>Dashboard</h3>
     <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',
      border: '1px solid black' ,marginLeft:'15px'}} >
       <nav className='Admin_menu_list'>
         <List >
             <Link to="/dashboard/user/profile">
             <ListItem disablePadding sx={{borderBottom:'1px solid black'}}>
               <ListItemText primary="Profile"  className='list-item'/>
           </ListItem>
           </Link>
        
          <Link to="/dashboard/user/orders">
           <ListItem disablePadding >
               <ListItemText primary="Orders" className='list-item'/>
           </ListItem>
           </Link>
         </List>
       </nav>
     </Box>
     </div>
  )
}

export default UserMenu