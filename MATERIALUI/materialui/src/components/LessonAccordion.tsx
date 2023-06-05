import React from 'react'
import { Accordion,AccordionSummary,AccordionDetails,Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {useState} from 'react';

export const LessonAccordion = () => {
    const [expanded, setExpanded] = useState<string | false>(false)

const handleChange=(panel:string)=>(event:React.SyntheticEvent,isAxpended:boolean)=>{
        console.log(isAxpended)
        setExpanded(isAxpended ?panel : false)
}

  return (
  <div>
  {/* <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
<Typography>İlk Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae modi, iste magni corrupti, iure facere deleniti 
            quaerat harum reprehenderit quisquam nulla vel debitis consequuntur cumque, blanditiis non odit quibusdam itaque.</AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
<Typography>İkinci Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae modi, iste magni corrupti, iure facere deleniti 
            quaerat harum reprehenderit quisquam nulla vel debitis consequuntur cumque, blanditiis non odit quibusdam itaque.</AccordionDetails>
    </Accordion>
    <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
<Typography>Üçüncü Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae modi, iste magni corrupti, iure facere deleniti 
            quaerat harum reprehenderit quisquam nulla vel debitis consequuntur cumque, blanditiis non odit quibusdam itaque.</AccordionDetails>
    </Accordion> */}
      <Accordion expanded={expanded==='panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
<Typography>İlk Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae modi, iste magni corrupti, iure facere deleniti 
            quaerat harum reprehenderit quisquam nulla vel debitis consequuntur cumque, blanditiis non odit quibusdam itaque.</AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
<Typography>İkinci Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae modi, iste magni corrupti, iure facere deleniti 
            quaerat harum reprehenderit quisquam nulla vel debitis consequuntur cumque, blanditiis non odit quibusdam itaque.</AccordionDetails>
    </Accordion>
    <Accordion disabled>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
<Typography>Üçüncü Bölüm</Typography>
        </AccordionSummary>
        <AccordionDetails>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae modi, iste magni corrupti, iure facere deleniti 
            quaerat harum reprehenderit quisquam nulla vel debitis consequuntur cumque, blanditiis non odit quibusdam itaque.</AccordionDetails>
    </Accordion>

  </div>
  
    
  )
}
