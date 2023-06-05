import React from 'react'
import BannerImage from '../assets/banner.png'
import  '../styles/Contact.css'

export const Contact = () => {
  return (
    <div className='contact' >
      <div className='leftSide' style={{backgroundImage:`url(${BannerImage})`}}>

      </div>
      <div className='rightSide'>
        <h1>Bizimle İletişime Geçin</h1>
           <form >
            <label>Ad Soyad</label>
            <input type="text" name='name' placeholder='Lütfen adınızı soyadınız giriniz..'/>
            <label>email</label>
            <input type="email" name='email' placeholder='Lütfen emailinizi giriniz..'/>
            <label>Ad Soyad</label>
            <textarea rows='6' name='message' placeholder='Lütfen adınızı soyadınız giriniz..'></textarea>
           </form>
      </div>
    </div>
  )
}
