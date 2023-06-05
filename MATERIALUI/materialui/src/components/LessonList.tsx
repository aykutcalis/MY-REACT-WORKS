import React from 'react'
import { List,ListItem,ListItemIcon,ListItemText,ListItemButton,Divider,Box} from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox'
import DraftsIcon from '@mui/icons-material/Drafts'


export const LessonList = () => {
  return (<Box>
    <List>
        <ListItem>
            <ListItemButton>
               <ListItemIcon>
                <InboxIcon/>
               </ListItemIcon>
               <ListItemText primary="Inbox"/>
            </ListItemButton>
        </ListItem>
    </List>
    <Divider/>
    <List>
        <ListItem>
            <ListItemButton>
               <ListItemIcon>
                <InboxIcon/>
               </ListItemIcon>
               <ListItemText primary="Drafts"/>
            </ListItemButton>
        </ListItem>
    </List>
    <Divider/>
  <List>
        <ListItem>
            <ListItemButton>
               <ListItemIcon>
                <InboxIcon/>
               </ListItemIcon>
               <ListItemText primary="Inbox"/>
            </ListItemButton>
        </ListItem>
    </List>
    <Divider/>
    <List>
        <ListItem>
            <ListItemButton>
               <ListItemIcon>
                <InboxIcon/>
               </ListItemIcon>
               <ListItemText primary="Drafts"/>
            </ListItemButton>
        </ListItem>
    </List>
    <Divider/>
  </Box>
  
  )
}
