import React from 'react'
import {Dialog,DialogContent,DialogContentText,DialogActions,Button, DialogTitle} from '@mui/material'
import { useState } from 'react'


export const LessonDialog = () => {
    const [dialogOpen, setDialogOpen] = useState(false)

    
  return (
  <>
  <Button onClick={()=>{setDialogOpen(true) }}>Dialogu Aç </Button>
  <Dialog open={dialogOpen} onClose={()=>{setDialogOpen(false)}}>
    <DialogTitle>Hangisini Seviyorsunuz </DialogTitle>
    <DialogContent>
        <DialogContentText>Frontend Frameworklerinden Hangisini Seviyorsunuz </DialogContentText>
        <DialogActions onClick={()=>{setDialogOpen(false) }}>Angular</DialogActions>
        <DialogActions onClick={()=>{setDialogOpen(false) }}>React</DialogActions>
    </DialogContent>
  </Dialog>
  </>
    
  )
}
