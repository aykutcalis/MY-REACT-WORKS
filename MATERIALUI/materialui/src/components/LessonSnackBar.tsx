import React from 'react'
import {FormControl,FormLabel,FormControlLabel,Radio,RadioGroup,FormHelperText,Button, Snackbar, IconButton} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'



export const LessonSnackBar = () => {
    const [openSnackBAr, setOpenSnackBAr] = useState(false)
    const handleClick=()=>{
setOpenSnackBAr(true)
    }
    const handleClose=()=>{
        setOpenSnackBAr(false)
    }
    const action =(
        <React.Fragment>

<Button color="secondary"  size="small"onClick={handleClose}>Geri Al</Button>
        <IconButton>
            <CloseIcon sx={{color:'white'}}onClick={handleClose}/>
        </IconButton>

        </React.Fragment>
   
    )
  return (
    <div>
        <Button onClick={handleClick}>SnackBar ı Aç</Button>
    <Snackbar open={openSnackBAr} message="Hata mesajı Aldınız" action={action} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center'}}/>
    
    </div>
  )
}
