import 'bulma/css/bulma.css'
import { useState } from 'react'
import './App.css';
import  Course  from './Course';
import Angular from './images/angular.jpg'
import Bootstrap from './images/bootstrap5.png'
import Ccsharp from './images/ccsharp.png'
import KompleWeb from './images/kompleweb.jpg'


function App() {
  return (
    <div className="App">
      <section className="hero is-link">
  <div className="hero-body">
    <p className="title">
      Kurslarım
    </p>
  </div>
</section>
    <div className="container">
      <section className='section'>
      <div className="columns">
        <div className="column">
        <Course
      image={Angular} title="Angular" description="Lorem ipsum dolor sit, amet consectetur 
      adipisicing elit. Dolor eaque necessitatibus quaerat ipsum natus tempore, veritatis 
      tempora nam beatae dicta omnis nisi accusamus accusantium ipsam facere velit labore!
       Quod perferendis quae nisi dicta eos officiis asperiores ullam suscipit voluptatibus 
       quidem voluptatem vel, 
      laboriosam fugiat numquam iure eveniet reiciendis necessitatibus illo?"/>
        </div>
        <div className="column">
        <Course 
      image={Bootstrap} title="Bootstrap5" description="Lorem ipsum dolor sit, amet consectetur 
      adipisicing elit. Dolor eaque necessitatibus quaerat ipsum natus tempore, veritatis 
      tempora nam beatae dicta omnis nisi accusamus accusantium ipsam facere velit labore!
       Quod perferendis quae nisi dicta eos officiis asperiores ullam suscipit voluptatibus 
       quidem voluptatem vel, 
      laboriosam fugiat numquam iure eveniet reiciendis necessitatibus illo?"/>
        </div>
        <div className="column">
        <Course
      image={Ccsharp}  title="Komple Web" description="Lorem ipsum dolor sit, amet consectetur 
      adipisicing elit. Dolor eaque necessitatibus quaerat ipsum natus tempore, veritatis 
      tempora nam beatae dicta omnis nisi accusamus accusantium ipsam facere velit labore!
       Quod perferendis quae nisi dicta eos officiis asperiores ullam suscipit voluptatibus 
       quidem voluptatem vel, 
      laboriosam fugiat numquam iure eveniet reiciendis necessitatibus illo?"/>
        </div>
        <div className="column">
        <Course 
      image={KompleWeb} title="Frontend" description="Lorem ipsum dolor sit, amet consectetur 
      adipisicing elit. Dolor eaque necessitatibus quaerat ipsum natus tempore, veritatis 
      tempora nam beatae dicta omnis nisi accusamus accusantium ipsam facere velit labore!
       Quod perferendis quae nisi dicta eos officiis asperiores ullam suscipit voluptatibus 
       quidem voluptatem vel, 
      laboriosam fugiat numquam iure eveniet reiciendis necessitatibus illo?"/>
        </div>
      </div>
      </section>
      
    </div>
    </div>
  )
}

export default App
