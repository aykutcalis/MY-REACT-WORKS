import React from 'react'
import { CircularProgress,Stack,LinearProgress } from '@mui/material'


export const LessonProgress = () => {
  return (
   <Stack spacing={2}>
     <CircularProgress/>
     <CircularProgress color='secondary'/>
     <CircularProgress  color='success'/>
     <CircularProgress variant='determinate' value={25}  color='primary'/>
     <LinearProgress color='primary'/>
     <LinearProgress color='secondary'/>
     <LinearProgress color='success' variant='determinate' value={50}/>

   </Stack>
  )
}
