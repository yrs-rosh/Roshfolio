import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import { Book, DeveloperBoard, DeveloperMode, Home, Person, Restore, Send } from '@mui/icons-material'
import React from 'react'
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <BottomNavigation sx={{ width: "100%", backgroundColor: "rgba(18,18,18)", position:"fixed",bottom:"0", zIndex:"10000" }}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<NavLink activeClassName="active" to="/"><Home/></NavLink>}
      />
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<NavLink activeClassName="active" to="/about"><Person/></NavLink>}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<NavLink activeClassName="active" to="/skills"><Book/></NavLink>}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<NavLink activeClassName="active" to="/projects"><DeveloperMode/></NavLink>}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<NavLink activeClassName="active" to="/connect"><Send/></NavLink>} />
    </BottomNavigation>
    
  )
}

export default Footer