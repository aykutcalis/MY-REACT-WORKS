import React from 'react'
import {FormControl,FormLabel,FormControlLabel,Radio,RadioGroup,FormHelperText} from '@mui/material'
import {useState} from 'react'

export const LessonRadioGroup = () => {
    const [value, setValue] = useState('')
    console.log(value)

    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
         setValue(event.target.value)
    }
  return (
    <FormControl>
        <FormLabel>Maaş Beklemtiniz</FormLabel>
         <RadioGroup row name='expectedSalary' value={value} onChange={handleChange}>
            <FormControlLabel label="2000$" value="2000" color="secondary" control={<Radio color="error"/>}></FormControlLabel>
            <FormControlLabel label="3000$" value="3000" color="secondary" control={<Radio color="error"/>}></FormControlLabel>
            <FormControlLabel label="4000$" value="4000" color="secondary" control={<Radio color="error"/>}></FormControlLabel>
         </RadioGroup>
         <FormHelperText>Yanlış Seçim</FormHelperText>
    </FormControl>
  )
}
