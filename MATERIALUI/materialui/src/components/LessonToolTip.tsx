import React from 'react'
import {Tooltip,IconButton} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export const LessonToolTip = () => {
  return (
    <Tooltip title='Sil' placement='top-end'>
       
        <IconButton> <DeleteIcon/></IconButton>
    </Tooltip>
  )
}
