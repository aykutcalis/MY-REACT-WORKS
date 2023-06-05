import React from 'react'
import {Box,FormControlLabel,Checkbox,FormControl,FormLabel,FormGroup,FormHelperText} from '@mui/material'
import {useState} from 'react'

export const LessonCheckBox = () => {
  const [isAccept, setIsAccept] = useState(false)
  const [knowledge, setKnowledge] = useState<string[]>([])
  console.log(knowledge)

const handleKnowledgeChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
const index =knowledge.indexOf(event.target.value);
if(index===-1)
{
  setKnowledge([...knowledge,event.target.value])
}
else{
  setKnowledge(knowledge.filter((item)=>item!==event.target.value))
}
}



  // console.log(isAccept)
  return (
   <Box>
    <Box>
    <FormControl>
      <FormLabel>Eğitim Durumu</FormLabel>
      <FormGroup row>
        <FormControlLabel control={<Checkbox/>} label="Lise"/>
        <FormControlLabel control={<Checkbox/>} label="Üniversite"/>
        <FormControlLabel control={<Checkbox/>} label="İlkokul"/>
      </FormGroup>
    </FormControl>
   </Box>
   <Box>
    <FormControl>
      <FormLabel>Eğitim Durumu</FormLabel>
      <FormGroup row>
        <FormControlLabel control={<Checkbox checked={isAccept} onChange={(e)=>setIsAccept(e.target.checked)}/>} label="Kullanım Koşullarını kabul Ediyorum"/>
      </FormGroup >
    </FormControl>
   </Box>
   <Box>
    <FormControl>
      <FormLabel>Frontend de Neleri Biliyorsun</FormLabel>
      <FormGroup row>
        <FormControlLabel value="react" control={<Checkbox checked={knowledge.includes('react')} onChange={handleKnowledgeChange}/>} label="React js"/>
        <FormControlLabel value="angular" control={<Checkbox checked={knowledge.includes('angular')} onChange={handleKnowledgeChange}/>} label="Angular"/>
        <FormControlLabel value="vue" control={<Checkbox checked={knowledge.includes('vue')} onChange={handleKnowledgeChange}/>} label="Vue js"/>
      </FormGroup >
    </FormControl>
   </Box>
   </Box>
  )
}
