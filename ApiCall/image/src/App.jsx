import { useState } from 'react'
import SearchHeader from './SearchHeader'
import './App.css'
import searchImages from './api'
import ImageList from './components/imageList'

function App() {
 const [images, setImages] = useState([])
  const handleSubmit=async (term)=>{
const result= await searchImages(term);
setImages(result)
  };

  return (
    <div className="App">
        <SearchHeader search={handleSubmit}/>
        <ImageList imagesPlaceHolder={images}/>
    </div>
  )
}

export default App;
