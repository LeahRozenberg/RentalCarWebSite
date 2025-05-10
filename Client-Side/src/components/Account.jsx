import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Drawer, Avatar, Typography, Button, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonIcon from '@mui/icons-material/Person';
import { Outlet, useNavigate } from 'react-router';
import { setCurrentUser } from '../redux/Actions';
import { ManageAccounts } from '@mui/icons-material';


export const AccountSidebar = ({ open, setOpen }) => {
  const dispatch = useDispatch()
  const toggleSidebar = () => setOpen(false);
  const user = useSelector((state) => state.currentUser);
  const lends = useSelector((state) => state.lends);
  const [flag, setFlag] = useState(false)
  const nav = useNavigate()


  const handleLogout = () => {
    dispatch(setCurrentUser({}))
    nav('/Main')
  };

  const myRentals = () => {
    setOpen(true);
  };
  const my = () => {
    //nav('/CreditCard', { state: data })
    toggleSidebar()
    nav('/myRent')
  }
  const manager=()=>{
    toggleSidebar()
    nav('/manager')
  }
 
  return (
    <Drawer anchor="left" open={open} onClose={toggleSidebar}>
      <Box sx={{ width: 250, padding: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 2 }}>
          <Avatar alt={user?.username} sx={{ width: 56, height: 56 }} />
          <Typography variant="h6" sx={{ marginTop: 1 }}>
            {user?.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {user?.email}
          </Typography>
        </Box>
        <List>
          <ListItem button onClick={() => {}}>
            <ListItemIcon>
            <PersonIcon sx={{ color: 'red', fontSize: '40px' }}></PersonIcon>
            </ListItemIcon>
            <Typography>הפרופיל שלי</Typography>
          </ListItem>
          <ListItem button onClick={() => { my() }}>
            <ListItemText primary="ההשכרות שלי" />
          </ListItem>
          <ListItem button onClick={handleLogout}>
            <ExitToAppIcon sx={{ marginRight: 1 }} />
            <ListItemText primary="התנתקות" />
          </ListItem>
          {user.userTypeId==2 && 
          <ListItem  button onClick={()=>{manager()}}>
            <ManageAccounts sx={{ marginRight: 1 }} />
            <ListItemText primary="ממשק מנהל" />
          </ListItem>
          }
        </List>
      
      </Box>
      <Outlet></Outlet>
    </Drawer>

  );
}