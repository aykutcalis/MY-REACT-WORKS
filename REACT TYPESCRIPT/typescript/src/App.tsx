
import './App.css'
import ContextExample from './components/ContextExample';
import EventActions from './components/EventActions';
import Home from './components/Home'
import Instructor from './components/Instructor';
import InstructorList from './components/InstructorList';
import LoginCheck from './components/LoginCheck';
import Request from './components/Request';
import { ThemeContextProvider } from './components/ThemeContext';


function App() {
  const instructor={
  firstName:'Can',
  lastName:'Boz'
};
const instructorList=[
  {
    firstName:'Can',
    lastName:'Boz'
  },
  {
    firstName:'Canan',
    lastName:'Boz'
  },
  {
    firstName:'Osman',
    lastName:'Boz'
  },
];
 

  return (
    <div className='App'>
    {/* <Home name="Can Boz" courseNumber={15} isBest={false}/>
    <Instructor instructorNameLastName={instructor}/>
    <InstructorList instructorNameLastNameList={instructorList}/>
    <Request status="success"/>
    <EventActions/> */}
    {/* <LoginCheck/>
    <ThemeContextProvider>
    <ContextExample/>
    </ThemeContextProvider> */}

  
    
    </div> 
  )
}

export default App
