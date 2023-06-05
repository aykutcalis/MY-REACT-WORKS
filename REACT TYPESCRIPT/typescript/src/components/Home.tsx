import React from 'react'
import { DateComing } from './propstypes'

function Home(props: DateComing) {
  return (
    <div>{props.name} hosgeldiniz der {props.courseNumber} {props.isBest ?<p>En iyi react eğitiminm budur</p>:<p>En iyi react eğitimim Bu olacak</p> }</div>
  )
}

export default Home