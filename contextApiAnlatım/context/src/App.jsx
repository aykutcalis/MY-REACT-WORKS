import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthContext from './context/auth-context'
import Auth from './auth'

function App() {
  const [authStatus, setAuthStatus] = useState(false)
  const loginAuth=()=>{
    setAuthStatus(true);
  }

  return (
    <div>
      <AuthContext.Provider value={{status:authStatus,login:loginAuth}}>
<Auth/>
      </AuthContext.Provider>
    </div>
  )
}

export default App
