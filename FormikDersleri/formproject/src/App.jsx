import './App.css'
import {Routes,Route} from 'react-router-dom'
import GeneralForm from './components/GeneralForm'
import PortalFom from './components/PortalFom'

function App() {
 

  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<GeneralForm/>}/>
          <Route path='/portal' element={<PortalFom/>}/>
      


      </Routes>

    </div>
  )
}

export default App
