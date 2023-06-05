import React from 'react'

import {InstructorPros} from './propstypes'

function Instructor(props:InstructorPros) {
  return (
    <div>{props.instructorNameLastName.firstName}{''}
     {props.instructorNameLastName.lastName}</div>
  )
}

export default Instructor