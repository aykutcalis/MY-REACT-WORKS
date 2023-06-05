import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Courselist from './components/Courselist'
import { useEffect } from 'react'
import { calculateTotal } from './control/cartSlice'
import { useSelector,useDispatch } from 'react-redux'

function App() {
  const {cartItems}=useSelector((store)=>store.cart)
  const dispatch =useDispatch();

useEffect(()=>{
dispatch(calculateTotal())
},[cartItems])

  const [count, setCount] = useState(0)

  return (
   <div className="App">
    <Navbar/>
    <Courselist/>
   </div>
  )
}

export default App
