import React from 'react'
import {FormControl,FormLabel,FormControlLabel,Radio,RadioGroup,FormHelperText,Button} from '@mui/material'
import {useState} from 'react'


export const LessonradioExample = () => {
    const [value, setValue] = useState('')
    const [helperText, setHelperText] = useState('')
    const [error, setError] = useState(false)
    const handleRadioChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
setValue(event.target.value)
    }

    const handleSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        if(value==='canboz'){
            setHelperText('Doğru cevap tabi ki Canboz')
            setError(false)
        }
        else if(value==='ofCourseCanBoz'){
            setHelperText('Tebrikler doğru cevap')
            setError(false)
        }
        else{
            setHelperText('Lütfen seçim yapınız')
            setError(true);
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <FormControl error={error}>
            <FormLabel>En Şaşalı React eğitmeni Kimdir</FormLabel>
            <RadioGroup onChange={handleRadioChange}>
                <FormControlLabel value="canboz" label="can Boz" control={<Radio/>}/>
                <FormControlLabel value="ofCourseCanBoz" label="Tabi ki can Boz" control={<Radio/>}/>
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
            <Button type='submit' variant='outlined'>Gönder</Button>
        </FormControl>
    </form>
  )
}
