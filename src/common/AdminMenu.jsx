import React from 'react'
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import "./AdminMenu.css"


function AdminMenu() {
  return (
    <div>
      <p className='adminMenuH4'>Admin Panel</p>
      <Box sx={{
        width: '100%', maxWidth: 360, bgcolor: 'background.paper',
        border: '1px solid black', marginLeft: '15px'
      }} >
        <nav className='Admin_menu_list'>
          <List >
            <Link to="/dashboard/admin/create-category">
              <ListItem disablePadding sx={{borderBottom: "1px solid"}} >
                <ListItemText primary="Create Category" className='list-item' />
              </ListItem>
            </Link>

            <Link to="/dashboard/admin/create-product">
              <ListItem disablePadding sx={{borderBottom: "1px solid"}} >
                <ListItemText primary="Create Product" className='list-item' />
              </ListItem>
            </Link>

            <Link to="/dashboard/admin/products">
              <ListItem disablePadding sx={{borderBottom: "1px solid"}} >
                <ListItemText primary="Products" className='list-item' />
              </ListItem>
            </Link>

            <Link to="/dashboard/admin/users">
              <ListItem disablePadding >
                <ListItemText primary="Users" className='list-item' />
              </ListItem>
            </Link>
          </List>
        </nav>
      </Box>
    </div>
  )
}

export default AdminMenu;