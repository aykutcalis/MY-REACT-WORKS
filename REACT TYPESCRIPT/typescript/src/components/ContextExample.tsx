import React from 'react'
import {useContext} from  'react'
import { ThemeContext } from './ThemeContext'
import { thme } from './thme'

function ContextExample() {
    const theme=useContext(ThemeContext)
  return (
    <div style={{backgroundColor:thme.primary.main,color:thme.secondary.text}}>ContextExample</div>
  )
}

export default ContextExample