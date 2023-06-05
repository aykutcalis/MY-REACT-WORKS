import React from 'react'
import {Stack,TextField,InputAdornment} from '@mui/material'
import {useState} from 'react'

export const LessonTextField = () => {
  const [value, setValue] = useState('')
  return (
    <Stack spacing={4}>
        <Stack direction="row" spacing={2}></Stack>
        <TextField label="Ad"/>
        <TextField label="Ad" variant='outlined'/>
        <TextField label="Ad" variant='filled'/>
        <TextField label="Ad" variant='standard'/>
        <TextField label="Ad" variant='outlined' size='small' color='error'/>
        <TextField label="Ad" variant='outlined'type='password' helperText='Please Enter your Name'/>
        <TextField disabled label="Ad" variant='outlined'type='password' helperText='Please Enter your Name'/>
        <TextField InputProps={{readOnly:true}} label="Ad" variant='outlined'type='password' helperText='Please Enter your Name'/>
        <TextField InputProps={{startAdornment:(<InputAdornment position='start'>TL</InputAdornment>)}} label="toplam" variant='outlined'type='password' />
        <TextField InputProps={{endAdornment:(<InputAdornment position='end'>TL</InputAdornment>)}} label="toplam" variant='outlined'type='password' />
        
        
        <Stack direction="row"> <TextField onChange={(e)=>setValue(e.target.value)} value={value} label="Şifre" variant='outlined'type='password'
         helperText={!value? 'Beyeefendi şifrenizi girer misniz girdirttiriyim mi': 'Neyse Gridin bakalım şindilik paylaşayın deme kimseylen'}/></Stack>

    </Stack>
  )
}
