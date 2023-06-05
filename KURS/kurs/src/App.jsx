import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CoursForm from './components/CoursForm'
import CourseSearch from './components/CourseSearch'
import Courselist from './components/Courselist'
import CourseValue from './components/CourseValue'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container is-fluid">
      <CoursForm/>
      <CourseSearch/>
      <Courselist/>
      <CourseValue/>



    </div>
  )
}

export default App
