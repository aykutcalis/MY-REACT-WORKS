import React from 'react'
import BannerImage from '../assets/banneryeni.jpg'
import '../styles/About.css'

export const About = () => {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage:`url(${BannerImage})`}}>

      </div >
      <div className='aboutBottom'>
        <h1>HAKKIMIZDA</h1>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
           Dolores eius, nobis, nulla nostrum minus ratione, sit voluptatem quia qui rem 
           incidunt? Libero aliquam molestiae debitis voluptates cumque ipsam nemo ex.
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. A possimus iste dolore voluptatum eos sit molestias quasi 
           id deserunt culpa, et reprehenderit odit aliquid enim, sunt, nihil praesentium labore Lorem ipsum dolor sit amet consectetu
           r adipisicing elit. Saepe accusantium rem officiis 
           totam quos a aliquid alias quod animi molestias aut dicta qui beatae, fugiat culpa dignissimos ullam ut sunt?</p>   
   </div>
    </div>
  )
}
